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
    user: ID!
    imageLink: String
    stageName: String!
    publicEmail: String!
    description: String
    tags: [Tag]
    city: String!
    state: String!
    lat: Float!
    lon: Float!
    minCost: Float
  }

  type Tag {
    _id: ID
    tag: String!
  }

  input TagInput {
    name: String!
  }

  type Query {
    users: [User]
    userById(userId: ID!): User
    userByUsername(username: String!): User
    musicianById(musicianId: ID!): Musician
    musicianByUserId(userId: ID!): Musician
    musiciansByLocation(city: String!, state: String!): [Musician]
    musiciansByTags(tags: [TagInput!]): [Musician]
    tags: [Tag]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    
    addUser(
      email: String!,
      username: String!,
      first: String!,
      last: String!,
      isMusician: Boolean!,
      password: String!
    ): Auth

    addMusician(
      user: ID!,
      imageLink: String,
      stageName: String!,
      publicEmail: String!,
      description: String,
      tags: [ID],
      city: String!,
      state: String!,
      minCost: Float
    ): Musician
    
    updateMusician(
      musicianId: ID!
      imageLink: String,
      stageName: String,
      publicEmail: String,
      description: String,
      tags: [ID]
      city: String,
      state: String,
      minCost: Float
    ): Musician

    updateUser(
      _id: ID!
      email: String,
      username: String,
      first: String,
      last: String,
      isMusician: Boolean
    ): User

    addTags(
      musicianId: ID!
      tagIds: [ID!]
    ): Musician

    removeTags(
      musicianId: ID!
      tagIds: [ID!]
    ): Musician
  }
`;

module.exports = typeDefs;
