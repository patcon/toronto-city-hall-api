/**
* Councillor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    email: {
      type: 'email',
      required: true
    },

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    ward: {
      model: 'ward'
    },

    phone: {
      type: 'string',
      required: true
    },

    avatarUrl: {
      type: 'string'
    },

    bio: {
      type: 'text'
    }

  }
};