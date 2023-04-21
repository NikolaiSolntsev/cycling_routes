const React = require('react');

function NavBar({ user }) {
  return (

    <nav id='nav' className='container'>
      <div className='links'>
        <a href='/'>HOME</a>
        <a href='/login'>LOGIN</a>
        <a href='/registration'>REGISRATION</a>
        <a href='#'>ADD TRIP</a>
      </div>
    </nav>

  );
}

module.exports = NavBar;
