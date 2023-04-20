const React = require('react');

function Trip({ trip }) {
  return (
    <li>
      <div className="card" style={{ width: '18rem' }}>
        <img src={trip.map} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{trip.trip_name}</h5>
        </div>
        <a href={`/trips/${trip.id}`}>Подробнее</a>
      </div>
    </li>
  );
}

module.exports = Trip;