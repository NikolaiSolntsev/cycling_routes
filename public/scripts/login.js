const form = document.getElementById('login-form');
const bcriypt = require('bcrypt')

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.target;
  const { login, password } = form;

  const form = fetch('/login', async (req, res) => {
    const { login, password } = req.body;
  
    const user = await User.findOne({ where: { login } });
   
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.json({ success: false, message: 'Нет такого пользователя либо пароли не совпадают' });
      return;
    }
  
   
    req.session.userId = user.id;
  
    res.json({ success: true });
  });
  if (response.ok) {
    window.location.href = '/';
    console.log("пользователь зарегистрировался");
  } else {
  const result = await response.json();
alert ('ошибка')
event.target.reset()
}


});
