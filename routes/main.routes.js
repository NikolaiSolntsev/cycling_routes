const router = require('express').Router();
const Main = require('../components/Main');
const { Trip } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const trips = await Trip.findAll({ raw: true });
    res.renderComponent(Main, { title: 'Trips List', trips });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
