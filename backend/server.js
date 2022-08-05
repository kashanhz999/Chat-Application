const express = require('express')
require('dotenv').config()
const {chats} = require('./data/data')
const app = express()


app.get('/',(req,res)=>{

  res.send("running")

})

app.get("/api/chats",(req,res)=>{
  res.send(chats)
})

app.get("/api/chat/:id",(req,res)=>{

  const Single = chats.find((c) => {return c._id === req.params.id})
  res.send(Single)

})

app.listen(3000,console.log("Listening on port 3000 "))
