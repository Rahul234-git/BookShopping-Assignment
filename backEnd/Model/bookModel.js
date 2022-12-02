const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("dataModel",DataSchema,"books");