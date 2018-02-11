var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('IN GET MESSAGES CONTROLLER');
      models.messages.get((results) => {
        console.log(JSON.stringify(results));
        res.status(200).send(JSON.stringify(results));
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('IN POST MESSAGES CONTROLLER');
      var message = req.body;
      console.log('MESSAGE IS', message);
      console.log('message text is', message.text);
      models.messages.post(message.text, message.username, message.roomname, () => {
        res.status(201).send('Message POST success');
      });

    } // a function which handles posting a message to the database
    
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('IN POST USERS CONTROLLER');
      var user = req.body;
      models.users.post(user.username, (message) => {
        console.log(message);
        res.status(201).send(message);
      });
    }
  },
  
  rooms: {
    post: function (req, res) {
      console.log('IN POST ROOM CONTROLLER');
      var room = req.body;
      models.rooms.post(room.roomname, (message) => {
        console.log(message);
        res.status(201).send(message);
      });
    }
  }
};

