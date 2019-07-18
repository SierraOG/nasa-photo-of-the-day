import React from 'react'

// makes option tag with passed in value for DatePicker
function OptionMaker({item, setItem}) {
    return (
        <option value ={item} > {item} </option>
    )
}

export default OptionMaker