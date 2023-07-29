// src/components/Vehicles.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Vehicles.css'

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehiclesData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/vehicles/');
        setVehicles(response.data.results);
      } catch (error) {
        console.error('Error fetching vehicles data:', error);
      }
    };

    fetchVehiclesData();
  }, []);
console.log('data', vehicles)
  return (
    <div className='vehicles-container'>
      <h2>Vehicles</h2>
      <ul className='vehicles-list'>
        {vehicles.map((vehicle) => (
          <li key={vehicle.url}>
            <p>Name: {vehicle.name}</p>
            <p>Model: {vehicle.model}</p>
            <p>Top Speed : {vehicle.max_atmosphering_speed}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vehicles;
