import React from 'react'
import styled from 'styled-components';

const InfoContainer = styled.div`
    margin: 20px auto;
`;

// takes in the title, explanation, and date from apps.js and returns it in info div
function InfoCard({title, content, date}){
    return (
        <InfoContainer>
            <p> {content} </p>
            <p> {date} </p>
        </InfoContainer>
    )
}

export default InfoCard