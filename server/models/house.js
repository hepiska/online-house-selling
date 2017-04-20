var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let houseSchema = new Schema({
   "owner":{
     type:String,
     required: [true,'owner must provided']
   },
   "price":{
     type:String,
     required: [true,'price must provided']
   },
   "phone":{
     type:String,
     required: [true,'phone must provided']
   },
   "image":String,
   "description":String,
   "address":String,
   "location":{
     "lat":Number,
     "lng":Number
    }
});
var House = mongoose.model('House', houseSchema);
module.exports = House;
