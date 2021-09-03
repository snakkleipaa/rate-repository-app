import { gql } from '@apollo/client'

export const AUTHORIZE_USER = gql`
  mutation Authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;