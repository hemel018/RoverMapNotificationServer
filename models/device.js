var mongoose = require('mongoose');

var deviceSchema = mongoose.Schema({
  deviceName : String,
  deviceId : String,
  registrationId : String
});

mongoose.connect('mongodb://localhost:27017/rovermap_android_push_notification');

module.exports = mongoose.model('device', deviceSchema);
