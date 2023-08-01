// src/components/People.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../Pages/Loading';
import grid from '../../assest/View grid.png'
import list from '../../assest/View list.png';
import './People.css';
import ListPeople from './ListPeople';
import user from '../../assest/Icons/Users (1).png'
import menu from '../../assest/Menu Button.png'


import download from '../../assest/Dropdown/download.png';
import rename from '../../assest/Dropdown/rename.png';
import share from '../../assest/Dropdown/share.png';
import folder from '../../assest/Dropdown/folder.png';
import mark from '../../assest/Dropdown/lock.png';
import mark1 from '../../assest/Dropdown/delete.png';
import view from '../../assest/Dropdown/view.png';



const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleViewMode, setToggleViewMode] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchPeopleData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setPeople(response.data.results);
      } catch (error) {
        console.error('Error fetching people data:', error);
      }
      setLoading(true);
    };

    fetchPeopleData();
  }, []);
  console.log('data', people)

  const fetchPersonImage = (person) => {
    const seed = person.name.toLowerCase().replace(/ /g, '');
    return `https://picsum.photos/seed/${seed}/200/300`;
  };

  console.log('data', people)
  return (
    <div className='people-container'>
      <div className='flex-item'>
        <h2>People</h2>
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

        {loading ? <ListPeople people={people} /> : <Loading />}





      </ul>
      }
      {!toggleViewMode &&
        < >
          <ul className="people-list">
            {people.map((person) => (
              <>
                <li>
                  <img src={fetchPersonImage(person)} alt={person.name} className='people-img' />
                  <div className='film-reel'>
                    <img src={user} alt="" />
                    <p>{person.name}</p>
                    <img className='menu' src={menu} onClick={() => { setModal(!modal) }}/>
                  </div>
                </li>
              </>

            ))}
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


export default People;
