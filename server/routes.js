const db = require('../database/index.js');
const url = require('url');
const path = require('path');



exports.getUser = (req, res) => {

  db.getUser()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {console.log(err)})
}

exports.postUsers = (req, res) => {
  let userName = req.body.userName;
  let password = req.body.password;
  db.postUser(userName, password)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {console.log(err)})
}
