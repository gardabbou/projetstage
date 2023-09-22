
import axios from "axios";
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import imge from '../assets/user2.png';
/*<div className="row">
                                    <div className="col-md-6">
                                         Nom
                                    </div>
                                    <div className="col-md-6">
                                          {user?.name}
                                          <div className="row">
                                            <div className="col-md-6">
                                                email
                                            </div>
                                            <div className="col-md-6">
                                                {user?.email}

                                            </div>
                                          </div> */
  

function VueProfile()
{

    const { id } = useParams()

    const [user , setUser] : any = useState<[]> ([]);
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users/"+id)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => {
          console.log(err);
        });
    };

    /*  <div className="profile">
                                        
                                        Id: {user?.id}
                                        <br/>
                                        Nom: {user?.name}
                                        <br/>
                                        Email: {user?.email}
                                        <br/>
                                        Phone: {user?.phone}
                                    </div>
                                   
                                  */

    console.log('user ===>',user);
    
    
    return(
                <div className="container">
                
                <div className="row">

                    <div className="col-md-4">

                        <div className="user-img">
                         <img src={imge} className="user" />
                        </div>

                    </div>

                    <div className="col-md-8">

                       <div className="prf"> 
                        <div className="row">
                            <div className="col-md-6">Id</div>
                            <div className="col-md-6" id="usr"> {user?.id}</div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">name</div>
                            <div className="col-md-6" id="usr"> {user?.name}</div>
                        </div>


                        <div className="row">
                            <div className="col-md-6">email</div>
                            <div className="col-md-6" id="usr"> {user?.email}</div>
                        </div>


                        <div className="row">
                            <div className="col-md-6">website</div>
                            <div className="col-md-6" id="usr"> {user?.website}</div>
                        </div>


                        <div className="row">
                            <div className="col-md-6">phone</div>
                            <div className="col-md-6" id="usr"> {user?.phone}</div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
               
          )
      
      
  } ;
  
  
  export default VueProfile;

