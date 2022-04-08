import { RequestInit } from 'apollo-server-env';

interface AppRequestInit extends RequestInit {
  shouldEncrypt?: boolean;
  insertAuthHeaders?: boolean | undefined;
  insertDxlAuthHeaders?: boolean;
  insertCppDxlAuthHeaders?: boolean;
  insertUserAuthHeaders?: boolean;
  insertIdentityHeaders?: boolean;
  addBearerStringHeaders?: boolean;
  removeXSessionToken?: boolean;
  removeXtraHeaders?: boolean;
}

export default AppRequestInit;
