const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    level: {
        type: String,
        required: true,
    },
    postOwner: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: true,
    },
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

const Post = model('Post', postSchema);

module.exports = Post;