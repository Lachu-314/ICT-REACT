import { TextField } from '@mui/material'
import React, { useState } from 'react'

const sample = () => 
{
    var [val,newval] = useState ()
    const setChange = (e) =>
    {
        const {name,value} = e.target
        newval ((val) =>({...val,[name]:val}))
    }
  return (
    <div>
        <TextField label = 'id' name='ids' onClick={setChange}/>
    </div>
  )
}

export default sample