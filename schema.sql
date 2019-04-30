DROP DATABASE IF EXISTS nsuns_db;
CREATE DATABASE nsuns_db;
USE nsuns_db;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE TABLE userInfo (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40),
  password CHAR(76),
  benchTM FLOAT(7,2) DEFAULT 90,
  ohpTM FLOAT(7,2) DEFAULT 90,
  deadliftTM FLOAT(7,2) DEFAULT 90,
  squatTM FLOAT(7,2) DEFAULT 90,
  benchRM FLOAT(7,2) DEFAULT 100,
  ohpRM FLOAT(7,2) DEFAULT 100,
  deadliftRM FLOAT(7,2) DEFAULT 100,
  squatRM FLOAT(7,2) DEFAULT 100,
  PRIMARY KEY (id)

);
CREATE TABLE userSettings(
  id INT NOT NULL AUTO_INCREMENT,
  userId INTEGER (100),
  accessoryPlan VARCHAR(15) DEFAULT 'arms',
  standard VARCHAR(5) DEFAULT 'lbs',
  timerOption INTEGER(5) DEFAULT 30,
  wbOption VARCHAR(10) DEFAULT 'mark',
  variation VARCHAR(10) DEFAULT '5day',
  PRIMARY KEY (id)
);
CREATE TABLE workouts (
id INT NOT NULL AUTO_INCREMENT,
userId INTEGER(100),
weekNum VARCHAR(10),
weeklyBench FLOAT(7,2),
weeklyDeadlift FLOAT(7,2),
weeklyOhp FLOAT(7,2),
weeklySquat FLOAT(7,2),
benchAmrap INTEGER(10),
deadliftAmrap INTEGER(10),
ohpAmrap INTEGER(10),
squatAmrap INTEGER(10),
sets INTEGER(20),
PRIMARY KEY (id)

);

CREATE TABLE accessories (
id INT NOT NULL AUTO_INCREMENT,
userId INTEGER(100),
title VARCHAR(50),
sets INTEGER(5),
reps INTEGER(5),
weight FLOAT(7,2),
dayIndex INTEGER(10),
PRIMARY KEY (id)

);

ALTER TABLE accessories AUTO_INCREMENT=1000;