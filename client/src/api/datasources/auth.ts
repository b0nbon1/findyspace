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
      let user;
      if (response?.status === 200) {
        user = await this.get('/api/v1/users/get_profile', undefined, {
          headers: {
            Authorization: `Bearer ${response.data.access_token}`,
          },
        });
      } else {
        throw new Error('Failed to login');
      }
      const [ikm, info, authTag] = appEncryptionKey.split('|');
      const encryptedData = encryptSign(
        ikm,
        info,
        authTag,
        JSON.stringify({
          bearerToken: response.data.access_token,
          user: user.data,
          loginTime: new Date().getTime(),
        }),
      );
      setCookies(sessionName, encryptedData, { req, res });
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

  async testConnection() {
    try {
      const response = await this.get('/api');
      console.log('responses $>', response);
      return response.body || {};
    } catch (e) {
      return {};
    }
  }
}

export default AuthorizationApi;
