// import { useEffect } from "react";
import React from 'react';
// import { NavLink } from 'react-router-dom';
// import thhwhite from './../1_Assets/Images/thhwhite.png';
import './boom.scss'
import { NavLink } from 'react-router-dom';
// import './button.css'

const Error = () => { 

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', flexDirection: 'column'}}>
                <div className="form-items">
                    <div class="error-page" style={{display: 'flex', flexDirection: 'column'}}>
                        <div>
                            <h1 className='special' data-h1="404">404</h1>
                            {/* <h1 className='special' style={{fontSize: '80px', marginTop: '-70px'}} data-h1="NOT">NOT</h1>
                            <h1 className='special' style={{fontSize: '80px', marginTop: '-50px'}} data-h1="FOUND">FOUND</h1> */}
                        </div>
                        <p className='NotFound'>NOT FOUND</p>
                    </div>

                    <div id="particles-js"></div>

                </div>

                <NavLink  style={{zIndex: '100000000000000000000000000000000'}} to="/">
                    <button class="buttonDefault" style={{height: '45px', width: '200px', zIndex: '100000000000000000000000000000000'}}>Home</button>
                </NavLink>
            </div>
        </>
    )
}

export default Error