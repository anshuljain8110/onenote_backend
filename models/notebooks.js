const mongoose = require('mongoose');
const {Schema} = mongoose
const NoteBook = new Schema({
    name:{type:String},

})
module.exports=mongoose.model('Notebook',NoteBook);