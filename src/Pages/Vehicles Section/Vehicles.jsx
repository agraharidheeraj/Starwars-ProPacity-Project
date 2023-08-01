// src/components/Vehicles.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Vehicles.css'
import Loading from '../Loading';
import grid from '../../assest/View grid.png';
import list from '../../assest/View list.png';
import ListVehicles from './ListVehicles';
import icon from '../../assest/Icons/CarProfile.png';
import menu from '../../assest/Menu Button.png';

import download from '../../assest/Dropdown/download.png';
import rename from '../../assest/Dropdown/rename.png';
import share from '../../assest/Dropdown/share.png';
import folder from '../../assest/Dropdown/folder.png';
import mark from '../../assest/Dropdown/lock.png';
import mark1 from '../../assest/Dropdown/delete.png';
import view from '../../assest/Dropdown/view.png';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleViewMode, setToggleViewMode] = useState(true);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const fetchVehiclesData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/vehicles/');
        setVehicles(response.data.results);
      } catch (error) {
        console.error('Error fetching vehicles data:', error);
      }
    };
    setLoading(true);
    fetchVehiclesData();
  }, []);

  const fetchVehiclesImage = () => {
    const randomWidth = Math.floor(Math.random() * 300) + 200;
    const randomHeight = Math.floor(Math.random() * 300) + 200;
    return `https://picsum.photos/${randomWidth}/${randomHeight}`;
  };


  console.log('data', vehicles)
  return (
    <div className='vehicles-container'>
      <div className='flex-item'>
        <h2>Vehicles</h2>
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

      {
        toggleViewMode && <ul className='people-list '>

          {loading ? <ListVehicles vehicle={vehicles} /> : <Loading />}

        </ul>
      }
      {
        !toggleViewMode &&
        < >
          <ul className="vehicles-list">
            {loading ? vehicles.map((vehicle) => (
              <>
                <li key={vehicle.url}>
                  <img src={fetchVehiclesImage()} alt={vehicle.name} className='vehicles-img' />
                  <div className='film-reel'>
                    <img className='vehicle-icon' src={icon} alt="" />
                    <p> {vehicle.name}</p>
                    <img src={menu} alt="" onClick={() => { setModal(!modal) }} />
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


export default Vehicles;




