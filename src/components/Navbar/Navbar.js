import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import thhwhite from '../1_Assets/thhwhite.png';

const Navbar = () => {
    const RenderMenu = () => {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/Invited" style={{fontWeight: '600'}}>
                        About 
                        </NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink className="nav-link" to="/Fire" style={{fontWeight: '600'}}>
                        Fire
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Blogs" style={{fontWeight: '600'}}>
                        Blogs
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Clients" style={{fontWeight: '600'}}>
                        Clients
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Contact" style={{fontWeight: '600'}}>
                        Contact
                        </NavLink>
                    </li>
                </>
            )
    }
    return (
    <nav id='navigator' className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'transparent', padding: '0', margin: '0'}} >   
        <NavLink className="navbar-brand" to="/">
            <img style={{marginLeft:'15px', width: '70px', height: '40px', marginTop: '5px', marginBottom: '5px'}} src={thhwhite} alt="the hanging house logo"/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse divvery" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <RenderMenu />
            </ul>
        </div>
    </nav>
  )
}

export default Navbar