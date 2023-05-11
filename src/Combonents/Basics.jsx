import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Basics = () => {
  return (
    <div>
        <h1>lalalalalal</h1>
        <Typography variant='h1' color="primary.main">Register</Typography>
        <TextField label='name' color='primary' variant='filled'/><br /><br />
        <Button variant='contained' color='success'>submit</Button>
        <Button variant="text" color='error'> submit again</Button>
        <Button variant="outlined" color='warning'>Outlined</Button>
    </div>
  )
}

export default Basics