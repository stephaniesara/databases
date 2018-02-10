var db = require('../db');


var escapeQuotesSQL = function(messages) {
  return messages.replace(/\'/g, "''");
};

module.exports = {
  messages: {
    
    get: function (callback) {
      var queryString = "SELECT messages.text, rooms.name as roomname, users.name as username FROM messages INNER JOIN rooms ON messages.roomID = rooms.id INNER JOIN users ON messages.userId = users.id";
      db.query(queryString, [], function(err, result) {
        if (err) {
          throw err;
        } else {
          callback(result);
        }
      });
    }, // a function which produces all the messages
    post: function (message, username, roomname, callback) {
      console.log('IN POST MESSAGES MODEL');
      var userId = "(SELECT id FROM users WHERE name = '" + username + "')";
      var roomId = "(SELECT id FROM rooms WHERE name = '" + roomname + "')";
      var queryString = "INSERT INTO messages (text, userId, roomId) VALUES ('" + escapeQuotesSQL(message) + "', " + userId + ", " + roomId + ");";
      console.log('QUERYSTRING', queryString);
      db.query(queryString, [], function (err) {
        if (err) { throw err; }
        callback();
      });
       
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    // get: function (username) {},
    post: function (username, callback) {
      console.log('IN POST USERS MODEL');
      var queryString = 'SELECT * FROM users WHERE name = ' + "'" + username + "'";
      
      db.query(queryString, [], function(err, result) {
        if (err) {
          throw err;
        } else if (result.length === 0) {
          queryString = 'INSERT INTO users (name) VALUES (' + "'" + username + "')";
          db.query(queryString, [], function (err) {
            if (err) { throw err; }
            callback('USER POSTED!');
          });        
        } else {
          callback('USER ALREADY IN DATABASE');
        }
      });
      
    }
  },
  
  rooms: {
    post: function (roomname, callback) {
      console.log('IN POST ROOPMS MODEL');
      var queryString = 'SELECT * FROM rooms WHERE name = ' + "'" + roomname + "'";
      
      db.query(queryString, [], function(err, result) {
        if (err) {
          throw err;
        } else if (result.length === 0) {
          queryString = 'INSERT INTO rooms (name) VALUES (' + "'" + roomname + "')";
          db.query(queryString, [], function (err) {
            if (err) { throw err; }
            callback();
          });
                  
        }
      });
      
    }
  }

};

