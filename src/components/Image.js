import React, { useState, useEffect } from 'react'
// used to play videos
import ReactPlayer from 'react-player'
import styled from 'styled-components';

const ImageContainer = styled.div`
    margin: 10px auto;
    display: flex;
    justify-content: space-evenly;
`;


// returns the image or video from the data. Takes image type and has if statement to determine how to display the content depending on if it is a image or video 
function Image({title, url, imageType}){
    if (imageType === 'video'){
        return (
            <div>
                <h1> {title}</h1>
                <ImageContainer>
                    <ReactPlayer url={url} playing/>
                </ImageContainer>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1> {title}</h1>
                <ImageContainer>
                    <img src={url}/> 
                </ImageContainer>
            </div>
        )
    }
}

export default Image