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
  // state hooks for nasa data
  const [APOD, setPictureUrl] = useState("")
  const [title, setTitle] = useState("")
  const [apodType, setType] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")


  // array of month names
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

  // gets todays date
  let today=new Date()

  // seperates the current date and formats it in the way I want my dropdowns to be
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
    // updates the states 
    setDay(day)
    setMonth(month)
    setYear(year)
    // formats day and month before combining them to queryDate
    // the api takes the format ...&date=yyyy-mm-dd so the month has to be changed from the string month name to a number
    // also if the day or month is less than 10 it needs be two numbers and have a 0 in front 
    let queryDay = (day < 10) ? `0${day}` : `${day} `
    let queryMonth = ((months.indexOf(month) + 1) < 10) ? `0${months.indexOf(month) + 1}` : `${months.indexOf(month) +1}` 
    queryDate = `${year}-${queryMonth}-${queryDay}`  

    // gets data and updates states 
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
      alert('Select a different day')
    })
    // updates every time day month or year changes
  }, [day, month, year])

  // builds app
  return (
    <AppContainer>
      <Top/>
      <DropdownDatePicker months = {months} d={d} m={m} yyyy={yyyy} setDay ={setDay} setMonth = {setMonth} setYear={setYear}/>
      <Image title = {title} url= {APOD} imageType = {apodType} />
      <InfoCard content = {content} date ={date} />
    </AppContainer>
  );
}

export default App;
