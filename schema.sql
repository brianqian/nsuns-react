DROP DATABASE IF EXISTS nsuns_db;
CREATE DATABASE nsuns_db;
USE nsuns_db;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';


CREATE TABLE workouts (
id INT NOT NULL AUTO_INCREMENT,
exercise VARCHAR(40),
pounds INTEGER(20),
reps INTEGER(20),
sets INTEGER(20),
PRIMARY KEY (id)

);