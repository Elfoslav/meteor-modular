Router.route('/authors', {
  waitOn: function() {
    return Meteor.subscribe('authors');
  },
  data: function() {
    var authors = AuthorsCollection.find({}, { sort: { name: 1 }})
    return { 
      authors: authors
    }
  }
});

Router.route('/authors/:_id', {
  name: 'authorDetail',
  waitOn: function() {
    return Meteor.subscribe('author', this.params._id);
  },
  data: function() {
    var author = AuthorsCollection.findOne(this.params._id);
    if (this.ready() && !author) {
      this.redirect('notFound');
    }
    return {
      author: author
    }
  }
});