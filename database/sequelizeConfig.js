module.exports = {
  development: {
    dialect: 'mysql',
    host: process.env.HOST || '54.219.140.66',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3306,
    username: process.env.DB_USERNAME || 'master',
    password: process.env.PASSWORD || 'qaWSedRFp;OLikUJ1',
    database: process.env.DATABASE || 'dbdimitra_rlt_auth',
  },
};
