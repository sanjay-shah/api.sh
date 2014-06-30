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

  this.route('apiShow', {
    template: 'apiShow',
    path: '/ow/:_id',
    where: 'server',
    action: function() {
      if (this.params._id == 'sample') {
        //sampleCustomer = {};
        //sampleCustomer.email = Faker.Internet.email();
        apiResponse = Apis.findOne('sample');
        //apiResponse.body.email = Faker.Internet.email();
        apiResponse.body = Faker.Helpers.userCard();
        apiResponse.body.INFO = 'REFRESH THE PAGE TO SEE DYNAMIC API RESPONSE';
        //apiResponse = sampleCustomer;
      } else {
        apiResponse = Apis.findOne(this.params._id);
      }
      
      console.log('apiResponse: ' + JSON.stringify(apiResponse));
      this.response.writeHead(apiResponse.status, apiResponse.headers);
      this.response.end(JSON.stringify(apiResponse.body));
      console.log('api served with the id: ' + apiResponse._id);
    }
  });

  this.route('apiCreate', {
    template: 'apiCreate',
    path: '/apiCreate',
    where: 'server',
    action: function() {
      var _id = Apis.insert(this.request.body);
      this.response.end(_id);
      console.log('api created with the id: ' + _id);
      
    }
  });

});
