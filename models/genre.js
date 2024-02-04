const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, min: 3, max: 100 },

})

GenreSchema.virtual('url', function() {
  return `/catalog/genre/${this.id}`;
})

module.exports = mongoose.model('Genre', GenreSchema);