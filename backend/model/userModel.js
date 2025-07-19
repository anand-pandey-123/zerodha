const {userSchema} = require('../schemas/userSchema');
const mongoose = require('mongoose');

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;