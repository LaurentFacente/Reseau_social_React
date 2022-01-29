require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db/sequelize');
const path = require('path');


// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

// Lancement datatbase
sequelize.initDb();

// Endpoints
require('./routes/findAllPost')(app) // Ok
require('./routes/findPostByPk')(app) // Ok mais ne lit pas les data
require('./routes/createPost')(app) // Ok
require('./routes/updatePost')(app) // Eror
require('./routes/deletePost')(app) // Error
require('./routes/login')(app)

app.use('/images', express.static(path.join(__dirname, 'images')));



module.exports = app;