import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NewData = () => {
    var[users,setUsers] = useState([])
    useEffect(()=> {axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log(response.NewData)
        setUsers(response.data)
    })
     .catch ((err)=>console.log(err))},[]);



   
  return (
    <div style={{padding:"100px"}}>
        <Typography variant='h3'>axios view</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((value,index)=>{
                            return(
                                <TableRow key={index}>
                                    <TableCell>{value.name} </TableCell>
                                    <TableCell>{value.email} </TableCell> 
                                   
                                </TableRow>
                            )
                        
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  )
}

export default NewData