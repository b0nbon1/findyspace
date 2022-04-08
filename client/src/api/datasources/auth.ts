import { DataSourceConfig } from 'apollo-datasource';
import ApplicationRESTDataSource from './ApplicationRESTDataSource';

class AuthorizationApi extends ApplicationRESTDataSource {
  constructor() {
    super();
    this.initialize({} as DataSourceConfig<any>);
  }

  async loginWithEmail(data: { email: string; password: string }) {
    try {
      const response = await this.post('/api/v1/auth/login', data);
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
