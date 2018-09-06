DROP DATABASE IF EXISTS register;

CREATE DATABASE register;

use register;


  CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(100) NOT NULL,
    password varchar(50) NOT NULL
  );

  INSERT INTO users(user_name, password) VALUES('carl123', 'Room49');
  INSERT INTO users(user_name, password) VALUES('sam321', 'Soul15saver');
  INSERT INTO users(user_name, password) VALUES('joe234', 'Trench805');
  INSERT INTO users(user_name, password) VALUES('ron789', 'Crust7y');
