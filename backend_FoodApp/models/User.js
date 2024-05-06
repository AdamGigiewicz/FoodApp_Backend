const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    otp: {type: String, required: false, default: "none"},
    fcm: {type: String, required: false, default: "none"},
    password: {type: String, required: true},
    verification: {type: Boolean, default: false},
    phone: {type: String, default : "012345678"},
    phoneVerification: {type: Boolean, default: true},
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: false,
    },
    userType: {type: String, required: true, default: "Client", enum: ['Client', 'Admin', 'Vendor', 'Driver']},
    profile: {type: String, default: 'https://static.vecteezy.com/system/resources/previews/024/183/535/original/male-avatar-portrait-of-a-young-man-with-glasses-illustration-of-male-character-in-modern-color-style-vector.jpg'}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);