import React from 'react';
import thhblack from '../1_Assets/thhblack.png';
import '../1_Assets/thh.css';

const Home = () => { 

    return (
        <>
            <div className="main">
                <div className="form-items">
                    <div style={{justifyContent: 'center', alignItems: 'center'}}>
                        <img id='head' style={{width: '150px'}} src={thhblack} alt="Nissan Laptop Cover"/>
                    </div>
                    
                    <h1 style={{fontWeight:'1000', fontSize: '55px', marginTop: '5px', color: '#00443F', overflow: 'hidden'}}>WELCOME</h1>
                    <h4 style={{color: '#00443F', fontSize: '20px'}}> To The Hanging House Website </h4>
                </div>
            </div>
        </>
    )
}

export default Home