const { Schema, model } = require('mongoose');

// Musician Model
const musicianSchema = new Schema({
    user: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        required: true,
    },
    imageLink: {
        type: String,
        maxLength: 120
    },
    stageName: {
        type: String,
        maxLength: 30,
        required: true,
        trim: true
    },
    publicEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Must be a valid email address."]
    },
    description: {
        type: String,
        maxLength: 250,
    },
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tag'
        }
    ],
    city: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    state: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    minCost: {
        type: Number,
        required: true,
        // Ensures only valid numbers are used
        validate: {
            validator: (value) => {
                return value >= 0;
            }, message: 'Must be a non-negative number'
        }
    }
});

const Musician = model('Musician', musicianSchema);

module.exports = Musician;