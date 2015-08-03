AuthorsCollection = new Mongo.Collection('authors');
AuthorsCollection.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  info: {
    type: String,
    label: 'Info',
    autoform: {
      rows: 5
    }
  }
}));
