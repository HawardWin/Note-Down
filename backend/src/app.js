const express = require('express')
const noteRouter = require('./routes/note.route')
const noteModel = require('./models/notes.model')

const app = express()

app.use(express.json())
// app.use( '/note' , noteRouter)



module.exports = app 
