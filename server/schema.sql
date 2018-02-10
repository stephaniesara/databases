CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name TEXT(30)
);

CREATE TABLE rooms (
  id INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name TEXT(30)
);

CREATE TABLE messages (
  id INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(200),
  -- createdAt DATETIME(6),
  userId INTEGER(10),
  FOREIGN KEY (userId) REFERENCES users(id),
  roomId INTEGER(10),
  FOREIGN KEY (roomId) REFERENCES rooms(id)
);

INSERT INTO rooms (name) VALUES ('lobby');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
 
 /* to enter db mysql -u student -p*/

