var db = require('../db');


var escapeQuotesSQL = function(messages) {
  return messages.replace(/\'/g, "''");
};

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', [], function(err, result) {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    }, // a function which produces all the messages
    post: function (message, username, roomname, callback) {
      console.log('IN POST MESSAGES MODEL');
      var userId = 1;
      var roomId = 1;
      var queryString = "INSERT INTO messages (text, userId, roomId) VALUES ('" + escapeQuotesSQL(message) + "', " + userId + ", " + roomId + ")";//SELECT users.id FROM users WHERE users.name = '" + username + "', SELECT rooms.id FROM rooms WHERE rooms.name = '" + roomname + "'";
      console.log(queryString);
      db.query(queryString, [], function (err) {
        if (err) { throw err; }
        callback();
      });
       
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (username) {},
    post: function (username, callback) {
      console.log('IN POST USERS MODEL');
      var queryString = 'INSERT INTO users (name) VALUES (' + "'" + username + "')";
      console.log(queryString);
      db.query(queryString, [], function (err) {
        if (err) { throw err; }
        callback();
      });
      
    }
  },
  
/*  rooms: {
    get:
    post:
  }
*/
};

