const typeDefs = `

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
      email: String,
      username: String!
      first: String!,
      last: String!,
      isMusician: Boolean!): Auth

    addMusician(
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
    ): Musician


  }
`;

module.exports = typeDefs;
