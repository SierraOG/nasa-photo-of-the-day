import React, { useState, useEffect } from 'react'

function InfoCard({title, content, date}){
    return (
        <div className = 'info'>
            <h1>{title}</h1>
            <p> {content} </p>
            <p> {date} </p>
        </div>
    )
}

export default InfoCard