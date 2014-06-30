//Apis = new Meteor.Collection('apis');
Invitees = new Meteor.Collection('invitees');
Faker = Meteor.require('Faker');
//CodeMirror = Meteor.require('codemirror');


Meteor.methods({
  addInvitees: function (invitee) {
    console.log("addInvitees called: " + JSON.stringify(invitee));
    check(invitee.email, String);
    //check(invitee.phone, [Number]);
    // .. do stuff ..
    Invitees.insert(invitee);
    return "Thank You!";
  },

  addApi: function (api) {
    // .. do other stuff ..
    var _id = Apis.insert(api);
    
    console.log('api created with the id: ' + _id);
    
    return _id;
  }
});