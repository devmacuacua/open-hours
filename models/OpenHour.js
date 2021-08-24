
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OpenHourSchema = new Schema({ 
  day: {String},
  startTime: {String},
  endTime: {String}
})

module.exports = mongoose.model("openHour", OpenHourSchema);
