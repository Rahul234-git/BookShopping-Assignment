const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    bookName:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("cartDataHandler",CartSchema,"shoppingCart");