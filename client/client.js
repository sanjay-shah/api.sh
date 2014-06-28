Template.requestInviteBanner.events = {
    "click .open-modal" : function(e,t) {
    e.preventDefault();
    $("#requestInviteModal").modal("show");
    }
};

Template.requestInviteRepeatBanner.events = {
    "click .open-modal" : function(e,t) {
    e.preventDefault();
    $("#requestInviteModal").modal("show");
    }
};

Template.requestInviteModal.events({
  'submit form': function(event) { // also tried just 'submit', both work for me!
    console.log('Submitting form!');
    event.preventDefault();
    $('#requestInviteModal').modal('hide')
    invitee = {};
    invitee.email = email.value;
    invitee.phone = phone.value;   
    console.log('form value: ' + invitee);
    Meteor.call('addInvitees', invitee, function(error, id) {
          if (error) {
            return console.log("Error..........");
          } else {
            //Do smth
          }
        });
      event.stopPropagation();
    return true;
  }
});

Template.addApi.events({
  'submit form': function(event) { // also tried just 'submit', both work for me!
    console.log('Submitting: addApi form!');
    event.preventDefault();
    api = {};
    api.status = status.value;
    api.headers = headers.value;
    api.body = body.value;   
    console.log('form value: ' + api);
    Meteor.call('addApi', invitee, function(error, id) {
          if (error) {
            return console.log("Error..........");
          } else {
            //Do smth
          }
        });
      event.stopPropagation();
    return true;
  }
});






