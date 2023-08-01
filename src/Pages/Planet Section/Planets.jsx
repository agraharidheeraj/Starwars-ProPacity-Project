// src/components/Planets.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Planet.css';
import Loading from '../../Pages/Loading';
import grid from '../../assest/View grid.png';
import list from '../../assest/View list.png';
import ListPlanet from './ListPlanet';
import icon from '../../assest/Icons/Planet.png'
import menu from '../../assest/Menu Button.png'

import download from '../../assest/Dropdown/download.png';
import rename from '../../assest/Dropdown/rename.png';
import share from '../../assest/Dropdown/share.png';
import folder from '../../assest/Dropdown/folder.png';
import mark from '../../assest/Dropdown/lock.png';
import mark1 from '../../assest/Dropdown/delete.png';
import view from '../../assest/Dropdown/view.png';


const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleViewMode, setToggleViewMode] = useState(true);
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const fetchPlanetsData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        setPlanets(response.data.results);
      } catch (error) {
        console.error('Error fetching planets data:', error);
      }
      setLoading(true);
    };

    fetchPlanetsData();
  }, []);
  const fetchPlanetImage = (planet) => {
    const seed = planet.name.toLowerCase().replace(/ /g, '');
    return `https://picsum.photos/seed/${seed}/200/300`;
  };

  return (
    <div className='planet-container'>
     <div className='flex-item'>
        <h2>Planet</h2>
        {toggleViewMode && <div className="btn-container ">
          <button class="btn active" onClick={() => setToggleViewMode(!toggleViewMode)}>
          <img src={list} alt="" className='active' />
            List
            <img src={grid} alt="" className='active' />
          </button>
        </div>}
        {!toggleViewMode && <div className="btn-container ">
          <button class="btn active" onClick={() => setToggleViewMode(!toggleViewMode)}>
          
            <img src={grid} alt="" className='active' />
            Grid
            <img src={list} alt="" className='active' />
          </button>
        </div>}
      </div>


      {toggleViewMode && <ul className='people-list '>

        {loading ? <ListPlanet planet={planets} /> : <Loading />}

        </ul>
      }
      {! toggleViewMode &&
        < >
        <ul className="people-list">
        {loading ? planets.map((planet) => (
          <>
      <li key={planet.url}>
         <img src={fetchPlanetImage(planet)} alt={planet.name} className='planet-img' />
         <div className='film-reel'>
        <img  src={icon} alt="" />
        <p>{planet.name}</p>
        <img src={menu} alt=""  onClick={() => { setModal(!modal) }} />
        </div>
      </li>
      </>


          )): <Loading/>}
          </ul>
        </>
      }
      {modal && <div className="dropdown-menu  new-model">
        <ul className='new-list'>
          <DropdownItem img={view} text={"View"} />
          <DropdownItem img={download} text={"Download"} />
          <DropdownItem img={rename} text={"Rename"} />
          <DropdownItem img={share} text={"Share Link"} />
          <DropdownItem img={folder} text={"Move"} />
          <DropdownItem img={mark} text={"Mark Private"} />
          <DropdownItem img={mark1} text={"Delete"} />
        </ul>
      </div>}
      
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}
export default Planets;





  


