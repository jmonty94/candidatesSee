const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Profile {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Query {
        profiles: [Profile]
        profile(profileId: ID!): Profile
    }

    type Mutation {
        addProfile(username: String!, email: String!, password: String!): Auth
    }
`

module.exports = typeDefs