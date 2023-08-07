const knex = require('knex');
const config = require('config');
const {
  getLogger
} = require('../core/logging');
const development = require('../../config/development');

const DATABASE_CLIENT = config('database.client');
const DATABASE_HOST = config('database.host');
const DATABASE_USERNAME = config('database.username');
const DATABASE_PASSWORD = config('database.password');
const DATABASE_DATABASE = config('database.database');
const NODE_ENV = config('env');
const isDevelopment = MODE_ENV === 'development';

let knexInstance;

//connectie met db.migreren, seeding 
const initializeDatabase = async () => {
  const knexOptions = {
    client: DATABASE_CLIENT,
    debug: isDevelopment,
    connection: {
      host: DATABASE_HOST,
      port: 3306,
      user: DATABASE_USERNAME,
      password: DATABASE_PASSWORD,
      database: DATABASE_DATABASE
    }

  }
  knexInstance = knex(knexOptions);
  //controleren of db up en running is 

  try {
    await knexInstance('SELECT 1+1 AS result');
  } catch (error) {
    getLogger().error('Error init db', {
      error
    });
    throw new Error('init db failed');
  }
}

const getKnex = () => {
  if (!knexInstance)
    throw new Error('connection not yet initialized');
  return knexInstance;
}

const tables = Object.freeze({
  transaction: ('')
})

//hoofdstuk4 39:00