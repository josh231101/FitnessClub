const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080

app.get("/", (req,res)=>{
  res.setEncoding("Hello from express");
})
app.listen(PORT, () =>{
  console.log(`Listenning on ${PORT}`);
})
