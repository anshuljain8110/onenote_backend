const express = require("express");
const bodyParser  = require('body-parser');
const cors = require('cors');

// var cors = require('cors')
//***************connected to db****************//
const connect = require('./db.js')
connect()

const app = express()
app.use(cors());
app.use(bodyParser.json())
// app.use(cors())


app.use("/notebook",require("./routes/notebooks.js"))
app.use("/chapter",require("./routes/chapter.js"))


app.listen(5000,()=>{
    console.log('Listening on port 5000');
})