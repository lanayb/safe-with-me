const sequelize = require('../config/connection');
const { User, Confession} = require('../models');

const userData = require('./users.json');
const confessData = require('./confessions.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
     await User.bulkCreate(userData);
     await Confession.bulkCreate(confessData);

    process.exit(0);
  };
  
  seedDatabase();
  