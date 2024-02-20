const express = require("express");
const mongoose =require("mongoose");
const Model=require("./modules/model");
const { name } = require("ejs");


const app=express();
app.use(express.static('public'));
app.use(express.json());

app.get("/", async(req,res)=>{
    let nameSpeaker=req.query.speaker;
    if(nameSpeaker==null){
        nameSpeaker="Джон Маккейн";
    }
    console.log(typeof nameSpeaker);
    let data;
    try {
        const model= await Model.find({name:nameSpeaker});
        data = model;
        console.log(data);
    } catch (error) {
        //console.error(error);
        data=null;
        error="Error,PLease try again";
    }
    res.render("main.ejs",{data});
});

app.post("/speaker", async(req,res)=>{
    try {
        const model=await Model.create(req.body);
        res.status(200).json(model);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

mongoose.connect("mongodb+srv://beka24k:040205@web.0rf2pml.mongodb.net/CRUD-API?retryWrites=true&w=majority")
.then(()=>{
    app.listen(3000,()=>{
        console.log("working on port 3000")
    })
    console.log("connected to db");
})
.catch((error)=>{
    console.error(error)
});
