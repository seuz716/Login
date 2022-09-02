import * as React from 'react';
import {LandingPage} from './LandingPage';
import {HOME,LOGIN,LOGOUT, PROFILE } from './src/config/routes/path'
import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import {Home } from './src/Home'
import {Login } from './src/Login'
import {Logout } from './src/Logout'
import {Private } from './src/Private'

import './style.css';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={LOGOUT} element={<Logout />} />
      <Route path={PROFILE} element={<Private />} />
        
      
    </Routes>  
    </BrowserRouter>
  );
}
