const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  title : String,
  description : String,
  price : Number,
  thumbnail : String,
  date : Date,
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
  }
})


module.exports = mongoose.model('Event', EventSchema)//Params : modelname, userschema
