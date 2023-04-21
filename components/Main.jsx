const React = require('react');
const Layout = require('./Layout');
const Trip = require('./Trip');

function Main({ title, trips = [], user}) {
  return (

    <Layout title={title} user={user}>
      <div className='cards-conteiner'>
        {trips.map((trip) => (
          <Trip key={trip.id} trip={trip} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Main;
