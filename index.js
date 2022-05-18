require('dotenv');

const cors = require('cors')

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes:
const routes = require('./routes/api_routes');

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});