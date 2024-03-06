const typeDefs = `

  type Auth {
    token: ID!
    user: User
  }


  type User {
    _id: ID
    email: String!
    username: String!
    first: String!
    last: String!
    isMusician: Boolean!
    active: Boolean!
    favorites: [Musician]
  }


  type Musician {
    _id: ID
    user: User!
    imageLink: String
    stageName: String!
    publicEmail: String!
    description: String
    tags: [Tag]
    city: String!
    state: String!
    lat: Float!
    lon: Float!
    minCost: Float!
  }

  type Tag {
    _id: ID
    tag: String!
  }

  type Query {
    userByUsername(username: String!): User
    musicianById(musicianId: ID!): Musician
    musiciansByLocation(lat: Float, lon: Float): [Musician]
    tags: [Tag]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    
    addUser(
      email: String!,
      username: String!,
      first: String!,
      last: String!,
      isMusician: Boolean!
    ): Auth

    addMusician(
      user: ID!,
      imageLink: String,
      stageName: String!,
      publicEmail: String!,
      description: String,
      tags: [ID]!,
      city: String!,
      state: String!,
      lat: Float!,
      lon: Float!,
      minCost: Float!
    ): Musician
    
    updateMusician(
      imageLink: String,
      stageName: String,
      publicEmail: String,
      description: String,
      tags: [ID],
      city: String,
      state: String,
      minCost: Float
    ): Musician

    updateUser(
      email: String,
      username: String,
      first: String,
      last: String,
      isMusician: Boolean
    ): Auth

  }
`;

module.exports = typeDefs;
