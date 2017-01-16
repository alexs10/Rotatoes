import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './loginButton.html';


Template.loginButton.helpers({
  isLogggedOn() {
    console.log(Meteor.userId());
    return Meteor.userId();
  },
});
