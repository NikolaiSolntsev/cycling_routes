const authApiRoute = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

authApiRoute.post('/reg', async (req, res) => {
  const { login, password, password2 } = req.body;
  if (password !== password2) {
    res.status(403).json({ success: false, message: 'Пароли не совпадают' });
    return;
  }
  const addedUser = await User.findOne({ where: { login } });
  if (addedUser) {
    res.status(409).json({
      success: false,
      message: 'Пользователь с таким логином уже существует',
    });
    return;
  }

  const user = await User.create({
    login,
    password: await bcrypt.hash(password, 10),
  });
  res.status(201).json({ success: true });
});

module.exports = authApiRoute;
