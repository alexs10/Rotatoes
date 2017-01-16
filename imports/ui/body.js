import { Template } from 'meteor/templating';
import { Rotatoes } from '../api/rotatoes.js';

//import './rotato.html';
import './rotato.js';
import './body.html';


Template.body.helpers({
  rotatoes() {
    return Rotatoes.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-rotato'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    Rotatoes.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});
