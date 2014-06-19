Apis = new Meteor.Collection('apis');

Router.configure({
  layout: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.map(function() {

  this.route('smstexts', {
    template: 'smstexts',
    path: '/',
    data: {
      smstexts: function() {
        return SMSTexts.find({}, {
          sort: {
            time: -1
          }
        });
      }
    }
  });

  this.route('out', {
    template: 'out',
    path: '/out/:_id',
    where: 'server',
    action: function() {
      console.log('api route called');
      apiResponse = Apis.findOne(this.params._id);
      console.log('apiResponse: ' + JSON.stringify(apiResponse));
      this.response.writeHead(apiResponse.status, apiResponse.headers);
      this.response.end(JSON.stringify(apiResponse.body));
    }
  });

  this.route('apiCreate', {
    template: 'apiCreate',
    path: '/apiCreate',
    where: 'server',
    action: function() {
      console.log('apiCreate route called');
      this.response.end(Apis.insert(this.request.body));
    }
  });

});
