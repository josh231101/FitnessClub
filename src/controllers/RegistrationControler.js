const Registration = require('../models/Registration');

module.exports = {
  async create(req,res){
    const {user_id} = req.header;
    const {eventId} = req.params;
    const {date} = req.body;

    await registration = await Registration.create({
      user : userId,
      event : eventId,
      date
    })
    return res.status(200).json(registration)

  }
}
