const mongoose = require('mongoose')

function connectedToDB(){
    mongoose.connect(process.env.MONGO_URL)

    .then(()=>{
    console.log('connected to dataBase ')
    })
}

module.exports = connectedToDB