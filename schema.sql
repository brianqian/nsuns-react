DROP DATABASE IF EXISTS nsuns_db;
CREATE DATABASE nsuns_db;
USE nsuns_db;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE TABLE userInfo (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40),
  password CHAR(76),
  benchTM INTEGER(10) DEFAULT 90,
  ohpTM INTEGER(10) DEFAULT 90,
  deadliftTM INTEGER(10) DEFAULT 90,
  squatTM INTEGER(10) DEFAULT 90,
  benchRM INTEGER(10) DEFAULT 100,
  ohpRM INTEGER(10) DEFAULT 100,
  deadliftRM INTEGER(10) DEFAULT 100,
  squatRM INTEGER(10) DEFAULT 100,
  accessoryPlan VARCHAR(15) DEFAULT 'arms',
  PRIMARY KEY (id)

);

CREATE TABLE workouts (
id INT NOT NULL AUTO_INCREMENT,
userId INTEGER(10),
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

CREATE TABLE accessories (
id INT NOT NULL AUTO_INCREMENT,
userId INTEGER(10),
title VARCHAR(50),
sets INTEGER(10),
reps INTEGER(10),
weight INTEGER(10),
dayIndex INTEGER(10),
PRIMARY KEY (id)

);

ALTER TABLE accessories AUTO_INCREMENT=1000;