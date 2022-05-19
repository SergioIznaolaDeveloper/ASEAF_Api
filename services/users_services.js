const User = require('../models/users_models');

const findUserByField = async (field, value) => {
    try {
        const user = await User.find({ [field]: value});
        return user ? user[0] : false
    } 
    catch (error) {
        return error
    }
}

const updateUser = async (filter, update) => {
    try {
        const user = await User.findOneAndUpdate(filter, update, { new: true });
        return user ? user : false
    } 
    catch (error) {
        return error
    }
}

module.exports = {
    findUserByField,
    updateUser
}