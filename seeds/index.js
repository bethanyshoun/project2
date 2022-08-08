const seedRandomWord = require('./random-word-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedRandomWord();

  process.exit(0);
};

seedAll();