import { Template } from 'meteor/templating';
import { Rotatoes } from '../api/rotatoes.js';

import './rotato.html';

var formatList = function(list, start, end) {
  end = parseInt(end);
  console.log('formating' + start +" " +end)
  if (start >= end) return "";
  output = "";
  for(var i = start; i < end; i++) {
    console.log(i + ":: " + output);
    if (i == 0) output += list[i];
    else output += ", " + list[i];
  }
  console.log(i + ":: " + output);
  return output;
}

Template.rotato.helpers({
  membersBefore() {
    //console.log(formatList(this.members, 0, this.currentIndex) + (this.currentIndex != 0) ? "" : ", ")
    var temp = formatList(this.members, 0, this.currentIndex);
    if (this.currentIndex > 0) temp += ', ';
    return temp;
  },
  memberActive() {
    return this.members[this.currentIndex];
  },
  membersAfter() {
    //console.log(formatList(this.members, this.currentIndex+1, this.members.length))
    return formatList(this.members, this.currentIndex+1, this.members.length);
  },


})



Template.rotato.events({
  'click .rotate'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('rotatoes.inc', this._id, this.currentIndex);
  },
  'click .delete'() {
    Rotatoes.remove(this._id);
  },
});
