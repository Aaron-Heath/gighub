import { gql } from '@apollo/client';

// Executing user login
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
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
        $user: ID!,
        $imageLink: String,
        $stageName: String!,
        $publicEmail: String!,
        $description: String,
        $tags: [ID],
        $city: String!,
        $state: String!,
        $minCost: Float
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
`;


// Executing update musician
export const UPDATE_MUSICIAN = gql`
mutation updateMusician(
    $musicianId: ID!,
    $imageLink: String,
    $stageName: String,
    $publicEmail: String,
    $description: String,
    $tags: [String],
    $city: String,
    $state: String,
    $minCost: Float
    ) {
    updateMusician(
        musicianId: $musicianId,
        imageLink: $imageLink,
        stageName: $stageName,
        publicEmail: $publicEmail,
        description: $description,
        tags: $tags,
        city: $city,
        state: $state,
        minCost: $minCost
        ) {
        _id
        stageName
        publicEmail
        description
        tags
        city
        state
        minCost
        }
    }
`

// Executing update user
export const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $email: String, $username: String, $first: String, $last: String, $isMusician: Boolean) {
        updateUser(
            _id: $id,
            email: $email,
            username: $username,
            first: $first,
            last: $last,
            isMusician: $isMusician
        ) {
            _id
            username
            email
            isMusician
        }
    }
`;
export const ADD_TAGS = gql`
    mutation addTags($musicianId: ID!, $tagIds: [ID!]) {
        addTags(musicianId: $musicianId, tagIds: $tagIds) {
            _id
            stageName
            publicEmail
            description
            tags
            city
            state
            minCost
        }
    }
`

export const REMOVE_TAGS = gql`
    mutation removeTags($musicianId: ID!, $tagIds: [ID!]) {
        removeTags(musicianId: $musicianId, tagIds: $tagIds) {
            _id
            stageName
            publicEmail
            description
            tags
            city
            state
            minCost
    }
}
`