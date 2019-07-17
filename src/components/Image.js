import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

function Image({url, imageType}){
    if (imageType === 'video'){
        return (<ReactPlayer url={url} playing/>)
    }
    else{
        return (<img src={url}/> )
    }
}

export default Image