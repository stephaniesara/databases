var db = require('../db');

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
    post: function (message, username, roomname) {
      var queryString = "INSERT INTO messages (text, userId, roomId) VALUES ('" + message + "', SELECT users.id FROM users WHERE users.name = \"' + username + '\", SELECT rooms.id FROM rooms WHERE rooms.name = '" + roomname + "'";
      console.log(queryString);
      db.query(querySting, [], function (err) {
        if (err) { throw err; }
      });
      
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (username) {},
    post: function (username) {
      db.query('INSERT INTO users (name) VALUES ' + username, [], function (err) {
        if (err) { throw err; }
      });
      
    }
  },
  
  rooms: {
    get:
    post:
  }
};

