'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const tripsData = [
      {
        map: 'https://i.pinimg.com/564x/f1/c4/5e/f1c45e2381a200f6d3791a87abedfb82.jpg',
        trip_length: '50 км',
        trip_name: 'Путешествие на ослике в Приэльбрусье',
        user_id: 1,
        creator: 'Turist',
        description: 'Итак, я решил отправиться в горы на осле, потому что это выглядело как уникальный и приключенческий способ познакомиться с красотами природы. Но сразу предупрежу - это не самый удобный способ передвижения. Ослики - это замечательные животные, но у них свои причуды и особенности.',
      },
      {
        map: 'https://i.pinimg.com/564x/87/b2/6e/87b26e6a023186bdd745ecb29bdc4e9e.jpg',
        trip_length: '2000 км',
        trip_name: 'Турне на оленях в направлении Северного полюса',
        user_id: 1,
        creator: 'Оленевод',
        description: 'Собственно, как-то раз я решил отправиться на северный полюс на оленях, чтобы насладиться красотами арктической природы и найти себе новый стильный шапочный убор. Ведь кто, как не я, должен знать о последних трендах в области головных уборов',
      },
      {
        map: 'https://i.pinimg.com/564x/e6/00/49/e60049ca1e33c8830a6735a7780b00aa.jpg',
        trip_length: '30 км',
        trip_name: 'Отчаянное путешествие  на велосипеде вокруг действующего вулкана!',
        user_id: 2,
        creator: 'Вулканолог',
        description: 'Давайте представим, что мы отправились в этот необычный велопоход. В первый день все идет гладко, мы весело педалируем и любуемся живописными пейзажами. Но как только мы начинаем крутить вокруг этого дымящегося гиганта, все меняется. Воздух становится гуще, туман окутывает нас, а из-за вулкана доносится громкий рев. Я думаю, наша единственная надежда - это взять этот вулкан нашими велосипедами на рогах и быстро убежать от него! Как только мы преодолеваем половину пути, начинается небывалое приключение. Вулкан внезапно извергает свой гнев на нас, и мы оказываемся в лавовой реке. Я не знаю, как это возможно на велосипеде, но мы плаваем в лаве, как в океане. Я вижу, что мои спутники поездки не растеряли чувство юмора и даже делают фотографии с вулканическим фоном. К счастью, наши велосипеды, кажется, не пострадали.',
      },
      {
        map: 'https://i.pinimg.com/564x/95/20/d1/9520d1f6eaf42fa9542d1871b59f9f24.jpg',
        trip_length: '42 км',
        trip_name: 'Путешествие на велосипеде по крокодиловой ферме!',
        user_id: 1,
        creator: 'Turist',
        description: 'Когда мы приехали на ферму, нас встретил огромный крокодил, которого мы сразу же окрестили Жориком. Он стоял там и смотрел на нас своими огромными глазами, будто бы собирался нас пожрать. Мы были немного напуганы, но наш гид уверил нас, что Жорик дружелюбный и просто любит внимание.',
      },
      {
        map: 'https://i.pinimg.com/564x/0e/0a/be/0e0abe523107225fd8222f8e9193a628.jpg',
        trip_length: '35 км',
        trip_name: 'Побег от цунами!',
        user_id: 1,
        creator: 'Сёрфер',
        description: 'Я решил, что мне нужно побыстрее ускориться, чтобы избежать столкновения с водной стеной. Я начал педалировать, как будто моя жизнь от этого зависит (что, на самом деле, и было правдой). Мои ноги двигались так быстро, что я думал, что они сами отвалятся в любой момент',
      },
      {
        map: 'https://i.pinimg.com/564x/f2/c5/d5/f2c5d53ea9c6d46ec123a57abe2b97ca.jpg',
        trip_length: '55 км',
        trip_name: 'Невероятное путешествие на лыжах за стену к белым ходокам!',
        user_id: 2,
        creator: 'Ходр',
        description: 'Наконец, мы проникнем за Стену и начнем наше путешествие к лагерю белых ходоков. Наши лыжи сделают путь быстрым и безопасным, и мы будем восхищаться красотой северного пейзажа, усыпанного снегом.',
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
