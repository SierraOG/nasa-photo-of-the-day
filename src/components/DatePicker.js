import React, { useState, useEffect } from 'react'
import OptionMaker from './OptionMaker'

function DatePicker(){
    let monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    let daytext = []
    for (let i =1; i<33; i++){
        daytext.push(i)
    }
    let yeartext = []
    for (let i = 2000; i<2020;i++){
        yeartext.push(i)
    }
    let today=new Date()

    let d = today.getDate();

    let m = monthtext[today.getMonth()+1]; 
    let yyyy = today.getFullYear();

    const [day, setDay] = useState(d)
    const [month, setMonth] = useState(m)
    const [year, setYear] = useState(yyyy)


    console.log(day)
    return (
        <form className = "date-form">
            <select value = {day} className="daydropdown" >
                {daytext.map( (item) => <OptionMaker item = {item} />)}
            </select> 
            <select value ={month} className="monthdropdown">
                {monthtext.map( (item) => <OptionMaker item = {item} />)}
            </select> 
            <select value ={year} className="yeardropdown">
                {yeartext.map( (item) => <OptionMaker item = {item} />)}
            </select> 
        </form>
    )
}

export default DatePicker