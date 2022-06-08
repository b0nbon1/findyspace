import getUser from './authentication';

const webAuth = (context: any) => {
  const user = getUser(context);

  context.user = user;
};

export default webAuth;
