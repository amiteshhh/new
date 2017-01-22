/**
 * OptionTemplate.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    question: {
      type: 'string'
    },
    optionTemplateEventXRef: {
      model: 'event',
      unique: true
    },
    //linear scale related properties
    helpText: {
      type: 'string'
    },
    lowerRange: {
      type: 'integer'
    },
    upperRange: {
      type: 'integer'
    },
    lowerRangeLabel: {
      type: 'string'
    },
    upperRangeLabel: {
      type: 'string'
    },
    //end of linear range related properties
    options: {
      collection: 'options',
      via: 'optionTemplate',
      dominant: true
    },
    /*optionTemplateCreatedBy: {
      model: 'user'
    },*/
    optionTemplateLikedBy: {
      collection: 'user',
      via: 'optionTemplatesLiked',
      dominant: true
    },
    optionTemplateSharedBy: {
      collection: 'user',
      via: 'optionTemplatesShared',
      dominant: true
    }
  }
};

