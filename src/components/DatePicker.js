import React from 'react'

import { Dropdown } from 'semantic-ui-react'
// import console = require('console');

// for date 

let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

// gets todays date
let today=new Date()

// formats and seperates the date into the same format as the arrays above
let d = today.getDate();
let m = months[today.getMonth()]; 
let yyyy = today.getFullYear();

let monthtext = []
for (let i = 0; i<12; i++){
    monthtext.push({
    key: months[i],
    text: months[i],
    value: months[i],
})
}

let daytext = []
for (let i =1; i<33; i++){
    daytext.push({
    key: i,
    text: i,
    value: i,
})
}
let yeartext = []
for (let i = 1995; i<=yyyy;i++){
    yeartext.push({
    key: i,
    text: i,
    value: i,
})
}


const DropdownDatePicker = ({day,setDay, month, setMonth, year, setYear}) => {
    
    const getDay = ( event ) => {
        setDay(event.target.textContent)
    }

    const getMonth = (event ) => {
        setMonth(event.target.textContent)
    }

    const getYear = (event ) => {
        setYear(event.target.textContent)
    }

  return(
    <React.Fragment>
    <p>Select a date:</p>
    <Dropdown
        placeholder={m}
        closeOnBlur
        selection
        options={monthtext}
        onChange={getMonth}
    />{' '}
    <Dropdown
        placeholder={`${d}`}
        closeOnBlur
        selection
        options={daytext}
        onChange={getDay}
    />{' '}
    <Dropdown
        placeholder={`${yyyy}`}
        closeOnBlur
        selection
        options={yeartext}
        onChange={getYear}
    />{' '}
    </React.Fragment>
  )
}

export default DropdownDatePicker