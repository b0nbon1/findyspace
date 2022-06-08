import configReader from 'dotenv';

const configs = configReader?.config()?.parsed;

export const NodeEnv = configs!.NODE_ENV || 'production';
export const sessionName = configs!.SESSION_COOKIE || 'x-session';
export const appEncryptionKey =
  configs!.APP_ENCRYPTION_KEY || 'WTCPFJF5|EHBN9Q|DGTYD98';
export const BaseUrl = configs!.API_URL || 'http://api:3090';
export const sessionDuaration = configs!.SESSION_DURATION || 1200;
