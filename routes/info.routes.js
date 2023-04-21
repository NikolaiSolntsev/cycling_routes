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

router.post('/delete-trip/:tripId', async (req, res) => {
  try {
    await Trip.destroy({ where: { id: req.params.tripId } });
    res.redirect('/');
  } catch ({ message }) {
    res.json(message);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { trip_name, trip_length, description } = req.body;
  try {
    const trip = await Trip.findOne({
      where: {
        id,
      },
    });
    trip.trip_name = trip_name;
    trip.trip_length = trip_length;
    trip.description = description;
    trip.save();
    res.sendStatus(200);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
