import React, { useState, useEffect } from 'react'
// component
// import OptionMaker from './OptionMaker'

// function DatePicker(){
//     // make arrays of what will be dropdown options
//     let monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
//     let daytext = []
//     for (let i =1; i<33; i++){
//         daytext.push(i)
//     }
//     let yeartext = []
//     for (let i = 2000; i<2020;i++){
//         yeartext.push(i)
//     }
//     // gets todays date
//     let today=new Date()

//     // formats and seperates the date into the same format as the arrays above
//     let d = today.getDate();
//     let m = monthtext[today.getMonth()]; 
//     let yyyy = today.getFullYear();

//     // set up states for day month and year initializing them w todays date
//     const [day, setDay] = useState(d)
//     const [month, setMonth] = useState(m)
//     const [year, setYear] = useState(yyyy)

//     // sets up form maping through the arrays above and passing that data into OptionMaker and sets the value of each select to the current time
//     return (
//         <form className = "date-form">
//             <select value = {day} className="daydropdown" >
//                 {daytext.map( (item) => <OptionMaker  item = {item} setDay={setDay} />)}
//             </select> 
//             <select value ={month} className="monthdropdown">
//                 {monthtext.map( (item) => <OptionMaker item = {item} setMonth = {setMonth} />)}
//             </select> 
//             <select value ={year} className="yeardropdown">
//                 {yeartext.map( (item) => <OptionMaker item = {item} setYear = {setYear} />)}
//             </select> 
//         </form>
//     )
// }

// export default DatePicker


import { Dropdown } from 'semantic-ui-react'
// import console = require('console');


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
const DropdownDatePicker = ({day,setDay}) => {
    const getDay = (event, {value}) => {
        setDay(value)
        console.log(day)
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
    />{' '}
    <Dropdown
        placeholder={m}
        closeOnBlur
        selection
        options={monthtext}
    />{' '}
    </React.Fragment>
  )
}

export default DropdownDatePicker