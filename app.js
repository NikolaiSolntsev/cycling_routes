require('@babel/register');
require('dotenv').config();

const express = require('express');
const session = require('express-session');

// const morgan = require('morgan');
const sessionConfig = require('./config/session');
const mainRoute = require('./routes/main.routes');
const infoRoute = require('./routes/info.routes');
const tripsApiRoute = require('./routes/api/tripsApi.routes');
const authApiRoute = require('./routes/api/authApi.routes');
// const sessionConfig = require('./config/session');
const ssr = require('./middleware/ssr');
const app = express();

const PORT = process.env.PORT ?? 3000;
app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(ssr);
app.use(express.json());

app.use('/', mainRoute);
app.use('/info', infoRoute);
app.use('/api/delete', tripsApiRoute);
app.use('/api/auth/', authApiRoute);


app.listen(PORT, () => console.log(`Server started at ${PORT}`));
