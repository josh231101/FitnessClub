const Event = require('../models/Event');
const User = require('../models/User');
// title : String,
// description : String,
// price : Number,
// thumbnail : String,
// date : Date,
// user : {
//   type : mongoose.Schema.Types.ObjectId,
//   ref : "User",
// }

module.exports = {
  async createEvent (req,res){
    const { title, description, price } = req.body;
    const { user_id } = req.headers;
    const { filename } = req.file;

    const user = await User.findById(user_id);

    if(!user){
      return res.status(400).json({
        message : "User does not exists!"
      })
    }
    //Let's create the new event!
    const event = await Event.create({
      title,
      description,
      price : parseFloat(price),
      user : user_id,
      //thumbnail is just ex-> josue-124124124.jpg (The name of the pic in the server)
      thumbnail : filename,
    })

    return res.json(event);
  },
  async getElementById(req,res){
    const { eventId } = req.params;

    try{
      //Find the event by its ID in mongo
      const event = await Event.findById(eventId);
      if(event){
        return res.json(event)
      }
    }catch(e){
      return res.status(400).json({message : "EventId doesn't exist!"})
    }
    
  }
}
