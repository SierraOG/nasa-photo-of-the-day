import React, { useState, useEffect } from 'react'
// component
import OptionMaker from './OptionMaker'

function DatePicker(){
    // make arrays of what will be dropdown options
    let monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    let daytext = []
    for (let i =1; i<33; i++){
        daytext.push(i)
    }
    let yeartext = []
    for (let i = 2000; i<2020;i++){
        yeartext.push(i)
    }
    // gets todays date
    let today=new Date()

    // formats and seperates the date into the same format as the arrays above
    let d = today.getDate();
    let m = monthtext[today.getMonth()+1]; 
    let yyyy = today.getFullYear();

    // set up states for day month and year initializing them w todays date
    const [day, setDay] = useState(d)
    const [month, setMonth] = useState(m)
    const [year, setYear] = useState(yyyy)

    // sets up form maping through the arrays above and passing that data into OptionMaker and sets the value of each select to the current time
    return (
        <form className = "date-form">
            <select value = {day} className="daydropdown" >
                {daytext.map( (item) => <OptionMaker  item = {item} setDay={setDay} />)}
            </select> 
            <select value ={month} className="monthdropdown">
                {monthtext.map( (item) => <OptionMaker item = {item} setMonth = {setMonth} />)}
            </select> 
            <select value ={year} className="yeardropdown">
                {yeartext.map( (item) => <OptionMaker item = {item} setYear = {setYear} />)}
            </select> 
        </form>
    )
}

export default DatePicker