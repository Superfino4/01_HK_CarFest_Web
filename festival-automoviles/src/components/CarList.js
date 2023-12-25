// src/components/CarList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Listado de Autos</h2>
            <ul>
                {cars.map(car => (
                    <li key={car._id}>{car.marca} - {car.modelo} ({car.año})</li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
