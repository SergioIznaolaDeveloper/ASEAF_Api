const bcrypt = require('bcrypt');

const createHash = async (password) => {
    try {
        const hash = await bcrypt.hash(password, 10);
        return hash
    }
    catch (error) {
        return error
    }

}

const checkPassword = async (password, hashedPassword) => {
    try {
        const result = await bcrypt.compare(password, hashedPassword);
        return result
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    createHash,
    checkPassword
}
