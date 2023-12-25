// models/Car.js

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    año: Number,
    // Otros campos según tus necesidades
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car; 
