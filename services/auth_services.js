const jwt = require('jsonwebtoken');
const { createHash, checkPassword } = require('../utils/hashing');
const User = require('../models/users_models');

const saveUser = async (email, password) => {
    try {
        const hashedPassword = await createHash(password);
        const newUser = await User.create({ email: email, password: hashedPassword });
        if (!newUser) {
            return false
        }
        return newUser
    }
    catch (error) {
        return error
    }
}

const getAccessToken = async (email) => {
    const accessToken = jwt.sign({ user_id: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10s' });
    if (!accessToken) {
        return false
    }
    return accessToken
}

const getRefreshToken = async (email) => {
    const refreshToken = jwt.sign({ user_id: email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '24h' });
    if (!refreshToken) {
        return false
    }
    return refreshToken
}

const storeRefreshToken = async (email, token) => {
    try {
        const user = await User.findOneAndUpdate({ email: email }, { refresh_token: token }, { new: true });
        if (!user) {
            return false
        }
        return user
    } catch (error) {
        return error
    }
}

const verifyAccessToken = async (token) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
        if (err) {
            return false
        }
        return user
    });
}

const verifyRefreshToken = async (token) => {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
        if (err) {
            return false
        }
        return user
    });
}

module.exports = {
    saveUser,
    getAccessToken,
    getRefreshToken,
    storeRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
}
