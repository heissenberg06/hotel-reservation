import React, { Children } from 'react'
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faPerson, faPlane, faCar, faTaxi, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"

const Header = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([ //it is an array
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

   const handleOption = (name, operation) =>{
    setOptions(prev=>{return {
      ...prev, [name]: operation ==="increase" ? options[name]+1 : options[name] -1,
    }})
   }



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
          </div>  {/** header search item end */}

          <div>
          <FontAwesomeIcon icon={faCalendar} className='headerIcon' />
          <span onClick={() => setOpenDate(!openDate) } className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} 
          to ${format(date[0].endDate, "dd/MM/yyyy")}`}
          </span>
          {openDate && 
          <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
          />}
          </div>
          
          <div>
          <FontAwesomeIcon icon={faPerson} className='headerIcon' />
          <span
          onClick={()=> setOpenOptions(!openOptions)}
           className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
           
           {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">
                  Adult
                </span>
                <div className="optionCounter">
                <button
                disabled = {options.adult <= 1}//if adult smaller than or equal one, button would disable
                className="optionCounterButton" onClick={() => handleOption("adult", "decrease")}>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionCounterButton" onClick={() => handleOption("adult", "increase")}>+</button>
              </div>
              </div>
              <div className="optionItem">
                <span className="optionText">
                  Children
                </span>
                <div className="optionCounter">
                <button
                 disabled={options.children <= 0}//if adult smaller than or equal one, button would disable
                 className="optionCounterButton" onClick={() => handleOption("children", "decrease")}>-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button className="optionCounterButton" onClick={() => handleOption("children", "increase")}>+</button>
              </div>
              </div>
              <div className="optionItem">
                <span className="optionText">
                  Room
                </span>
                <div className="optionCounter">
                <button
                 disabled={options.room <= 1}//if adult smaller than or equal one, button would disable
                 className="optionCounterButton" onClick={() => handleOption("room", "decrease")}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button className="optionCounterButton" onClick={() => handleOption("room", "increase")}>+</button>
              </div>
              </div>    
            </div>
           )}
           
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