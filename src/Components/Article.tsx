import react, { Component } from "react";
//import '../style/Article.css'
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{FaEye,FaPen,FaTrash} from'react-icons/fa'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import{Button ,CloseButton,Modal, ModalBody} from 'react-bootstrap'


function Article() 
{  
    
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users/")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
          console.log(err);
        });
    };
   
    const handleDelete = (id:any) => {
        axios.delete('https://jsonplaceholder.typicode.com/users/'+ id).then((response)=>{
            console.log(response.data)
            fetchData();        
        });
    }
    
     //buntton Ajout
        const[cond,setcond]=useState(false)
     
      
    return( 


    <div className="container">

<div className="col-md-12">
    
<Button onClick={() =>setcond(true)}>Ajout</Button>
<Modal show={cond}>
  <Modal.Header >
    Modal
  </Modal.Header>
  <ModalBody>
    <input type="numbre" placeholder="Id"/>
    <input type="text" placeholder="Nom"/>
    <input type="email" placeholder="Email"/>
  </ModalBody>
  <Modal.Footer>
    <Button >Save</Button>
    <Button onClick={() =>setcond(false)} >close</Button>
  
  </Modal.Footer>
</Modal>
      
        
         
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
            users.map(user => 
            <tr key={user['id']}>
            <td > {user['id'] }</td>
             <td>{ user['name']  }</td>
             <td>{ user['email']  }</td>
             <td>
             
             <button type="button"   className="btn btn-light"
              onClick={(e) => {
                navigate('/user/'+user['id']);
              }}
               > <FaEye />
            </button>
    
             
             <button type="button" className="btn btn-light"> <FaPen/></button>
             
             <button type="button" onClick={ () => handleDelete(user['id'])} 
             
              className="btn btn-light" ><FaTrash/></button>
             </td>
        </tr>
        ) 
      }
        
         </tbody>
        </table>
        
    </div>

        );
}

export default Article ;