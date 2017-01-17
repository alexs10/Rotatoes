import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './loginButton.html';


Template.loginButton.helpers({
  isLogggedOn() {
    return Meteor.userId();
  },
});
