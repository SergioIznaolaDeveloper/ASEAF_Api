require('dotenv');
const cors = require('cors')
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './client/build')));

// Routes:
const routes = require('./routes/api_routes');

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});