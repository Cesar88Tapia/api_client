const mysql = require('mysql2');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


const getUsers = function() {
  return new Promise((resolve, reject) =>{
    connection.query('SELECT * FROM users', (err, data) => {
      if(err){
        return reject(err);
      }
      return resolve(data);
    })
  })
};


const postUsers = function(user_name, password) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users(user_name, password) VALUES(?, ?)'),
      [userName, password], (err, data) => {
        if(err) {
          return reject(err);
        }
        return resolve(data);
      }
  })
};

module.exports = {
  getUsers,
  postUsers
};
