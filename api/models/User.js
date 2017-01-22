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
    company: {
      type: 'string'
    },
    mobile: {
      type: 'string',
      unique: true
    },
    deviceId: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    isOnline: {
      type: 'boolean'
    },
    // Foreign Key/Associations
    eventsHosted: {
      collection: 'event',
      via: 'eventHostedBy'
    },
    eventsParticipated: {
      collection: 'event',
      via: 'eventParticipants'
    },
    eventsLiked: {
      collection: 'event',
      via: 'eventLikedBy'
    },
    eventsShared: {
      collection: 'event',
      via: 'eventSharedBy'
    },
    textTemplatesLiked: {
      collection: 'textTemplate',
      via: 'textTemplateLikedBy'
    },
    textTemplatesShared: {
      collection: 'textTemplate',
      via: 'textTemplateSharedBy'
    },
    textTemplatesCreated: {
      collection: 'textTemplate',
      via: 'textTemplateCreatedBy'
    },
    optionTemplatesLiked: {
      collection: 'optionTemplate',
      via: 'optionTemplateLikedBy'
    },
    optionTemplatesShared: {
      collection: 'optionTemplate',
      via: 'optionTemplateSharedBy'
    },
    optionsResponded: {
      collection: 'options',
      via: 'optionRespondedBy'
    }
  }
};

