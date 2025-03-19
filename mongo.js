const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1/std';

mongoose.connect(uri)
.then(result => console.log('Database Connected'))
.catch(error => console.log('Error Occurred'))

const stdSchema = new mongoose.Schema({
    stdName:String,
    stdAge:Number
})

const stdModel = mongoose.model('std', stdSchema)

stdModel.insertOne({stdName: "Aman", stdAge: 19})
.then(result => console.log('Inserrted'))
.catch(error => console.log('Error while inserting'))