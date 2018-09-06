const db = require('../database/index.js');
const url = require('url');
const path = require('path');



export.getUser = (req, res) => {

  db.getUsers()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {console.log(err)})
}

export.postUser = (req, res) => {
  let userName = req.body.userName;
  let password = req.body.password;
  db.postUsers(userName, password)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {console.log(err)})
}
