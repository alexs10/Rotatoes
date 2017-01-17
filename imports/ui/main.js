import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Rotatoes } from '../api/rotatoes.js';

import './main.html';

Template.main.onCreated(function bodyOnCreated() {
  Meteor.subscribe('rotatoes');
});

Template.main.helpers({
  rotatoes() {
    return Rotatoes.find({}, { sort: { createdAt: -1 } });
  },
});

Template.main.events({
  'submit .new-rotato'(event) {
    // Prevent default browser form submit
    console.log("here1");
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    Meteor.call('rotatoes.insert', text, ["Sam", "Carly", "Freddie"]);


    // Clear form
    target.text.value = '';

    return false;
  },
});
