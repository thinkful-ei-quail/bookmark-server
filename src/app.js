require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bookmarksRouter = require('./bookmarksRouter');
const app = express();
const morganOption = (process.env.NODE_ENV === 'production') ? 'tiny' : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.use(express.json());
app.use(bookmarksRouter);


module.exports = app