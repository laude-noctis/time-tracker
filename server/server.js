const express = require('express');
// const db = require('./config/connection.js') havent estblished this yet
// const routes = require('./routes') havent established this yet either

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server is running on port ${PORT}`)
    });
});

