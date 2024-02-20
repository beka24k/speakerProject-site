const mongoose =require("mongoose");

const schema=mongoose.Schema({
    name: {
    type: String,
    required:[true,"Enter the name"]
    },
    video:{
        type: String,
        required: [true,"enter url"]
    },
    description: {
        type:String,
        required: [true,"enter text"]
    },
    technique:{
        type:String,
        required: [true,"enter text"]
    },
    img:{
        type:String,
        required: [true,"enter text"]
    }
})

const model=mongoose.model("model",schema);
module.exports=model;