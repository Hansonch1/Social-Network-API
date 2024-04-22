const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true
  },
  // Add other thought properties as needed
  reactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reaction'
  }]
}, { timestamps: true });

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
