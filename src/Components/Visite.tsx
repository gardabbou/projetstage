import React from  'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/page7.jpg'
//import"../style/Visite.css";
//import '../style/App.scss' 
function Visite (){
    return(
        
        <div className='body'>

                <div className="img"> 
                    
                   
            <div className='droit'>   
                <Link to="/login">
                    <button type="button" className="btn btn-dark" >Login</button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/inscrit">
                    <button type="button" className="btn btn-dark ">Inscrit</button>
                </Link>
                <br/>
            </div>
           <div className='container' id='texte'>
            <br/>
                <h1>L'Importance des Livres : Portes Ouvertes vers la Connaissance et l'Imagination</h1>

                   Les livres ont joué un rôle essentiel dans la vie de l'humanité depuis des siècles.
                   <br/> Ils ont servi de gardiens de la connaissance,
                   <br/>de sources d'inspiration et d'instruments pour explorer l'imagination. 
                   <br/>Alors que le monde évolue à un rythme rapide avec l'avènement de la technologie numérique,
                   l'importance des livres dans nos vies ne fait que croître.
            </div>






           
            
            </div>
           
        </div>
        
            
        
    );
}
export default Visite;