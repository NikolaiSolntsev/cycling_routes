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
  const result = await response.json();

});

