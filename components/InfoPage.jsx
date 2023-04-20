const React = require('react');
const Layout = require('./Layout');

function InfoPage({ title, trip }) {
  return (
    <Layout title={title}>
      <div className="cardorado">
        <img src={trip.map} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-titleso">{trip.trip_name}</h5>
          <p className="card-texto">{trip.trip_length}</p>
          <p className="card-texto">{trip.description}</p>
          <p className="card-texto">{trip.creator}</p>
        </div>
      </div>
    </Layout>
  );
}

module.exports = InfoPage;
