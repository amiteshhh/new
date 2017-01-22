/**
 * Room
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  // Subscribers only get to hear about update and destroy events,
  // and about onlineUsers joining or leaving the room.
  // This lets us keep our count of onlineUsers in the room accurate, without
  // sending chat message for a room to anyone but people who actually
  // want to get them.  To get chat messages for a room, you subscribe
  // to the 'message' context explicitly.
  autosubscribe: ['destroy', 'update', 'add:onlineUsers', 'remove:onlineUsers'],
  attributes: {

    name: 'string',
    onlineUsers: {
      collection: 'onlineUser',
      via: 'rooms'
    }
  },


  // Add an "afterPublishRemove" to continue processing after
  // a onlineUser is removed from a room.  Doing it this way ensures
  // this code will be run whether the "publishRemove" call was
  // triggered by a onlineUser being destroyed, or by them just
  // leaving a room.
  afterPublishRemove: function (id, alias, idRemoved, req) {

    // Get the room and all its onlineUsers
    Room.findOne(id).populate('onlineUsers').exec(function (err, room) {
      // If this was the last onlineUser, close the room.  
      if (room.onlineUsers.length === 0) {
        room.destroy(function (err) {
          // Alert all sockets subscribed to the room that it's been destroyed.
          Room.publishDestroy(room.id);
        });
      }
    });

  }

};
