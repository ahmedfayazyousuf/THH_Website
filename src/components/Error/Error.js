// import { useEffect } from "react";
import React from 'react';
// import { NavLink } from 'react-router-dom';
import thhblack from '../1_Assets/thhblack.png';

const Error = () => { 
    // useEffect(() =>{
    //     document.getElementById('navigator').style.opacity = 0;
    //     document.getElementById('navigator').style.display = 'none';
    // },[])
    

    return (
        <>
            <div className="main">
                <div className="form-items">
                    <div style={{justifyContent: 'center', alignItems: 'center'}}>
                        <img id='head' style={{width: '10%'}} src={thhblack} alt="Nissan Laptop Cover"/>
                    </div>
                    
                    <h1 style={{fontWeight:'1000', fontSize: '60px'}}>404 Not Found</h1>
                    {/* <NavLink to="/">
                        <button>
                            Home
                        </button>
                    </NavLink> */}
                </div>
            </div>
        </>
    )
}

export default Error