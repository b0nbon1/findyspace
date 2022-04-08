// generate a hkdf key
import hkdf from 'futoin-hkdf';

const generateHkdfKey = (
  ikm: string | Buffer,
  length: number,
  salt: any,
  info = '',
  hash = 'SHA-256',
) => hkdf(ikm, length, { salt, info, hash });

export default generateHkdfKey;
