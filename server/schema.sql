CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER(10) PRIMARY KEY,
  name TEXT(30)
);

CREATE TABLE rooms (
  id INTEGER(10) PRIMARY KEY,
  name TEXT(30)
);

CREATE TABLE messages (
  id INTEGER(10) PRIMARY KEY,
  text VARCHAR(200),
  createdAt DATETIME(6),
  userId INTEGER(10),
  CONSTRAINT FK_userID FOREIGN KEY (userId) REFERENCES users(id),
  roomId INTEGER(10),
  CONSTRAINT FK_roomID FOREIGN KEY (roomId) REFERENCES rooms(id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
 
 /* to enter db mysql -u student -p*/

