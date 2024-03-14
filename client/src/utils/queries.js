import { gql } from '@apollo/client';

// Executing get user
export const GET_USER = gql`
    query userById($userId: ID!) {
        userById(userId: $userId) {
            _id
            username
            first
            last
            email
            isMusician
            active
        }
    }
`

export const GET_MUSICIAN_BY_ID = gql`
    query musicianById($musicianId: ID!) {
        musicianById(musicianId: $musicianId) {
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

export const GET_MUSICIANS_BY_LOCATION = gql`
    query musiciansByLocation($lat: Float, $lon: Float) {
        musiciansByLocation(lat: $lat, lon: $lon) {
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
`

export const GET_MUSICIANS_BY_TAGS = gql`
    query musiciansByTags($tags: [Tag!]) {
        musiciansByTags(tags: $tags) {
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
`

export const GET_MUSICIAN_BY_USER_ID = gql`
    query musicianByUserId($userId: ID!) {
        musicianByUserId(userId: $userId) {
            _id
            imageLink
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
`

// Executing get tags array
export const GET_TAGS = gql`
    query tags{
        tags{
            _id
            tag
        }
    }
`