
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OpenHour = new Schema({ 
  day: String,
  startTime: Date,
  endTime: Date,
  userId: ObjectId,
})

module.exports = OpenHour;