const React = require('react');
const Layout = require('./Layout');

function InfoPage({ title, trip }) {
  return (
    <Layout title={title}>
      <div className="card" style={{ width: '18rem' }}>
        <img src={trip.map} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{trip.trip_name}</h5>
          <p className='card-text'>{trip.trip_length}</p>
          <p className='card-text'>{trip.creator}</p>
        </div>
      </div>
    </Layout>
  );
}

module.exports = InfoPage;