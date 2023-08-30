import React, { Component } from 'react';


import ReactDOM from 'react-dom'
import {Routes ,Route} from "react-router-dom"
import Login from './Components/Login'

import Inscrit from './Components/Inscrit'
import './App.css';
import Visite from './Components/Visite';


/*<Route path="/Login" Component={Login}/>
          <Route path="/Inscrit" Component={Inscrit}/> */
function  App () {

  return (
    
      <div > 
        
          <Routes >
            <Route path="/" element={<Visite/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/inscrit" element={<Inscrit/>}/>
          </Routes>
          
        
           
      </div>
      
      
      
    

    
  );

}

export default App;