import React, { useState, useEffect } from 'react'

import { Dropdown } from 'semantic-ui-react'
// import console = require('console');


  // for date 
    
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
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
  for (let i = 2000; i<2020;i++){
    yeartext.push({
      key: i,
      text: i,
      value: i,
    })
  }

  // gets todays date
  let today=new Date()

  // formats and seperates the date into the same format as the arrays above
  let d = today.getDate();
  let m = months[today.getMonth()]; 
  let yyyy = today.getFullYear();

// {day,setDay,month,setMonth,year,setYear}
const DropdownDatePicker = ({day,setDay, month, setMonth, year, setYear}) => {
    
    const getDay = ( event, {value}) => {
        setDay(event.target.textContent)
    }

    const getMonth = (event, {value}) => {
        setMonth(event.target.textContent)
    }

    const getYear = (event, {value}) => {
        setYear(event.target.textContent)
    }

  return(
    <React.Fragment>
    <Dropdown
        placeholder={d}
        closeOnBlur
        selection
        options={daytext}
        onChange={getDay}
    />{' '}
    <Dropdown
        placeholder={yyyy}
        closeOnBlur
        selection
        options={yeartext}
        onChange={getYear}
    />{' '}
    <Dropdown
        placeholder={m}
        closeOnBlur
        selection
        options={monthtext}
        onChange={getMonth}
    />{' '}
    </React.Fragment>
  )
}

export default DropdownDatePicker