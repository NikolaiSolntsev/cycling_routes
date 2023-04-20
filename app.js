require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT ?? 3000;
const app = express();

const mainRoute = require('./routes/main.routes');
const infoRoute = require('./routes/info.routes');
const ssr = require('./middleware/ssr');

app.use(express.static('public'));
app.use(ssr);

app.use('/', mainRoute);
app.use('/info', infoRoute);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));