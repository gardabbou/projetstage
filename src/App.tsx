import React, { Component } from 'react';


import ReactDOM from 'react-dom'
import {Routes ,Route} from "react-router-dom"
import Login from './Components/Login'

import Inscrit from './Components/Inscrit'
import './App.css';
import Visite from './Components/Visite';
import Profil from './Components/Profil';
import Article from './Components/Article';


function  App () {

  return (
    
      <div > 
        
          
        <Routes >
            <Route path="/" element={<Visite/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/inscrit" element={<Inscrit/>}/>
            <Route path="/profil" element={<Profil/>}/>
            <Route path="/article" element={<Article/>}/>
          </Routes>
        
           
      </div>
      
      
      
    

    
  );

}

export default App;