import { gql } from '@apollo/client';

export const CORE_REPOSITORY = gql `
    fragment CoreRepositoryFields on Repository {
        id
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
    }
`;