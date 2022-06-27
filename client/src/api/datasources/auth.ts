import { DataSourceConfig } from 'apollo-datasource';
import { setCookies } from 'cookies-next';
import { appEncryptionKey, sessionName } from '../../../config';
import { encryptSign } from '../../utils/encryption';
import ApplicationRESTDataSource from './ApplicationRESTDataSource';

class AuthorizationApi extends ApplicationRESTDataSource {
  constructor() {
    super();
    this.initialize({} as DataSourceConfig<any>);
  }

  async loginWithEmail(
    data: { email: string; password: string },
    req: any,
    res: any,
  ) {
    try {
      const response = await this.post('/api/v1/auth/login', data);
      let encryptedData: string | null = '';
      const [ikm, info, authTag] = appEncryptionKey.split('|');
      if (response?.data?.user) {
        encryptedData = encryptSign(
          ikm,
          info,
          authTag,
          JSON.stringify({
            bearerToken: response.data.access_token,
            user: response.data.user,
            loginTime: new Date().getTime(),
          }),
        );
        setCookies(sessionName, encryptedData, { req, res });
      }
      return {
        status: response?.status < 400,
        message: response?.message || 'successful logged in',
      };
    } catch (e) {
      // TODO: log errors here
      return {
        status: false,
        message: 'Failed to login',
      };
    }
  }

  async loginWithSocials(
    data: { token: string; type: string },
    req: any,
    res: any,
  ) {
    let encryptedData: string | null = '';
    const response = await this.post(
      `/api/v1/auth/${
        data.type === 'facebook' ? 'login-facebook' : 'login-google'
      }`,
      {
        accessToken: data.token,
      },
    );
    const [ikm, info, authTag] = appEncryptionKey.split('|');
    if (response?.data?.user) {
      encryptedData = encryptSign(
        ikm,
        info,
        authTag,
        JSON.stringify({
          bearerToken: response.data.access_token,
          user: response.data.user,
          loginTime: new Date().getTime(),
        }),
      );
      setCookies(sessionName, encryptedData, { req, res });
    }
    return {
      status: response?.status < 400,
      message: response?.message || 'successful logged in',
      accessToken: encryptedData,
    };
  }

  async testConnection() {
    try {
      const response = await this.get('/api');
      return response.body || {};
    } catch (e) {
      return {};
    }
  }
}

export default AuthorizationApi;
