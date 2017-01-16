import { Template } from 'meteor/templating';
import { Rotatoes } from '../api/rotatoes.js';

import './rotato.html';

Template.rotato.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Rotatoes.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    console.log('what');
    Rotatoes.remove(this._id);
  },
});
