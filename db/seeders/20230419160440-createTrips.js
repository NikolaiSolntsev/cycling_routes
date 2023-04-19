'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const tripsData = [
      {
        map: 'https://i.pinimg.com/236x/98/49/7a/98497ad5cfddc0facbbecd2c2ed2362b.jpg',
        length: '10 км',
        trip_name: 'Путешествие по Ладоге',
        user_id: 1,
        creator: 'Turist',
      },
      {
        map: 'https://i.pinimg.com/236x/2d/8c/a4/2d8ca40a274118673ce7be5ea0f8eddb.jpg',
        length: '20 км',
        trip_name: 'Путешествие по Байкалу',
        user_id: 1,
        creator: 'Turist',
      },
      {
        map: 'https://i.pinimg.com/236x/9e/90/f9/9e90f90e0d1bad0f72139784f812eb20.jpg',
        length: '13 км',
        trip_name: 'Путешествие по Находке',
        user_id: 2,
        creator: 'Lesnik',
      },
    ];
    const trips = tripsData.map((trip) => ({
      ...trip,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Trips', trips);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Trips');
  },
};
