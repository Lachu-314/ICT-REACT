import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const TableArray = () => 
{
    var [names,setName] = useState([
        {
            names:"amaya"
        },
        {
            age:19
        }
        ]);

  return (
    <div>
        <Typography variant='h3'>TABLE AND ARRAY</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>age</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {names.map((value,index) =>{
                            return(
                                <TableRow key={index}>
                                    <TableCell>{value.names}</TableCell>
                                    <TableCell>{value.age}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default TableArray