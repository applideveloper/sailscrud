/**
 * MyData
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
//        name : 'string',
//        mail : 'string',
//        age : 'integer'

        name : {
                type : 'string',
                required : true
        },
        mail : {
                type : 'string',
                email : true,
                required : true
        },
        age : {
                type : 'integer',
                min : 0,
                max : 150,
                required : true
        }
    
  }

};
