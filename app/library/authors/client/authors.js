Template.authors.events({
  'click [data-action="remove-author"]': function(e, tpl) {
    e.preventDefault();
    console.log('clicked remove: ', this._id);
    Meteor.call('removeAuthor', this._id);
  }
});