const express = require('express')
const noteModel = require('../models/notes.model')

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

noteRouter.get('/fetch' , async (req,res)=>{
       
    const data = await noteModel.find();

    res.status(200).json({
     message : 'data fetched successfully' ,
     data
    })
})

noteRouter.delete('/delete/:id' , async (req,res)=>{
   const id = req.params.id
   console.log(id)
  const deletedNote = await noteModel.findByIdAndDelete({id})

  res.status(203).json({
     message : 'note successfully deleted' ,
     deletedNote
  })
})

noteRouter.patch('/edit' , async (req,res)=>{
     // const id/
})


module.exports = noteRouter 