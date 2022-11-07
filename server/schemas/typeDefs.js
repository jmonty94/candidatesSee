const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Profile {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Post {
        _id: ID
        title: String
        postOwner: Profile
    }

    type Auth {
        token: ID!
        profile: Profile
      }

    type Query {
        profiles: [Profile]
        profile(profileId: ID!): Profile
        posts: [Post]
        post: Post
    }

    type Mutation {
        addProfile(username: String!, email: String!, password: String!): Auth
    }
`

module.exports = typeDefs