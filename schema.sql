DROP DATABASE IF EXISTS nsuns_db;
CREATE DATABASE nsuns_db;
USE nsuns_db;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE TABLE userInfo (
  id INT NOT NULL AUTO_INCREMENT,
  userId VARCHAR(40),
  password VARCHAR(40),
  benchRM INTEGER(10),
  ohpRM INTEGER(10),
  deadliftRM INTEGER(10),
  squatRM INTEGER(10),
  accessoryPlan INTEGER(10),
  PRIMARY KEY (id)

);

CREATE TABLE workouts (
id INT NOT NULL AUTO_INCREMENT,
userId VARCHAR(40),
weekNum VARCHAR(10),
weeklyBench INTEGER(10),
weeklyDeadlift INTEGER(10),
weeklyOhp INTEGER(10),
weeklySquat INTEGER(10),
benchAmrap INTEGER(10),
deadliftAmrap INTEGER(10),
ohpAmrap INTEGER(10),
squatAmrap INTEGER(10),

sets INTEGER(20),
PRIMARY KEY (id)

);