// src/components/People.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './People.css';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeopleData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setPeople(response.data.results);
      } catch (error) {
        console.error('Error fetching people data:', error);
      }
    };
    
    fetchPeopleData();
  }, []);

  const fetchPersonImage = (person) => {
    const seed = person.name.toLowerCase().replace(/ /g, '');
    return `https://picsum.photos/seed/${seed}/200/300`;
  };

   console.log('data', people)
  return (
    <div className='people-container'>
      <h2>People</h2>
      <ul className='people-list '>
        {people.map((person) => (
          <li key={person.url}>
             <img src={fetchPersonImage(person)} alt={person.name} className='people-img' />
             <div className='people-content'>
            <p>Name: {person.name}</p>
            <p>Birthdate: {person.birth_year}</p>
            <p>Species: {person.species.length > 0 ? person.species[0] : 'Unknown'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;
