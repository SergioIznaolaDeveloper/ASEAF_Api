require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors')
const connectMongo = require('./config/connect_mongo');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware:
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './client/build')));

// Routes:
const routes = require('./routes/api_routes');

app.use('/api', routes);

app.use((error, req, res, next) => {
    if (error.type === 'custom_error') {
        return res.status(400).json({ response: false, message: `Bad request: ${error.message}`, full_error: error })
    }
    if (error.type === 'authentication_error' && error.code === 400) {
        return res.status(400).json({ response: false, authenticated: false, message: `Bad request: ${error.message}`, full_error: error })
    }
    if (error.type === 'validation_error' && error.code === 400) {
        return res.status(400).json({ response: false, authenticated: false, message: `Bad request: ${error.message}`, full_error: error })
    }
    if (error.type === 'authentication_error' && error.code === 401) {
        return res.status(401).json({ response: false, authenticated: false, message: `Unauthorized: ${error.message}`, full_error: error })
    }
    if (error.type === 'authentication_error' && error.code === 403) {
        return res.status(403).json({ response: false, authenticated: false, message: `Forbidden: ${error.message}`, full_error: error })
    }
    else if (error.type !== 'custom_error') {
        return res.status(500).json({ response: false, error: error })
    }
    else {
        return next()
    }
});

app.use((req, res) => {
    res.status(404).json({ response: false, message: 'Route not found' })
});
app.listen(PORT, async () => {
    try {
        await connectMongo(process.env.MONGO_URI);
        console.log(`Server listening on port ${PORT}...`)
    }
    catch (error) {
        console.log(error);
    }
});