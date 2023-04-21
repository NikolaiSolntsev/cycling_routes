const router = require('express').Router();

const Main = require('../components/Main');
const Login = require('../components/Login');
const Registration = require('../components/Registration');


const { Trip } = require('../db/models');


router.get('/', async (req, res) => {
  try {
    const trips = await Trip.findAll({ raw: true });
    res.renderComponent(Main, { title: 'Trips List', trips });
  } catch ({ message }) {
    res.json(message);
  }
});
router.get('/login', async (req, res) => {
  try {
    res.renderComponent(Login, { title: 'вход' });
  } catch ({ message }) {
    res.json(message);
  }
});
router.get('/registration', async (req, res) => {
  
  try {
    res.renderComponent(Registration, { title: 'вход' });
  } catch ({ message }) {
    res.json(message);
  }
});



module.exports = router;
