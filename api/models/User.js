/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    userName: {
      type: 'string'
    },
    email: {
      type: 'string',
      unique: true
    },
    mobile: {
      type: 'string',
      unique: true
    },
    password: {
      type: 'string'
    },
    // Add a reference to User
    participant: {
      model: 'user'
    }
  }
};

