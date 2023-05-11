import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[Pname,setPname ] = useState("GuyZzz");
    const changeName = () => 
{
    setPname("click to change button")
}
  return (
    <div>
        <Typography variant='h1'>welcome {Pname}</Typography>
        <Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default StateBasics