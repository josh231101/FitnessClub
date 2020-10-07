const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({
  date : String,
  approved : Boolean,
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
