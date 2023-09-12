import react, { Component } from "react";
//import '../style/Article.css'
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{FaEye,FaPen,FaTrash} from'react-icons/fa'

function Article() 
{  
   const[users,setUsers]= useState([]);
   useEffect(()=>{
    fetchData();
   },[])
   const fetchData = async () => {
   
    await fetch('https://jsonplaceholder.typicode.com/users/')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err)=>{
        console.log(err);
    }) 
    }
    return( 

    <div className="container">

        <div className="col-md-12">
        <button type="button" className="btn btn-light">ajouter</button>
        </div>
        
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nom</th>
                    <th scope="col">email</th>
                    <th scope="col">actions</th>
                </tr>
         </thead>
         <tbody>
         { 
        users.map(user => <tr>
             <td>{ user['id'] } </td>
             <td>{ user['name']  }</td>
             <td>{ user['email']  }</td>
             <td>
              <button type="button"   className="icones"> <FaEye /></button>
             
             <button type="button" className="icones"> <FaPen/></button>
             
             <button type="button" className="icones"><FaTrash/></button>
             </td>
        </tr>) 
      }
        
         </tbody>
        </table>
        
    </div>

        );
}

export default Article ;