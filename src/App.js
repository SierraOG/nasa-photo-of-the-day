import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// importing components
import Top from "./Top.js";
import Image from './components/Image';
import InfoCard from './components/InfoCard';
import DropdownDatePicker from "./components/DatePicker";

function App() {
  // state hooks 
  const [APOD, setPictureUrl] = useState("")
  const [title, setTitle] = useState("")
  const [apodType, setType] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")


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

  const [day, setDay] = useState(d)
  const [month, setMonth] = useState(m)
  const [year, setYear] = useState(yyyy)

  // gets data and udpates the state values
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=kiITos2TeqNtXey1N7zrTx0y1lTosT4gNR8ptJEB')
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
  }, [])

  // builds app
  return (
    <div className="App">
      <Top/>
      <DropdownDatePicker day = {day} setDay ={setDay} month = {month} setMonth = {setMonth} year={year} setYear={setYear}/>
      <Image title = {title} url= {APOD} imageType = {apodType} />
      <InfoCard content = {content} date ={date} />
    </div>
  );
}

export default App;
