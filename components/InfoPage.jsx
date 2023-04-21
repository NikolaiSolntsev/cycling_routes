const React = require('react');
const Layout = require('./Layout');

function InfoPage({ title, trip }) {
  return (
    <Layout title={title}>
      <div className="cardorado">
        <img src={trip.map} className="card-img-top" alt="..." />
        <div className="card-bodieso">
          <h5 className="card-titleso">{trip.trip_name}</h5>
          <p className="card-texto">{trip.trip_length}</p>
          <p className="card-texto">{trip.description}</p>
          <p className="card-texto">{trip.creator}</p>
          <form
            action={`/info/delete-trip/${trip.id}`}
            method="POST"
            className="button-delete"
          >
            <button className="button-del" type="submit">
              Удалить маршрут
            </button>
          </form>

          <button className="button-edit js-edit-btn" type="button">
            Изменить маршрут
          </button>
        </div>
      </div>

      <form className="edit-form" id={trip.id}>
        Измени название маршрута
        <input name="trip_name" type="text" defaultValue={trip.trip_name} />
        Уточни расстояние маршрута
        <input name="trip_length" type="text" defaultValue={trip.trip_length} />
        Напиши новое описание маршрута
        <input name="description" type="text" defaultValue={trip.description} />
        <button className="button-save js-save-btn" type="submit">
          Сохранить изменения
        </button>
      </form>
      <script src="/scripts/info.js" defer />
    </Layout>
  );
}

module.exports = InfoPage;
