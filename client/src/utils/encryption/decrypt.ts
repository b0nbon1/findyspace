// this function is purely to get the plain Text of an encrypted string
// for now we will return it as base 64
import crypto from 'crypto';
import getAlgorithm from './getAlgorithm';
import generateHkdfKey from './generateHkdfKey';

const decrypt = (
  cipherText: string,
  ivParam: any,
  ikm: any,
  info: string | undefined,
) => {
  // get the hkdf encryption key
  // by default it will use SHA-256 and will return a buffer
  const encryptionHkdfKey = generateHkdfKey(ikm, 16, null, info);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: we donno why
  const key = Buffer.from(encryptionHkdfKey, 'base64');
  const iv = Buffer.from(ivParam, 'base64');
  // let's decrypt the plain text
  try {
    const decipher = crypto.createDecipheriv(
      getAlgorithm(encryptionHkdfKey),
      key,
      iv,
    );
    const decrypted = decipher.update(cipherText, 'base64');
    return Buffer.concat([decrypted, decipher.final()]);
  } catch (e) {
    return null;
  }
};

export default decrypt;
