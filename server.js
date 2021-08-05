const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("This is backend");
})

app.post('/enroll',(req,res)=>{
console.log(req.body);
res.status(401).send({"message": "Data received"});
})

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})
