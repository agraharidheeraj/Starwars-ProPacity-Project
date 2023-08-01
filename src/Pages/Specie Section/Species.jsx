import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Species.css'
import Loading from '../Loading';
import grid from '../../assest/View grid.png';
import list from '../../assest/View list.png';
import ListSpecie from './ListSpecie';
import icon from '../../assest/Icons/Alien.png';
import menu from '../../assest/Menu Button.png'

import download from '../../assest/Dropdown/download.png';
import rename from '../../assest/Dropdown/rename.png';
import share from '../../assest/Dropdown/share.png';
import folder from '../../assest/Dropdown/folder.png';
import mark from '../../assest/Dropdown/lock.png';
import mark1 from '../../assest/Dropdown/delete.png';
import view from '../../assest/Dropdown/view.png';
const Species = () => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleViewMode, setToggleViewMode] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchSpeciesData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/species/');
        setSpecies(response.data.results);
      } catch (error) {
        console.error('Error fetching people data:', error);
      }
      setLoading(true);
    };

    fetchSpeciesData();
  }, []);

  const fetchSpecieImage = () => {
    const randomWidth = Math.floor(Math.random() * 300) + 200;
    const randomHeight = Math.floor(Math.random() * 300) + 200;
    return `https://picsum.photos/${randomWidth}/${randomHeight}`;
  };
  




  return (
    <div className='species-container' id='species'>
      <div className='flex-item'>
        <h2>Species</h2>
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

      {toggleViewMode && <ul className='species-list '>

        {loading ? <ListSpecie specie={species} /> : <Loading />}

      </ul>
      }
      {!toggleViewMode &&
        < >
          <ul className="species-list">
            {loading ? species.map((specie) => (
              <>

                <li key={specie.url}>
                  <img src={fetchSpecieImage()} alt={specie.name} className='speciest-img' />
                  <div className='film-reel'>
                    <img src={icon} alt="" />
                    <p>{specie.name}</p>

                    <img src={menu} alt=""  onClick={() => { setModal(!modal) }}/>
                  </div>
                </li>

              </>


            )) : <Loading />}
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


export default Species;







