import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ReactPlayer from 'react-player'

// importing components
import Image from './components/Image'
import InfoCard from './components/InfoCard'

function App() {
  // state hooks 
  const [APOD, setPictureUrl] = useState("")
  const [title, setTitle] = useState("")
  const [apodType, setType] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=kiITos2TeqNtXey1N7zrTx0y1lTosT4gNR8ptJEB')
    .then( data => {
      console.log(data)
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

  return (
    <div className="App">
      <Image url= {APOD} imageType = {apodType} />
      <InfoCard title = {title} content = {content} date ={date} />
    </div>
  );
}

export default App;
