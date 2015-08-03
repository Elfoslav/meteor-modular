Meteor.methods({
  removeAuthor: function(authorId) {
    check(authorId, String);
    console.log('removing author: ', authorId);
    AuthorsCollection.remove(authorId);
  }
});