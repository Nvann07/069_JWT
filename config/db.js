const db = require('../models');

async function connectDB() {
  try {
    await db.sequelize.authenticate();
    console.log('Database connected successfully...');

    await db.sequelize.sync({ force: false });
    console.log('Database synchronized ');

  } catch (err) {
    console.error('Error connection failed: ', err.message);
    process.exit(1);
  }
}

module.exports = connectDatabase;