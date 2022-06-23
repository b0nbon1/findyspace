import configReader from 'dotenv';

const configs = configReader?.config()?.parsed;

export const NodeEnv = configs!.NODE_ENV;
export const sessionName = configs!.SESSION_COOKIE;
export const appEncryptionKey = configs!.APP_ENCRYPTION_KEY;
export const BaseUrl = configs!.API_URL;
export const sessionDuaration = configs!.SESSION_DURATION || 1200;
export const fbAppID = configs!.FACEBOOK_CLIENT_ID;
export const fbAppSecret = configs!.FACEBOOK_CLIENT_SECRET;
