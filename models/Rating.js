const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  for: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'onModel'
  },
  onModel: {
    type: String,
    enum: ['Post', 'Topic', 'Article', 'List'] // TODO: add more items
  },
  value: Number
});

const Rating = mongoose.model('Rating', ratingSchema);