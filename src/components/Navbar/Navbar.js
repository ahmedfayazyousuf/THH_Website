
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import thhwhite from './../1_Assets/Images/thhwhite.png';
import './Navbar.scss';
// import $ from "jquery"
import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{zIndex: '1000000000000000000001'}}>
      <div style={{top: '0px', left: '-20px', height: '90px', width: '180px', backgroundColor: 'black', position: 'fixed', zIndex: '1000000000', opacity: '0.5',boxShadow: '0px 1px 5px #00f526', transform: 'skew(-30deg)'}}></div>
      <NavLink className="nav-link" to="/">
        <img alt='thhlogo' style={{width: '120px', top: '10px', left: '10px', zIndex: '1000000000', position: 'fixed'}} src={thhwhite}/>
      </NavLink>
      

      <div className={`container ${menuOpen ? 'full-menu' : ''}`}  style={{zIndex: '1000000000000000000001'}}>
        <div className="menu-container" onClick={toggleMenu} id="toggle"  style={{zIndex: '1000000000000000000001'}}>
        {/* eslint-disable-next-line */}
          <a href="#" className="menu"  style={{zIndex: '1000000000000000000001'}}>
            <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"  style={{zIndex: '100000000000'}}></i>
          </a>
        </div>
      </div>

      <div className={`overlay ${menuOpen ? 'open' : ''}` } id="overlay" style={{zIndex: '1000000000', backgroundColor: 'black'}}>
        <nav className="overlay-menu" style={{}}>
          <ul>
            <li><NavLink className="nav-link" to="/" style={{fontWeight: '600'}}> Home</NavLink></li>
            <li><NavLink className="nav-link" to="/Fire" style={{fontWeight: '600'}}>Fire</NavLink></li>
            <li><NavLink className="nav-link" to="/Contact" style={{fontWeight: '600'}}> Contact</NavLink></li>
            <li><NavLink className="nav-link" to="/Invited" style={{fontWeight: '600'}}> About</NavLink></li>
            <li><NavLink className="nav-link" to="/Invited" style={{fontWeight: '600'}}> About</NavLink></li>
            <li><NavLink className="nav-link" to="/Invited" style={{fontWeight: '600'}}> About</NavLink></li>
            <li><NavLink className="nav-link" to="/Invited" style={{fontWeight: '600'}}> About</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;





























// import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from "react-router-dom";
// import thhwhite from '../1_Assets/thhwhite.png';

// const Navbar = () => {
//     const RenderMenu = () => {
//             return (
//                 <>
//                     <li className="nav-item active">
//                         <NavLink className="nav-link" to="/Invited" style={{fontWeight: '600'}}>
//                         About 
//                         </NavLink>
//                     </li>
//                     <li className="nav-item" >
//                         <NavLink className="nav-link" to="/Fire" style={{fontWeight: '600'}}>
//                         Fire
//                         </NavLink>
//                     </li>
//                     <li className="nav-item">
//                         <NavLink className="nav-link" to="/Blogs" style={{fontWeight: '600'}}>
//                         Blogs
//                         </NavLink>
//                     </li>

//                     <li className="nav-item">
//                         <NavLink className="nav-link" to="/Clients" style={{fontWeight: '600'}}>
//                             Clients
//                         </NavLink>
//                     </li>

//                     <li className="nav-item">
//                         <NavLink className="nav-link" to="/Contact" style={{fontWeight: '600'}}>
//                             Contact
//                         </NavLink>
//                     </li>
//                 </>
//             )
//     }
//     return (
//     <nav id='navigator' className="navbar navbar-expand-lg navbar-dark" style={{width: '100%', backgroundColor: 'black', padding: '0', margin: '0', position: 'fixed', top: '0'}} >   
//         <NavLink className="navbar-brand" to="/">
//             <img style={{marginLeft:'15px', width: '70px', height: '40px', marginTop: '5px', marginBottom: '5px'}} src={thhwhite} alt="the hanging house logo"/>
//         </NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse divvery" id="navbarSupportedContent">
//             <ul className="navbar-nav ml-auto">
//                 <RenderMenu />
//             </ul>
//         </div>
//     </nav>
//   )
// }

// export default Navbar