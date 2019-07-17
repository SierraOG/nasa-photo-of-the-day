import React, { useState, useEffect } from 'react'

function DatePicker(){
    let monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    let daytext = []
    for (let i =1; i<33; i++){
        daytext.push(i)
    }
    let yeartext = []
    for (let i = 2012; i<2019;i++){
        yeartext.push(i)
    }
    let today=new Date()

    console.log(today)

    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 

    let todayFormatted = `${yyyy}-${mm}-${dd}`
    const [date, setDate] = useState(todayFormatted)

    return (
        <form className = "date-form">
            <select className="daydropdown">
                <option value ='1'> 1 </option>
                <option value ='2'> 2 </option>
                <option value ='3'> 3 </option>
            </select> 
            <select className="monthdropdown">
                <option value ='1'> 1 </option>
                <option value ='2'> 2 </option>
                <option value ='3'> 3 </option>
            </select> 
            <select className="yeardropdown">
                <option value ='1'> 2001 </option>
                <option value ='2'> 2002 </option>
                <option value ='3'> 2003 </option>
            </select> 
            {/* <input value="date" type="text" onChange = { () => setDate(value)}>
            <input type="submit" value = "Submit"> */}
        </form>
    )
}

export default DatePicker