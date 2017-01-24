/**
 * TextTemplate.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//options.noReverse = true;
module.exports = {
  options:{
    noReverse:true
  },

  attributes: {
    question: {
      type: 'string'
    },
    textTemplateEventXRef: {
      model: 'event'
    },
    isConfigQuestion: {
      type: 'boolean',
      defaultsTo:true
    },
    textTemplateCreatedBy: {
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

