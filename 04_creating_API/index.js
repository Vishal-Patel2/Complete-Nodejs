// const express= require("express");

import express from "express";
const app=express();

//using get()
app.get("/",(req,res)=>{
    res.send("This is my server")
})

//using post
app.post("/adddata",(req,res)=>{
  res.send("This is a post request")
})

//using delete()
app.delete("/delete",(req,res)=>{
 res.send("This is my delete request")
})

//using put()
app.put("/put",(req,res)=>{
    res.send("This is my put request")
   })

// using patch()
app.patch("/patch",(req,res)=>{
    res.send("This is my patch request")
})

app.listen(8000, ()=>{
    console.log("Server is started");
    
})



