import { AppBar, Button, Typography  , Toolbar} from '@mui/material'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Basics from "./Basics"
import StateBasics from './StateBasics';
import NewData from './NewData';

const navigation = () => {
  return (
    <div>
        <AppBar>
          <Toolbar>
          <Typography align = 'left' sx={{ flexGrow: 1 }}>TrialApp</Typography>
          <Button><Link to={"/"}>Home</Link></Button> 
          <Button> <Link to={"/states"}>State</Link></Button> 
          <Button> <Link to={"/axios"}>axios</Link></Button> 
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path='/' element={<StateBasics/>}></Route>
          <Route path='/states' element={<Basics/>}></Route>
          <Route path='/axios' element={<NewData/>}></Route>
        </Routes>
    </div>
  )
}

export default navigation