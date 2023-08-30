import react, { Component } from "react";
import './Login.css'

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
                                    <button type="button" className="btn btn-dark ">se connecter</button>
                                </div>
                       </div>
                    </form>
            </div>

            <div className="col-md-6">

            </div>
      </div>
 </div>
    );
//}
}
   
   export default Login ;  