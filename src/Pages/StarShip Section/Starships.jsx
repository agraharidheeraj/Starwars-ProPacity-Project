// src/components/Starships.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Starships.css'
const Starships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarshipsData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setStarships(response.data.results);
      } catch (error) {
        console.error('Error fetching starships data:', error);
      }
    };

    fetchStarshipsData();
  }, []);

  return (
    <div className= 'starships-container'>
      <h2>Starships</h2>
      <ul className='starships-list'>
        {starships.map((starship) => (
          <li key={starship.url}>
            <p>Name: {starship.name}</p>
            <p>Model: {starship.model}</p>
            <p>Hyperdrive Rating : {starship.hyperdrive_rating} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Starships;
