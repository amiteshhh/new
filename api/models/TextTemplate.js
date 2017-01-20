/**
 * TextTemplate.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    question: {
      type: 'string'
    },
    event: {
      model: 'event'
    },
    isConfigQuestion: {
      type: 'boolean'
    },
    respondedBy: {
      model: 'user'
    },
    textTemplateLikedBy: {
      collection: 'user',
      via: 'textTemplatesLiked',
      dominant: true
    },
    textTemplateSharedBy: {
      collection: 'user',
      via: 'textTemplatesShared',
      dominant: true
    }
  }
};

