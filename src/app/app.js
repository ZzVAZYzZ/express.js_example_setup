const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const { default: helmet } = require('helmet');
const router = require('../routes/mainRoute');
const errorHandler = require('../middlewares/errorHandler');
const { mongodbConnect } = require('../databases/mongodb/mongodbConnect');
const swagger = require('../utils/swagger/swagger');
const initRedis = require('../databases/redis/redis');
const useragent = require('express-useragent');
const cookieParser = require('cookie-parser');

// test


//config
require("dotenv").config();
require('express-async-handler')

// init middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());
app.use(useragent.express());
app.use(cookieParser());

//init databases
mongodbConnect();
initRedis.connectRedis();

//init routers
app.use('/',router);
app.use('/',swagger);

//init error handler
app.use(errorHandler);






module.exports = app;