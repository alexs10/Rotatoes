FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { nav: 'nav', main: 'main' });
  }
});

FlowRouter.route('/sign-out', {
  action: function() {
    AccountsTemplates.logout();
    Router.go("/");
    //BlazeLayout.render('layout', { nav: 'nav', main: 'main' });
  }
});

AccountsTemplates.configureRoute('signIn');
