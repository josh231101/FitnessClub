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
    const { title, description, price, sport } = req.body;
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
      sport,
      price : parseFloat(price),
      user : user_id,
      //thumbnail is just ex-> josue-124124124.jpg (The name of the pic in the server)
      thumbnail : filename,
    })

    return res.json(event);
  },
  async getEventById(req,res){
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

  },
  async getAllEvents(req,res){
    const { sport } = req.params;
    //If the query is undefined pass an empty object
    try{

      if(sport){
        const events = await Event.find({sport : sport})
        return res.json(events)
      }
      //Passing {} we are saying to get all documents
      const events = await Event.find({});
      if(events){
        return res.json(events)
      }
    }catch(e){
      return res.status(400).json({message : "We don't have any events yet!"})
    }

  },
  async delete(req,res){
    const { eventId } = req.params;
    try {
      await Event.findByIdAndDelete(eventId)
      //204->  The server succesfully processed the request
      return res.status(204).json({message : "succesfully Deleted"})
    } catch (e) {
      return res.status(400).json({message : "We dont have any event with the ID"})
    }
  }
}
