import React from 'react'

function OptionMaker({item}) {
    return (
        <option value ={item} > {item} </option>
    )
}

export default OptionMaker