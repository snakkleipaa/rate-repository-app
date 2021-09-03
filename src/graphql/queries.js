import { gql } from '@apollo/client';

import { CORE_REPOSITORY } from './fragments';

export const GET_REPOSITORIES = gql`
    ${CORE_REPOSITORY}
    query {
        repositories {
            totalCount 
            edges {
                node {
                ...CoreRepositoryFields
                }
                cursor
            }
        }
    }
`;

export const AUTHORIZED_USER = gql`
    query {
        authorizedUser {
            id
            username
        }
    }
`