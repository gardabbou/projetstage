import React from  'react';
import { Link } from 'react-router-dom';
function Visite (){
    return(
        
        <div>
            
          
           <Link to="/login">
           <button type="button" className="btn btn-dark">Login</button>
           </Link>
             &nbsp;&nbsp;
            <Link to="/inscrit">
            <button type="button" className="btn btn-dark">Inscrit</button>
            </Link>
        </div>
        
    );
}
export default Visite;