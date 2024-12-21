const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email id already exists"],

        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error('Invalid email')

        //     }
        // }
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, "invalid phone number"],
        unique: [true, "phone number already exists"],
    },
    age: {
        type: String,
        required: true,
        minlength: [2, "age should be between 0-99"],
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    isAdmin: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        contentType: String
    },
    date: {
        type: Date,
        default: Date.now
    },
})

userSchema.methods.generateToken = async function () {
    try {
        const token = await jwt.sign(
            {
                userID: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
            }, process.env.SECRET_KEY, { expiresIn: "30d" })

        this.tokens = this.tokens.concat({ token })
        // //console.log(token)
        await this.save()
        return token

        // const userVerify = await jwt.verify(token, "process.env.SECRET_KEY")
        //         //console.log(userVerify)

    } catch (error) {
        console.log(error)
        console.log("Something went wrong")
    }
}

const User = new mongoose.model("User", userSchema)

module.exports = User;