const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')

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
    password :{
        type: String,
        required: true,
        unique: false,
        minLength: 5
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

// pre-save middleware for password creation - encrypts password input
userSchema.pre("save", async function (next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare input password with hashed password
userSchema.methods.isValidPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;