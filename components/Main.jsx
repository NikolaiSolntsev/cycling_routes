const React = require('react');
const Layout = require('./Layout');
const Trip = require('./Trip');

function Main({ title, trips = [] }) {
  return (
    <Layout title={title}>
      <ul>
        {trips.map((trip) => (
          <Trip key={trip.id} trip={trip} />
        ))}
      </ul>
    </Layout>
  );
}

module.exports = Main;
