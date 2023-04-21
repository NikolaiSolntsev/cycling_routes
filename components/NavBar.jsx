const React = require('react');

function NavBar({ user }) {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          HOME
        </a>
      </li>
      {user ? (
        <>
          <li className="nav">
            <a className="nav-link disabled">Привет, {user.login}!</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/logout">
              выход
            </a>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              LOGIN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/registration">
              REGISTRATION
            </a>
          </li>{' '}
        </>
      )}
    </ul>
  );
}

module.exports = NavBar;
