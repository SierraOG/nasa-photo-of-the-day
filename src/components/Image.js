import React, { useState, useEffect } from 'react'
// used to play videos
import ReactPlayer from 'react-player'

// returns the image or video from the data. Takes image type and has if statement to determine how to display the content depending on if it is a image or video 
function Image({title, url, imageType}){
    if (imageType === 'video'){
        return (
            <div>
                <h1> {title}</h1>
                <div className="img-container">
                    <ReactPlayer url={url} playing/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1> {title}</h1>
                <div className="img-container">
                    <img src={url}/> 
                </div>
            </div>
        )
    }
}

export default Image