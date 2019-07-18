import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// importing components
import Top from "./Top.js";
import Image from './components/Image';
import InfoCard from './components/InfoCard';
import DatePicker from "./components/DatePicker";

function App() {
  // state hooks 
  const [APOD, setPictureUrl] = useState("")
  const [title, setTitle] = useState("")
  const [apodType, setType] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")

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
      <DatePicker />
      <Image title = {title} url= {APOD} imageType = {apodType} />
      <InfoCard content = {content} date ={date} />
    </div>
  );
}

export default App;
