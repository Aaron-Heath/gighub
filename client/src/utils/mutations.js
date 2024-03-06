import { gql } from '@apollo/client';

// Executing user login
export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

// Executing add user
export const ADD_USER = gql`
    mutation addUser(
        $email: String!,
        $username: String!,
        $first: String!,
        $last: String!,
        $isMusician: Boolean!
    ) {
        addUser(
            username: $username,
            email: $email,
            first: $first,
            last: $last,
            isMusician: $isMusician
        ) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`

// Executing add musician
export const ADD_MUSICIAN = gql`
mutation addMusician(
    $user: UserInput!,
    $imageLink: String!,
    $stageName: String!,
    $publicEmail: String!,
    $description: String,
    $tags: [String]!,
    $city: String!,
    $state: String!,
    $lat: Float!,
    $lon: Float!,
    $minCost: Float!
) {
    addMusician(
        user: $user,
        imageLink: $imageLink,
        stageName: $stageName,
        publicEmail: $publicEmail,
        description: $description,
        tags: $tags,
        city: $city,
        state: $state,
        lat: $lat,
        lon: $lon,
        minCost: $minCost
    ) {
        _id
        stageName
        publicEmail
        description
        tags
        city
        state
        lat
        lon
        minCost
                }
            }
        }
    }
`
