import gql from 'graphql-tag';

const LOGIN_WITH_SOCIALS = gql`
  mutation loginWithSocials($token: String!, $type: String!) {
    loginWithSocials(token: $token, type: $type) {
      status
      message
      accessToken
    }
  }
`;

export default LOGIN_WITH_SOCIALS;
