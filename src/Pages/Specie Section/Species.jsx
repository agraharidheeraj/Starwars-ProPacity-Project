// src/components/Species.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Species.css'

const Species = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    const fetchSpeciesData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/species/');
        setSpecies(response.data.results);
      } catch (error) {
        console.error('Error fetching species data:', error);
      }
    };

    fetchSpeciesData();
  }, []);
     console.log('data', species)
  return (
    <div className='species-container' id='species'>
      <h2>Species</h2>
      <ul className='species-list'>
        {species.map((specie) => (
          <li key={specie.url}>
            <p>Name: {specie.name}</p>
            <p>Homeworld: {specie.homeworld}</p>
            <p>Lifespan: {specie.average_lifespan}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Species;
