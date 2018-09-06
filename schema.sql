DROP DATABASE IF EXISTS register;

CREATE DATABASE register;

use register;


  CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(100) NOT NULL,
    password varchar(50) NOT NULL
  );

  INSERT INTO(id, user_name, password) VALUES(1, 'carl123', 'Room49'),
  INSERT INTO(id, user_name, password) VALUES(2, 'sam321', 'Soul15saver'),
  INSERT INTO(id, user_name, password) VALUES(3, 'joe234', 'Trench805'),
  INSERT INTO(id, user_name, password) VALUES(4, 'ron789', 'Crust7y'),
