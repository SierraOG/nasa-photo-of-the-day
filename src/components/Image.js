import React from 'react'
// used to play videos
import ReactPlayer from 'react-player'
import styled from 'styled-components';

const ImageContainer = styled.div`
    width: 40%;
    margin: 10px auto;
    display: flex;
    justify-content: space-evenly;
`;

const Img = styled.img`
    max-width: 600px;
    box-shadow: 2px 2px 2px black;
`;

// returns the image or video from the data. Takes image type and has if statement to determine how to display the content depending on if it is a image or video 
function Image({title, url, imageType}){
    if (imageType === 'video'){
        return (
            <div style={{margin: 'auto'}}>
                <h1> {title}</h1>
                <ImageContainer>
                    <ReactPlayer url={url} playing/>
                </ImageContainer>
            </div>
        )
    }
    else {
        return (
            <div style={{margin: 'auto'}}>
                <h1> {title}</h1>
                <ImageContainer>
                    <Img src={url}/> 
                </ImageContainer>
            </div>
        )
    }
}

export default Image