// routes/cars.js

const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Obtener todos los autos
router.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Agregar un nuevo auto
router.post('/cars', async (req, res) => {
    const { marca, modelo, año } = req.body;

    try {
        const newCar = new Car({ marca, modelo, año });
        await newCar.save();
        res.json(newCar);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
