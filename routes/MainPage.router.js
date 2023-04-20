const React = require('react');
const ReactDOMServer = require('react-dom/server');
const MainPage = require('../components/MainPage');

const mainRoute = require('express').Router();
// const { Trip } = require('../db/models');

mainRoute.get('/', async (req, res) => {
  const {user}= res.app.locals //
  const trips = await Trip.findAll();
  const element = React.createElement(MainPage, { user, trips });//
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

module.exports = mainRoute;