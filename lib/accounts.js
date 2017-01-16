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
