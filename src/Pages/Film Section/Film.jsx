// src/components/Films.js
import React, { useState, useEffect } from 'react';
import './Film.css'
import grid from '../../assest/View grid.png';
import Film from '../../assest/FilmReel.jpg';
import list from '../../assest/View list.png';
import menu from '../../assest/Menu Button.png';
import Loading from '../../Pages/Loading';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] =useState(false);
  const [toggleViewMode, setToggleViewMode] = useState(true);

  useEffect(() => {
    async function fetchFilms(){
      let res= await fetch('https://swapi.dev/api/films/');
      let data= await res.json();
      setFilms(data.results);
      setLoading(true);
    }
    fetchFilms();
  }, []);

  console.log('data', films);

  

  return (
    <div className='films-container'>
      <div className='flex-item'>
      <h2>Films</h2>
      <div className="btn-container ">
      <button class="btn active" onClick={() => setToggleViewMode(!toggleViewMode)}>
      <img src={list} alt="" className='active' /> 
        {toggleViewMode ? 'grid' : 'list'}
        
        </button>
      </div>
      
       
      </div>
      <div className='film-section' >
      <ul className='films-list' >
        {loading? films.map((film) => (
          <li key={film.episode_id}>
            <img src={`https://picsum.photos/200?random=${film.episode_id}`} alt={film.title} className='film-img' />

            <div className='film-reel'>
              
            <img src={Film} alt="" />
            <p>{film.title}</p>
             
            <img className='menu' src={menu} alt="" />

            </div>
          </li>
          
        )):<Loading/>}
      </ul>
      </div>




      

      
    </div>
  );
};

export default Films;




