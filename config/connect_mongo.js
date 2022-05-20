const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        mongoose.connect(url).then(() => console.log('MongoDB connected...'));
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;