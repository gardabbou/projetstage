import React, { Component } from 'react';


import ReactDOM from 'react-dom'
import {Routes ,Route} from "react-router-dom"
import Login from './Components/Login'

import Inscrit from './Components/Inscrit'
import './style/App.scss'
import Visite from './Components/Visite';

import Article from './Components/Article';
import VueProfile from './Components/VueProfile';
import Navbar from './Components/navbar';

function  App () {
  
 
  
  return (
    
      <div > 
        
          <Navbar></Navbar>
          
        <Routes >
            <Route path="/" element={<Visite/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/inscrit" element={<Inscrit/>}/>
            <Route path="/article" element={<Article   />}/>
            <Route path="/user/:id" element={<VueProfile />}/>
          </Routes>
        
           
      </div>
      
      
      
    

    
  );

}

export default App;