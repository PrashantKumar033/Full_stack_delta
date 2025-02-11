// first install express
// then install EJS
// EJS is inside teh express so thats why no need to require EJS 
const express=require("express");
// we can also use it like
// import express from "express";
const app=express();
const port=1080;
const path=require("path");  // By these two line we able to run the code from any directory
app.set("views",path.join(__dirname,"/views"));//So that it will not show path not found error


app.listen(port,()=>{     // its explaining the server is on working stage
    console.log(`Listening port ${port}`); // continiously listining the request at define port
});
// here "/" it represent the root directory
app.get("/",(req,res)=>{
    res.render("home.ejs");
})

// Now we are passing the data to the EJS file as supposing the data from the database
app.get("/fruits",(req,res)=>{
    const Dice=Math.floor(Math.random()*6)+1;
    let fruits=["apple","mango","pineapple","grapes"];
    // we the two approach of sending the data one key value pair and second is the directly
    res.render("database.ejs",{Dice,fal:fruits});
})

app.get("/insta/:username",(req,res)=>{
    let {username}=req.params;       // if we not use of the bracess then if return object not value
    // let followers=["Shayam","Raghu","Ranjiv","Raghuvir","Rohan"];
    const instagram =require("./data.json");
    const data=instagram[username];
    // we use app.use to listen every type of request like get post delete etc
    app.use(express.static("public"));
    app.use(express.static(path.join(__dirname,"public/javascript")));
    // res.render("instagram.ejs",{username,followers});
    // res.render use to send the a json file 
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.send("<h2>This is the fault page,plese check the input.</h2>");
    }
});


