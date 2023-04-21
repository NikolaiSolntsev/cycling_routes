const React = require('react');

function Trip({ trip }) {
  return (

    <div className="card" style={{ width: '18rem' }}>
      <img src={trip.map} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{trip.trip_name}</h5>
        <h5 className="card-title">{trip.trip_length}</h5>
      </div>
      <button className='button'><a href={`/info/${trip.id}`}>Описание</a></button>
    </div>

  );
}

module.exports = Trip;
