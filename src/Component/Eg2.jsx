import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Eg2 = () => 
{
    var[val,setVal] = useState({id:'' , age:''});
    const inputHaddler = (e) =>
    {
      const{name,value} = e.target
      setVal((val)=>({...val,[name]:value}))
    }


  return (
    <div>
      <TextField label = 'id' name='id' value = {val.id} onChange = {inputHaddler}/>
        
            <br></br>
            <br/>
            
        <TextField label = 'age' name = 'age' value = {val.age} onChange = {inputHaddler}/>
        <br></br>

         id: {val.id} <br/>
         age: {val.age} <br/>
    </div>
  )
}

export default Eg2