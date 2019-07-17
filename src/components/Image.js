import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

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