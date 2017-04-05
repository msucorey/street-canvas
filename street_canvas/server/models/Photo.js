import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  photo_url: { type: 'String', require: true },
  // user_id: { type: 'Integer', default: 1, required: true },
  description: { type: 'String' },
  lat: { type: 'Number', required: true },
  lng: { type: 'Number', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },

});

export default mongoose.model('Photo', PhotoSchema);
