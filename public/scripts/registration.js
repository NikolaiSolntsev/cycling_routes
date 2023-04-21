const form = document.getElementById('registration-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.target;
  const { login, password, password2 } = form;
  
  const response = await fetch('/api/auth/reg', {
    method: 'post',
    body: JSON.stringify({ login: login.value, password: password.value , password2: password2.value}),
    headers:{ 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    // редирект на главную
    window.location.href = '/';
  } else {
  const result = await response.json();
alert ('твоя ошибка')
event.target.reset()
}})

