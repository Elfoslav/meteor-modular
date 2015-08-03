Meteor.publish('authors', function() {
  return AuthorsCollection.find({}, { limit: 100 });
});

Meteor.publish('author', function(_id) {
  check(_id, String);
  return AuthorsCollection.find({ _id: _id });
});