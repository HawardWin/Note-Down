const express = require('express')
const noteModel = require('../models/notes.model')
const { model } = require('mongoose')
const noteRouter =  express.Router()


noteRouter.post('/create' , async (req,res)=>{
     const {title ,description} = req.body

   const note = await noteModel.create({
        title,
        description
    })

     res.status(201).json({
        message : 'note successfully created' ,
        note
     })

})


model.exports = noteRouter 