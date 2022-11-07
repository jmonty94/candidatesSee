const { AuthenticationError } = require('apollo-server-express');
const { Profile, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find();
        },
        profile: async(parent, { profileId }) => {
            return Profile.findById(profileId);
        },
    },
    Mutation: {
        addProfile: async (parent, { username, email, password }) => {
            const profile = await Profile.create({ username, email, password });
            const token = signToken(profile)
        }
    }
};

module.exports = resolvers
