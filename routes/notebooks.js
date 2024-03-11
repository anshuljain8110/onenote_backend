const express = require("express")
const router = express.Router()
const NoteBook = require('../models/notebooks');
const notebooks = require("../models/notebooks");
const chapter = require('../models/chapter')

router.post('/create', async (req, res) => {
    try {
      let notebook_name = req.body.name;
      const newnotebook = new NoteBook({ "name": notebook_name });
      await newnotebook.save();
      res.json({ message: 'Notebook created successfully', name: notebook_name });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

router.get('/',async(req,res)=>{
    try {
        let temp = await NoteBook.find({})
        res.status(200).send(temp)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/delete',async(req,res)=>{
  try {
    let notebook_id = req.headers.notebook_id
    let response = await notebooks.findByIdAndDelete(notebook_id)
    let response1 = await chapter.deleteMany({notebookid:notebook_id})
    res.json({response})
  } catch (error) {
    console.log(error)
  }
})

module.exports = router