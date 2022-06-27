import getUser from './authentication';

const webAuth = (context: any) => {
  const user = getUser(context);

  context.user = user;
  return user;
};

export default webAuth;
