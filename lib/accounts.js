AccountsTemplates.configure({
    defaultLayoutType: 'blaze', // Optional, the default is 'blaze'
    defaultTemplate: 'atForm',
    defaultLayout: 'layout',
    defaultLayoutRegions: {
        nav: 'nav',
    },
    defaultContentRegion: 'main'
});

AccountsTemplates.addField({
  _id: 'name',
  type: 'text',
  displayName: 'Name',
  required: true,
})

if (Meteor.isServer) {
  // This code only runs on the server
  console.log('accoutn setup');
  Meteor.publish('userData', function userDataPublication() {
    return Meteor.users.find({},
      { fields: {'_id':1, 'profile.name': 1} }
    );
  });
}
