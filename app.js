require('@babel/register');
require('dotenv').config();
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT ?? 3000;
const app = express();

const mainRoute = require('./routes/main.routes');
const infoRoute = require('./routes/info.routes');
// const saveRoute = require('./routes/save.routes');
const ssr = require('./middleware/ssr');

app.use(express.static(path.join(__dirname, './public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);

app.use('/', mainRoute);
app.use('/info', infoRoute);
// app.use('/info', saveRoute);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
