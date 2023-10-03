import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import thhblack from '../1_Assets/thhblack.png';

const Navbar = () => {
    const RenderMenu = () => {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/Invited" style={{fontWeight: '600', color: 'black'}}>
                        Invite 
                        </NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink className="nav-link" to="/Accepted" style={{fontWeight: '600', color: 'black'}}>
                        Accepted
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Rejected" style={{fontWeight: '600', color: 'black'}}>
                        Rejected
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/NoReply" style={{fontWeight: '600', color: 'black'}}>
                        Unanswered
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Attended" style={{fontWeight: '600', color: 'black'}}>
                        Attended
                        </NavLink>
                    </li>
                </>
            )
    }
    return (
    <nav id='navigator' className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'transparent', padding: '0', margin: '0', color:'black'}} >   
        <NavLink className="navbar-brand" to="/">
            <img style={{marginLeft:'15px', width: '70px', height: '40px', marginTop: '5px', marginBottom: '5px'}} src={thhblack} alt="the hanging house logo"/>
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