// src/components/Films.js
import React, { useState, useEffect } from 'react';
import './Film.css'
import axios from 'axios';
import grid from '../../assest/View grid.png';
import list from '../../assest/View list.png';
import Loading from '../../Pages/Loading';
import GridComponents from '../../Component/GridComponents';
import Film from '../../assest/FilmReel.jpg';
import menu from '../../assest/Menu Button.png'


import download from '../../assest/Dropdown/download.png';
import rename from '../../assest/Dropdown/rename.png';
import share from '../../assest/Dropdown/share.png';
import folder from '../../assest/Dropdown/folder.png';
import mark from '../../assest/Dropdown/lock.png';
import mark1 from '../../assest/Dropdown/delete.png';
import view from '../../assest/Dropdown/view.png';


// import Grid from '../../Component/Grid';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleViewMode, setToggleViewMode] = useState(true);
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const filmData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        setFilms(response.data.results);
      } catch (error) {
        console.error('Error fetching people data:', error);
      }
      setLoading(true);
    };

    filmData();
  }, []);
  console.log('data', films);



  return (
    <div className='films-container'>
      <div className='flex-item'>
        <h2>Films</h2>
        {toggleViewMode && <div className="btn-container ">
          <button class="btn active" onClick={() => setToggleViewMode(!toggleViewMode)}>
          <img src={grid} alt="" className='active' />
            Grid
            <img src={list} alt="" className='active' />
             

          </button>
        </div>}
        {!toggleViewMode && <div className="btn-container ">
          <button class="btn active" onClick={() => setToggleViewMode(!toggleViewMode)}>
          <img src={list} alt="" className='active' />
            List
            <img src={grid} alt="" className='active' />
          </button>
        </div>}
      </div>

      <div className='film-section' >
        {toggleViewMode &&
          <ul className='films-list' >
            {loading ? films.map((film) => (
              <>
                <GridComponents film={film} />
              </>
            )) : <Loading />}
          </ul>
        }

        {/* //listview */}

        {!toggleViewMode &&
          <table className='table-container'>
            <thead>
              <tr className='table-list'>
                <th>Name</th>
                <th>Director</th>
                <th>Release Date</th>
              </tr>
            </thead>
            {
              loading ? films.map((film) => (
                <>
                  <tbody>
                    <tr className='tr-table'>

                      <td> < img src={Film} alt="" className='table-img' />{film.title}</td>
                      <td>{film.director}</td>
                      <td>{film.release_date}</td>
                      <img src={menu}   alt="" onClick={() => { setModal(!modal) }}/>
                    </tr>
                  </tbody>

                </>
              )) : <Loading />
            }
          </table>
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


export default Films;




