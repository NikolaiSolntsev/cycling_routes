const tripsApiRoute = require('express').Router();
const { Trip } = require('../../db/models');

tripsApiRoute.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  await Trip.destroy({ where: id });
  res.json({ success: true });
});

module.exports = tripsApiRoute