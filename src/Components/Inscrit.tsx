import react, { Component } from "react";
import './Inscrit.css'

const   Inscrit = () =>  
{  
 //render()
 //{
    return(
        <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                        <div className="body p-4">
                        
                                        <div className="inputs">
                                            <input type="text" placeholder="first_name"/>
                                    
                                        </div>
                                        <div className="inputs">
                                            <input type="text" placeholder="last_name"/>
                                    
                                        </div>
                                        <div className="inputs">
                                            <input type="email" placeholder="Email"/>
                                    
                                        </div>
                                        <div className="inputs">
                                            <input type="password" placeholder="Mot de passe"/>
                                        </div>
                                        <div className="inputs">
                                            <input type="number" placeholder="phone"/>
                                    
                                        </div>
                                        <div >
                                        <button type="button" className="btn btn-dark btn-long" >Inscrit</button>
                                        </div>

                             </div>   
                        </form>
                    </div>
                </div>
        </div>

    );
//}
}
export default Inscrit ;  