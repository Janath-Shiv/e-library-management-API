const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    book_name:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("firstModel",Schema);