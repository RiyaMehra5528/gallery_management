const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const userRoute=require('./Routes/userRoute');
const init = require('./server');
const cors=require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use("/upload", express.static("upload"))

// app.use(init)
app.use('/',userRoute)

app.listen(7078,console.log("running"))