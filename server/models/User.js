const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Must be a valid email address."]
    },
    username: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        maxLength: 20,
    },
    first: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        maxLength: 30
    },
    last: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        maxLength: 30
    },
    isMusician: {
        type: Boolean,
        required: true,
        unique: false,
        trim: true,
    },
    active: {
        type: Boolean,
        required: true,
        unique: false,
        trim: true,
        default: true
    },
    favorites: [
        {
            type: Schema.Types.ObjectId,
            ref: "Musician"
        }
    ]
});

const User = model('User', userSchema);

module.exports = User;