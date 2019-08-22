import React from 'react'

import { Dropdown } from 'semantic-ui-react'

// takes the months array of month variables, the current day, the current month, the current year and all the setter functions
const DropdownDatePicker = ({months, d, m, yyyy, setDay, setMonth, setYear}) => {
    
    // makes arrays of objects to be dropdown selectors
    // creating monthtext array of objects uses the months array from apps so each option in the dropdown is the month name
    let monthtext = []
    for (let i = 0; i<12; i++){
        monthtext.push({
        key: months[i],
        text: months[i],
        value: months[i],
    })
    }
    // daytext goes froms 1 to 32
    let daytext = []
    for (let i =1; i<=32; i++){
        daytext.push({
        key: i,
        text: i,
        value: i,
    })
    }
    // NASA APOD started in 1995 so yeartext goes from 1995 to the current year 
    let yeartext = []
    for (let i = 1995; i<=yyyy;i++){
        yeartext.push({
        key: i,
        text: i,
        value: i,
    })
    }

    // These are the functions called onChange that update the states. I think the states must be updated again in an useEffect because 
    // otherwise the values will be one step beind what is clicked because setting the state is asynchronous and doesn't run immediately 
    const getDay = ( event ) => {
        setDay(event.target.textContent)
    }

    const getMonth = (event ) => {
        setMonth(event.target.textContent)
    }

    const getYear = (event ) => {
        setYear(event.target.textContent)
    }

    // returns three dropdowns using semantic ui 
    // options is set to an array of objects and these become the selectors
    // placeholders are set to the current day month and year which is why d m and yyyy were taken as props 
  return(
    <React.Fragment>
    <p>Select a date:</p>
    <Dropdown
        color='darkgrey'
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