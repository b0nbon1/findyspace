// this function is to macSign a string
import crypto from 'crypto';
import generateHkdfKey from './generateHkdfKey';

const macSign = (
  ikm: string | Buffer,
  info: string | undefined,
  cipherText: any,
) => {
  /* macSign function needs three parameters
   * ikm the initial keying material to be used in generating the hkdf authentication key
   * info parameter also to be used in generating the hkdf authentication key
   * cipherText which is the string you need to decrypt
   */

  // get the hkdf authentication key
  // by default it will use SHA-256 and will return a buffer
  const hkdfAuthenticationKey = generateHkdfKey(ikm, 32, null, info);
  const cipherTextBuffer = Buffer.from(cipherText, 'base64');
  // return the base 64 of the signed string
  return crypto
    .createHmac('sha256', hkdfAuthenticationKey)
    .update(cipherTextBuffer)
    .digest('base64');
};

export default macSign;
