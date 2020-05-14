DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  burger VARCHAR(30),
  primary key(id)
);

INSERT INTO BURGERS (burger)
value ("Big smoke");
