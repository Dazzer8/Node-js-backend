const mongoose = require("mongoose");
const emailValidator = require("email-validator")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide the username"],
    },
    password: {
        type: String,
        required: [true, "please provide the password"],
    },
    email: {
        type: String,
        required: [true, "Please provide the email"],
        validate: {
            validator: function (v){
                return email.emailValidator(v);
            },
            message: "Please proide a valid email-id"
        },
    },
    role: {
        type: String,
        enum: ["user","admin"],
        default: "user",
    },

});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;