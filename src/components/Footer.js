import React from 'react'

const Footer = () => {
    return(
        <footer style={{display: 'flex', justifyContent: 'space-around', width:'430px', margin: '20px auto 0'}}>
            <p style={{width:'200px'}}>&copy;Sierra Obermoeller-Gilmer</p><p style={{width:'200px'}}>All data from <a href="https://www.nasa.gov/">NASA</a></p>
        </footer>
    )
}

export default Footer;