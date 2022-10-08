require('dotenv').config()

module.exports = {
    port: process.env.PORT || 3000,
    dbport : process.env.DBPORT ,
    dbuser : process.env.DBUSER ,
    dbpass : process.env.DBPASS ,
}