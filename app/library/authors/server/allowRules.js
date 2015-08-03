AuthorsCollection.allow({
  insert: function() {
    //Everyone can insert
    return true;
  },
  update: function() {
    //Everyone can update
    return true;
  }
});