import React, { useState, useEffect } from 'react'

// takes in the title, explanation, and date from apps.js and returns it in info div
function InfoCard({title, content, date}){
    return (
        <div className = 'info'>
            <p> {content} </p>
            <p> {date} </p>
        </div>
    )
}

export default InfoCard