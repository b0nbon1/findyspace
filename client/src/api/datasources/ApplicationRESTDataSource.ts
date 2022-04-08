import { RESTDataSource } from 'apollo-datasource-rest';
import cache from 'memory-cache';
import shortId from 'shortid';
import {
  ApolloError,
  AuthenticationError,
  ForbiddenError,
} from 'apollo-server-errors';
import AppRequestInit from '../../interfaces/AppRequestInit';
import { encryptSign } from '../../utils/encryption';
import { BaseUrl } from '../../../config';

class ApplicationRESTDataSource extends RESTDataSource {
  constructor(httpFetch: any = undefined) {
    super(httpFetch);
    this.baseURL = BaseUrl;
  }

  private async injectRequestHeaders(
    body: any,
    init: AppRequestInit | undefined,
  ): Promise<AppRequestInit> {
    const requestInit = init ?? { headers: {} };

    if (!requestInit.headers) {
      requestInit.headers = {};
    }

    if (requestInit?.shouldEncrypt) {
      const [ikm, info, authTag] = [1, 2, 3].map(() => shortId.generate());

      (requestInit.headers as any)['X-MessageID'] = `${ikm}|${info}|${authTag}`;
      requestInit.body = JSON.stringify({
        data: encryptSign(ikm, info, authTag, JSON.stringify(body)),
      });
    } else if (body && Object.keys(body).length > 0) {
      requestInit.body = body;
    }
    return requestInit;
  }

  protected async post<TResult = any>(
    path: string,
    body?: ArrayBuffer | ArrayBufferView | string | object,
    init?: AppRequestInit,
  ): Promise<TResult> {
    const injected = await this.injectRequestHeaders(body, init);
    return super.post(path, injected.body, injected);
  }

  protected async get<TResult = any>(
    path: string,
    params?:
      | URLSearchParams
      | string
      | {
          [p: string]:
            | Record<string, unknown>
            | Record<string, unknown>[]
            | undefined;
        }
      | Iterable<[string, Record<string, unknown>]>
      | Array<[string, Record<string, unknown>]>,
    init?: AppRequestInit,
  ): Promise<TResult> {
    const requestInit = await this.injectRequestHeaders({}, init);
    console.log(path, params, requestInit);
    return super.get(path, params, requestInit);
  }

  protected async put<TResult = any>(
    path: string,
    body?: ArrayBuffer | ArrayBufferView | string | object,
    init?: AppRequestInit,
  ): Promise<TResult> {
    const injected = await this.injectRequestHeaders(body, init);
    return super.put(path, injected.body, injected);
  }

  protected async delete<TResult = any>(
    path: string,
    params?:
      | URLSearchParams
      | string
      | {
          [p: string]:
            | Record<string, unknown>
            | Record<string, unknown>[]
            | undefined;
        }
      | Iterable<[string, Record<string, unknown>]>
      | Array<[string, Record<string, unknown>]>,
    init?: AppRequestInit,
  ): Promise<TResult> {
    return super.delete(
      path,
      params,
      await this.injectRequestHeaders({}, init),
    );
  }

  protected async patch<TResult = any>(
    path: string,
    body?: ArrayBuffer | ArrayBufferView | string | object,
    init?: AppRequestInit,
  ): Promise<TResult> {
    const injected = await this.injectRequestHeaders(body, init);
    return super.patch(path, injected.body, injected);
  }

  protected didEncounterError(error: any): void {
    const extensions = error?.extensions;
    if (
      extensions?.code === 'UNAUTHENTICATED' &&
      extensions?.response?.status === 401 &&
      extensions?.response?.statusText === 'Unauthorized'
    ) {
      cache.clear();
    }
    throw error;
  }

  protected async didReceiveResponse(response: Response, _request: any) {
    if (response.status >= 400) {
      return this.errorFromResponse(response);
    }

    return super.didReceiveResponse(response, _request);
  }

  protected async errorFromResponse(response: Response) {
    const message = `${response.status}: ${response.statusText}`;
    let error: ApolloError;
    if (response.status === 401) {
      error = new AuthenticationError(message);
    } else if (response.status === 403) {
      error = new ForbiddenError(message);
    } else {
      error = new ApolloError(message);
    }

    const body = await super.parseBody(response);

    Object.assign(error, {
      response: {
        url: response.url,
        status: response.status,
        statusText: response.statusText,
        body,
      },
    });

    return error;
  }
}

export default ApplicationRESTDataSource;
