
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import thhwhite from '../1_Assets/thhwhite.png';

function Footer() {

  return (
    <div style={{zIndex: '1000000000000000000001'}}>
        <img style={{width: '120px', top: '10px', left: '10px', zIndex: '1000000000000000000000000000000', position: 'fixed'}} src={thhwhite}/>
      

      <div className={`container ${menuOpen ? 'full-menu' : ''}`}  style={{zIndex: '1000000000000000000001'}}>
        <div className="menu-container" onClick={toggleMenu} id="toggle"  style={{zIndex: '1000000000000000000001'}}>
        {/* eslint-disable-next-line */}
          <a href="#" className="menu"  style={{zIndex: '1000000000000000000001'}}>
            <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"  style={{zIndex: '101'}}></i>
          </a>
        </div>
      </div>

      <div className={`overlay ${menuOpen ? 'open' : ''}`} id="overlay" style={{zIndex: '100', backgroundColor: 'black'}}>
        <nav className="overlay-menu">
          <ul>
            <li><NavLink className="nav-link" to="/" style={{fontWeight: '600'}}> Home</NavLink></li>
            <li><NavLink className="nav-link" to="/Blogs" style={{fontWeight: '600'}}> Blogs</NavLink></li>
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

export default Footer