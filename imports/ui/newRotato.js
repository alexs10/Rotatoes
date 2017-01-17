import { Template } from 'meteor/templating';
import { Rotatoes } from '../api/rotatoes.js';

import './newRotato.html';
import './userChip.html';

var userList = [];

Template.newRotato.onCreated(function bodyOnCreated() {
  Meteor.subscribe('userData');
  console.log("hella");
  console.log(Meteor.users.find({}).fetch());
});

Template.newRotato.events({
  'click .submit'() {
    console.log("pressed me");
    //var msg = $(Template.find(".inputAutocomplete"))
    //console.log(msg);
    // Set the checked property to the opposite of its current value
    //Meteor.call('rotatoes.inc', this._id, this.currentIndex);
  },
  'submit .new-rotato'(event) {
    // Prevent default browser form submit
    console.log(event);
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const name = target.text.value;
    const users = target.elements.msg.value;
    console.log(name);
    console.log(users);

    for (var i = 0; i<userList.length; i++) {
      if (!users.includes(("@" + userList[i].name))) {
        console.log("users was removed from list");
      }
    }

    Meteor.call('rotatoes.insert', name, _.pluck(userList, 'name'), _.pluck(userList, '_id'));
    FlowRouter.go("/");

    return false;
  },
  'submit .new-member'(event) {
    event.preventDefault();
    console.log("adding a new boi");
    console.log(event);
  },
  'autocompleteselect input'(event, template, doc) {
    var userListElement = {'_id':doc._id, 'name':doc.profile.name};
    if (!_.contains(_.pluck(userList, '_id'), doc._id)) {
      console.log("adding user");
      userList.push(userListElement);
    }
  }
});

Template.newRotato.helpers({
  settings: function() {
    return {
      position: "bottom",
      limit: 5,
      rules: [
        {
          token: '@',
          collection: Meteor.users,
          field: "profile.name",
          template: Template.userChip
        }
      ]
    };
  }
});
