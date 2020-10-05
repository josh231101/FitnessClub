const Event = require('../models/Event');
const User = require('../models/User');

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

  async delete(req,res){
    const { eventId } = req.params;
    try {
      await Event.findByIdAndDelete(eventId)
      //204->  The server succesfully processed the request
      return res.status(204).json({message : "succesfully Deleted"})
    } catch (e) {
      return res.status(400).json({message : "We dont have any event with the ID"})
    }
  },

}
