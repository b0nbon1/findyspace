import { DataSourceConfig } from 'apollo-datasource';
import ApplicationRESTDataSource from './ApplicationRESTDataSource';

class UsersApi extends ApplicationRESTDataSource {
  constructor() {
    super();
    this.initialize({} as DataSourceConfig<any>);
  }

  async createUser(data: { email: string; password: string }) {
    try {
      const response = await this.post('/api/v1/users/create', data);
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
}

export default UsersApi;
