import React, { Component } from 'react';


import ReactDOM from 'react-dom'
import {Routes ,Route} from "react-router-dom"
import Login from './Components/Login'

import Inscrit from './Components/Inscrit'
import './style/App.scss'
import Visite from './Components/Visite';
import Profil from './Components/Profil';
import Article from './Components/Article';
import VueProfile from './Components/VueProfile';

function  App () {
  
 
  
  return (
    
      <div > 
        
          
        <Routes >
            <Route path="/" element={<Visite/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/inscrit" element={<Inscrit/>}/>
            <Route path="/profil" element={<Profil/>}/>
            <Route path="/article" element={<Article   />}/>
            <Route path="/user/:id" element={<VueProfile />}/>
          </Routes>
        
           
      </div>
      
      
      
    

    
  );

}

export default App;