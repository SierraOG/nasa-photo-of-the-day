import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

// importing components
import Top from "./Top.js";
import Image from './components/Image';
import InfoCard from './components/InfoCard';
import DropdownDatePicker from "./components/DatePicker";

// style App div
const AppContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`;


function App() {
  // state hooks 
  const [APOD, setPictureUrl] = useState("")
  const [title, setTitle] = useState("")
  const [apodType, setType] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")


  // months for getting the date 
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

  // gets todays date
  let today=new Date()

  // formats and seperates the date into the same format as the arrays above
  let d = today.getDate();
  let m = months[today.getMonth()]; 
  let yyyy = today.getFullYear();

  // sets day, month, and year states to today
  const [day, setDay] = useState(d)
  const [month, setMonth] = useState(m)
  const [year, setYear] = useState(yyyy)

  // initializes the date that will be used to select api data
  let queryDate = ''

  // gets data and udpates the state values
  useEffect(() => {
    // updates day
    setDay(day)
    setMonth(month)
    setYear(year)
    // formats day and month before adding to queryDate
    let queryDay = (day < 10) ? `0${day}` : `${day} `
    let queryMonth = ((months.indexOf(month) + 1) < 10) ? `0${months.indexOf(month) + 1}` : `${months.indexOf(month) +1}` 
    queryDate = `${year}-${queryMonth}-${queryDay}`  
    console.log(queryDate)

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=kiITos2TeqNtXey1N7zrTx0y1lTosT4gNR8ptJEB&date=${queryDate}`)
    .then( data => {
      setPictureUrl(data.data.url)
      setTitle(data.data.title)
      setType(data.data.media_type)
      setContent(data.data.explanation)
      setDate(data.data.date)
    })
    .catch(error=>{
      console.log('error')
    })
    // updates every time day month or year changes
  }, [day, month, year])

  // builds app
  return (
    <AppContainer>
      <Top/>
      <DropdownDatePicker day = {day} setDay ={setDay} month = {month} setMonth = {setMonth} year={year} setYear={setYear}/>
      <Image title = {title} url= {APOD} imageType = {apodType} />
      <InfoCard content = {content} date ={date} />
    </AppContainer>
  );
}

export default App;
