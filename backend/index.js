require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors")
const app=express();
const PORT=process.env.PORT || 3002;
const uri= process.env.MONGO_URL;
const {HoldingModel}=require("./model/HoldingModel");
const {PositionModel}=require("./model/PositionModel");

app.use(cors());
app.use(bodyParser.json())

app.get("/allHoldings",async(req,res)=>{
    let allHoldings=await HoldingModel.find({});
     res.json(allHoldings)
})

app.get("/allPositions",async(req,res)=>{
    let allPositions=await PositionModel.find({});
     res.json(allPositions)
})
app.listen(PORT,()=>{
    console.log("App started!");
    mongoose.connect(uri);
    console.log("DB connected")
})