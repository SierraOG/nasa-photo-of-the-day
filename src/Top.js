import React from 'react'
import styled from 'styled-components';

const TopContainer = styled.div`
  margin: 0 auto 10px;
//   background-color: white; 
//   background-image: linear-gradient(white, lightgrey); 
  height: 75px;
  padding-top:20px;
  border-radius: 15px;
`;

// the top or header portion of the page
function Top() {
    return(
        <TopContainer>
            <h2> NASA Astronomy Picture of the Day </h2>
        </TopContainer>
    )
}

export default Top;