import { Template } from 'meteor/templating';
import { Rotatoes } from '../api/rotatoes.js';

import './newRotato.html';

Template.newRotato.events({
  'click .submit'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('rotatoes.inc', this._id, this.currentIndex);
  },
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
  'submit .new-member'(event) {
    event.preventDefault();
    console.log("adding a new boi");
    console.log(event);
  }
});
