const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({
  data : String,
  approved : Boolean,
  sport : String,
  user : {
    type : mongoose.Schema.Type.ObjectId,
    ref : "User"
  },
  event : {
    type : mongoose.Schema.Type.ObjectId,
    ref : "Event"
  }
})

module.exports = mongoose.model("Registration", RegistrationSchema);
