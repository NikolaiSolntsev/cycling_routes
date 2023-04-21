const React = require('react');
const Layout = require('./Layout');
// const Trip = require('./Trip');

function Registration({ title }) {
  return (
    <Layout>
      <title>{title}</title>

      <div className='title'>
      <h1>SIGN UP</h1>
      </div>
      <form id="registration-form" className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
            Логин
          </label>
          <input
            type="login"
            name="login"
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="loginHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            name="password2"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <a href="/#">ENTRY</a>
        </button>
      </form>

      <script src="/scripts/registration.js" defer />
    </Layout>
  );
}

module.exports = Registration;
