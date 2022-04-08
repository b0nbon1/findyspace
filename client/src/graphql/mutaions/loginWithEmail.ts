import gql from 'graphql-tag';

const LOGIN_WITH_EMAIL = gql`
  mutation loginWithEmail($email: String!, $password: String!) {
    loginWithEmail(email: $email, password: $password) {
      status
      message
    }
  }
`;

export default LOGIN_WITH_EMAIL;
