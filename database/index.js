const mysql = require('mysql2');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


const getUser = function() {
  return new Promise((resolve, reject) =>{
    connection.query('SELECT * FROM user', (err, data) => {
      if(err){
        return reject(err);
      }
      return resolve(data);
    })
  })
};


const postUser = function(user_name, password) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO user(user_name, password) VALUES(?, ?)'),
      [userName, password], (err, data) => {
        if(err) {
          return reject(err);
        }
        return resolve(data);
      }
  })
};

module.exports = {
  getUser,
  postUser
};
