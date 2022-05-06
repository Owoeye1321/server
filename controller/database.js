const mysqlConnection = require('mysql')
const con = mysqlConnection.createConnection({
    host: 'localhost',
      user: 'root',
         password: '',
    database: 'quotes',
  })


  module.exports = con