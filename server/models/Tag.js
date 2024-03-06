const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
    tag: {
        type: String,
        required: true
    }
})

const Tag = model('Tag', tagSchema);

module.exports = Tag;