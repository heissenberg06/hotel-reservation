import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faPerson, faPlane, faCar, faTaxi, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <div className='header'>
      <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem first">
        <FontAwesomeIcon icon={faBed} className='headerIcon' />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} className='headerIcon' />
        <span>Flight</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} className='headerIcon' />
        <span>Car Rental</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} className='headerIcon' />
        <span>Attractions</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} className='headerIcon' />
        <span>Taxi</span>
        </div>
        </div>
        <h1 className='headerTitle'>Come our world to enjoy the life.</h1>
        <p className="headerDescription">Get some discount for your flight</p>
        <button className="headerButton">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className='headerIcon' />
          <input 
            type="text" 
            placeholder='where were you ??' 
            className='headerSearchInput'/>
          </div>
          <div>
          <FontAwesomeIcon icon={faCalendar} className='headerIcon' />
          <span className='headerSearchText'>date to date</span>
          <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
          />
          </div>
          <div>
          <FontAwesomeIcon icon={faPerson} className='headerIcon' />
          <span className='headerSearchText'>2 adults 2 children 1 room</span>
          </div>
          <div className='headerSearchItem'>
            <button className="headerButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header