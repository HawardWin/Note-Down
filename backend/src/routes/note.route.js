const express = require('express')
const noteModel = require('../models/notes.model')

const noteRouter =  express.Router()


noteRouter.post('/create' , async (req,res)=>{
     const {title ,description} = req.body

     const isNoteAlreadyExist = noteMoel.findOne({title})
     if(isNoteAlreadyExist){
        res.status(200).json({
         message : ' note already exist'
        })
     }
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

  const deletedNote = await noteModel.findByIdAndDelete(id)
  if(!deletedNote){
   return res.status(404).json({
      message : 'Note Not Found'
   })
  }

  res.status(203).json({
     message : 'note successfully deleted' ,
     deletedNote
  })
})

noteRouter.patch('/update/:id' , async (req,res)=>{
     const id = req.params.id 
     const des = req.body.description

  const updatedNote = await  noteModel.findByIdAndUpdate(id ,{
       description : des
     })

     res.status(200).json({
      message : 'note updated successfully'
     })
})


module.exports = noteRouter 