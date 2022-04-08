import shortId from 'shortid';

const generateEncryptionKey = () => {
  const [ikm, info, authTag] = [1, 2, 3].map(() => shortId.generate());
  return `${ikm}|${info}|${authTag}`;
};

export default generateEncryptionKey;
