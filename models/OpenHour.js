
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OpenHourSchema = new Schema({ 
  day: {
    type: String,
    required: true
  },
  startTime: {
    type:  Date,
    required: true,
    default: Date.now
   },
  endTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
})

module.exports = mongoose.model("openHour", OpenHourSchema);
