import React from  'react';
import { Link } from 'react-router-dom';
function Visite ()
{ return(

        <div>

            <Link to='/login'>
            <button type="button" className="btn btn-success">Login</button>
            </Link>
        </div>

    );

}
export default Visite ;