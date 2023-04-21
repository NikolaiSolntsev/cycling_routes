const React = require('react');
const NavBar = require('./NavBar');

function Layout({ title, children, trip, user}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <script src='/public/scripts/navbar.js' defer></script>
        <link href="/style/style.css" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
      </head>
      <body className="body">
        <NavBar trip={trip} user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
