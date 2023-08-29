import React, { Component } from 'react';
import {BrowserRouter as Router , Route } from "react-router-dom";



import Login from './Components/Login';

import Inscrit from './Components/Inscrit'
import './App.css';
import Visite from './Components/Visite';


/*<Route path="/Login" Component={Login}/>
          <Route path="/Inscrit" Component={Inscrit}/> */
function  App  () {

  return (
    
      <div style={{flex:1}}>
        <Router>
            <Visite/>
            

        </Router>
      </div>
      
      
      
    

    
  );

}

export default App;