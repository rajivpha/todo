require('dotenv').config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  APP_PORT: process.env.PORT || 5001,
  API_PREFIX: '/api',
  DATABASE: {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.DB_PORT,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.PASSWORD,
    DB_NAME: process.env.DATABASE,
  },
};
