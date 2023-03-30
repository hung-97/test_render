const mongoose = require('mongoose')
const express = require('express')

app = express();


mongoose.connect('mongodb://127.0.0.1:27017/Activity')
const activitySchema = new mongoose.Schema({
    activity: {type: String, required: true}
})


const ActivityModel = mongoose.model('Activity', activitySchema)

const port = process.env.PORT || 3000;

app.get('/', (req,res)=> {
 const task1 = new ActivityModel({
    activity: 'activity 1'
 })

 ActivityModel.insertMany([task1]);

 res.send('<h2>Document Added</h2>')
})

app.listen(port, () => {
    console.log(port)
})