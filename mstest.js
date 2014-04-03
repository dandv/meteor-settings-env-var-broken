if (Meteor.isClient) {
  Template.settings.metSettings = function () {
    return Meteor.settings.public;
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log(Meteor.settings);
  });
}
