import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import authenticate from '../utils/authenticate';
// <Navbar title="Pos"></Navbar>
function Navbar(props){
    const [ title ] = useState(props.title);
    const { isAuthenticated, payload } = authenticate();
    return(
      < nav className = "navbar navbar-expand-lg navbar-light fixed-top"
      id = "mainNav" >
        <div className="container">
<Link className="navbar-brand" to="/">{title}</Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          { isAuthenticated ? (<>
          < li className = "nav-item" >
            <Link className="nav-link" to="/me">Hola {payload.first_name}</Link>
            </li>
            < li className = "nav-item" >
            <Link className="nav-link" to="/create">Crear Post</Link>
            </li>
            < li className = "nav-item" >
            <Link className="nav-link" to="/logout">Logout</Link>
            </li>
          </>) : (<>
            < li className = "nav-item" >
            <Link className="nav-link" to="/signup">Registro</Link>
          </li>
          < li className = "nav-item" >
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          </>) }
        </ul>
      </div>
    </div>
    </nav>
    );
}

export default Navbar;