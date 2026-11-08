const mongoose = require('mongoose')

 const noteSchema = new mongoose.Schema({
    title : {
        type : String ,
        unique : [true , 'title already exist'],
        required : true
    } ,
    description : String 

})

 const noteModel = mongoose.model('collection' , noteSchema)
 
 module.exports = noteModel