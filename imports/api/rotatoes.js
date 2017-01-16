import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { check } from 'meteor/check';

export const Rotatoes = new Mongo.Collection('rotatoes');

Meteor.methods({
  'rotatoes.insert'(name, members) {
    check(name, String);

    // Make sure the user is logged in before inserting a rotato
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Rotatoes.insert({
      groupName: name,
      members: members,
      currentIndex: 0,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'rotatoes.inc'(rotatoId, currentIndex) {
    check(rotatoId, String);
    var rotato = Rotatoes.find(rotatoId).fetch()[0];
    console.log(rotato);
    Rotatoes.update(rotatoId, {
      $set: { currentIndex: (rotato.currentIndex + 1) % rotato.members.length },
    });
  },
  'rotatoes.setChecked'(rotatoId, setChecked) {
    check(rotatoId, String);
    check(setChecked, Boolean);

    Rotatoes.update(rotatoId, { $set: { checked: setChecked } });
  },
});
