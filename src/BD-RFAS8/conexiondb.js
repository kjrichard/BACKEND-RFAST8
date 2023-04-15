const { Sequelize } = require("sequelize");

sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'mssql',
    host: process.env.DB_SERVER,
    dialectOptions: {
        requestTimeout: 90000000,
        options: {
        "encrypt": false,
        enableArithAbort: true,
        requestTimeout: 90000000,
        idleTimeoutMillis: 90000000
        },
            pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 90000000
        }   
    },
});
module.exports = sequelize;