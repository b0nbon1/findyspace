import gql from 'graphql-tag';

const REGISTER_WITH_EMAIL = gql`
  mutation registerWithEmail($email: String!, $password: String!) {
    registerWithEmail(email: $email, password: $password) {
      status
      message
    }
  }
`;

export default REGISTER_WITH_EMAIL;
