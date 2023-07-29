// src/components/Planets.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Planet.css';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanetsData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        setPlanets(response.data.results);
      } catch (error) {
        console.error('Error fetching planets data:', error);
      }
    };

    fetchPlanetsData();
  }, []);

  return (
    <div className='planet-container'>
      <h2>Planets</h2>
      <ul className='planet-list'>
        {planets.map((planet) => (
          <li key={planet.url}>
            <p>Name: {planet.name}</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;
