const Registration = require('../models/Registration');

module.exports = {
  async create(req,res){
    const {user_id} = req.headers;
    const {eventId} = req.params;
    const {date} = req.body;

    const registration = await Registration.create({
      user : user_id,
      event : eventId,
      date
    })

    //We want to get back not only the IDs but all the info inside the
    //user and event doc so we proceed...
    await registration
    .populate("event")
    .populate("user", "-password")
    .execPopulate();

    return res.status(200).json(registration)

  }
}
