const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

//Middleware to import the routes and inject.
const routes = express.Router();
const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventController');


//We pass specific config to multer saying ok I want to upload the files this way
const upload = multer(uploadConfig);

routes.get("/", (req,res)=>{
  res.send("Hola Mundo")
})
//Event
routes.get("/event/:eventId", EventController.getElementById)
/*It will grab the file from the frontentd
Will create a folder called files and save the image
It will pass the thumbnail property to the event controller
Second param says ok, look for a key called thumbnail part of the req.body
At the end req will have something called req.file
That is an object with things like
fieldname: 'thumbnail',
originalname: 'josue.jpg',
encoding: '7bit',
mimetype: 'image/jpeg',
destination: 'C:\\Users\\Miguel\\Desktop\\MERN\\FitnessClub\\files',
filename: 'josue-1601602132302.jpg',
path: 'C:\\Users\\Miguel\\Desktop\\MERN\\FitnessClub\\files\\josue-1601602132302.jpg',
size: 42673
Finally pass to the controller s */
routes.post("/event", upload.single("thumbnail"), EventController.createEvent)


//USER
routes.post('/register', UserController.createUser)
//app.post('/register', RegisterController.store)
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes
