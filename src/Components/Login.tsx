import react, { Component } from "react";
//import '../style/Login.css'
import { Link } from 'react-router-dom';

function Login () 
{  
//render() {
    return(
  <div className="container"

  >
     <div className="row">
          <div className="col-md-6">
                   <form>
                      <div className="body p-4">
                            
                        
                           
                            
                                <div className="inputs">
                                    <input type="email" placeholder="Email"/>
                                    
                                </div>
   
                                <div className="inputs">
                                    <input type="password" placeholder="Mot de passe"/>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div >
                                    <Link to="/profil">
                                        <button type="button" className="btn btn-dark ">se connecter</button>
                                    </Link>
                                </div>
                       </div>
                    </form>
            </div>

            <div className="col-md-6">
               <div className="mg"> 
                    
              </div>

            </div>
      </div>
 </div>
    );
//}
}
   
   export default Login ;  