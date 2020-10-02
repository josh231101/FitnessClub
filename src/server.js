require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');//Allows us to make requests from different devices
const UserController = require('./controllers/UserController');
const app = express();

const PORT = process.env.PORT || 8080;

//If we start the server from production
//if(process.env.NODE_ENV != 'production'){ require('dotenv').config()}

app.use(cors());
//Returns a middleware that passes  JSON as a response
app.use(express.json());

try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {useNewUrlParser : true, useUnifiedTopology : true});
  mongoose.set("useCreateIndex",true);
} catch (e) {
  console.log(e);
} finally {
  console.log("CONNECTION!");
}

app.get("/", (req,res)=>{
  res.send("Hola Mundo")
})

app.post('/register', UserController.store)
//app.post('/register', RegisterController.store())


app.listen(PORT, () =>{
  console.log(`Listenning on ${PORT}`);
})
