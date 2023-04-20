const router = require('express').Router();
const { Trip } = require('../db/models');
const InfoPage = require('../components/InfoPage');

router.get('/:trip_id', async (req, res) => {
  try {
    const { trip_id } = req.params;
    const trip = await Trip.findOne({ where: { id: trip_id } });
    res.renderComponent(InfoPage, { title: 'Info Page', trip });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
