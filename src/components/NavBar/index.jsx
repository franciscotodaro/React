
import CardWidget from "../CardWidget";
import "./navbar.css";


function NavBar () {

    return (
              
            
        <div className="navbar">
                       
            <ul>    
                <li>
                    <button>Computadoras</button>
                </li>                
                <li>
                    <button> Celulares </button>
                </li>                
                <li>
                    <button>Consolas</button>
                </li>                
                <li>
                    <button>Televisores</button>
                </li>                
                <li>
                    <button>Otros</button>
                </li>
            </ul>
            <CardWidget />
        </div>
    );


        
}




export default NavBar;