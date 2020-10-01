const User = require('../models/User.js');

module.exports = {
  async store(req, res){
    try {
      const {firstName, lastName, password,email} = req.body;
      //Shortcut to save fast to MongoDb a new collection
      const user = await User.create({
        firstName : firstName,
        lastName : lastName,
        password : password,
        email : email,
      });
      return res.json(user)

    } catch (e) {
      throw Error(`Error while registering new user : ${e}`)
    }
  }
}
