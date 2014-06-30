
Template.requestInviteBanner.events = {
  "click .open-modal": function(e, t) {
    e.preventDefault();
    $("#requestInviteModal").modal("show");
  }
};

Template.requestInviteRepeatBanner.events = {
  "click .open-modal": function(e, t) {
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

Template.sampleApi.events = {
  "click .show-sample": function(e, t) {
    e.preventDefault();
    HTTP.call("GET", "http://localhost:3000/ow"+ "/sample",
      function(error, result) {
        if (!error) {
          Session.set("sampleResponse", result);
          //var myCodeMirror = CodeMirror.fromTextArea(e.find('textarea'));
          console.log("result: " + JSON.stringify(result));
        }
      });
      e.stopPropagation();
      return true;
  }
};

Template.sampleApi.rendered = function(){
    // Make the textarea highlight the code (kind of).
    console.log("sampleApi.rendered" );
    //var myCodeMirror = CodeMirror.fromTextArea(this.find('textarea'));
}


Template.sampleApi.helpers({
  sampleResponse: function() {
    console.log("statusCode:" + Session.get("sampleResponse").statusCode);
    return Session.get("sampleResponse");
  },
  headers: function() {
    return JSON.stringify(Session.get("sampleResponse").headers);
  },
  statusCode: function() {
    return Session.get("sampleResponse").statusCode;
  }
});
