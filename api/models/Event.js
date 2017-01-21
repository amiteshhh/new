/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    startDate: {
      type: 'datetime'
    },
    endDate: {
      type: 'datetime'
    },
    waitingPollTime: {
      type: 'integer'
    },
    minimumParticipantForPoll: {
      type: 'integer'
    },
    templateType: {
      type: 'string',
      enum: ['text', 'yesNo', 'singleSelect', 'multiSelect', 'range'],
      defaultsTo: 'text'
    },
    eventStatus: {
      type: 'string',
      enum: ['created', 'open', 'closed'],
      defaultsTo: 'created'
    },
    // Foreign Key/Associations
    eventHostedBy: {
      model: 'user'
    },
    textTemplates: {
      collection: 'textTemplate',
      via: 'textTemplateEventXRef'
    },
    eventParticipants: {
      collection: 'user',
      via: 'eventsParticipated',
      dominant: true
    },
    eventLikedBy: {
      collection: 'user',
      via: 'eventsLiked',
      dominant: true
    },
    eventSharedBy: {
      collection: 'user',
      via: 'eventsShared',
      dominant: true
    }
  }
};

