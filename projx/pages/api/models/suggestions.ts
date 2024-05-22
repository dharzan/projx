// models/Suggestion.js
import mongoose from 'mongoose';

const suggestionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Suggestion = mongoose.models.Suggestion || mongoose.model('Suggestion', suggestionSchema);

export const config = {
    api: {
      externalResolver: true,
    },
  }

export default Suggestion;
