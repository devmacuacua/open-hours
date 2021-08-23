
const express = require('express')
const app = express()
const port = process.env.PORT || 8000;

require('dotenv').config()
const connectedDB = require('./config/db')
const OpenHour = require('./models/OpenHour');

connectedDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/open-hours', async(req,res)=>{
    console.log(req.body.day);
    try {
        const newOpneHour = new OpenHour({
            day: req.body.day,
            startTime: req.body.startTime,
            endTime: req.body.endTime
        });       
        const resut =  await newOpneHour.save();        
        res.json(resut)
    } catch(err){
        res.status(500).send('An Error Ocurred');
    }; 
})

app.get('/open-hours', async(req,res)=>{
    try {
        const openHours = await OpenHour.find();
        res.json(openHours)
    } catch(err){
        res.status(500).send('An Error Ocurred');
    }; 
})

app.get('/open-hours/:userId', async(req,res)=>{
    try {
        const openHours = await OpenHour.findOne({userId:req.params.userId});
        res.json(openHours)
    } catch(err){
        res.status(500).send('An Error Ocurred');
    }; 
})


app.listen(port, () => {
  console.log(`Hello, app listening at http://localhost:${port}`)
})
