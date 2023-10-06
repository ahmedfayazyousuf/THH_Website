import React from 'react';
import FireImg from './../../../1_Assets/Images/Fire/fire.png';
 
const Fire = () => { 

    return (
        <div style={{height: '100%', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '100%', width: '100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>


                <div style={{height:'100%', width: '50%', border: '0.5px solid transparent', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                    <div style={{margin: '80px'}}>
                        <h1 className='special' style={{fontSize: '100px'}}>INTRODUCING</h1><br></br>
                        <h1 className='special' style={{fontSize: '180px', color: '#00f526', marginTop:'-100px'}}>FIRE</h1>
                        
                        <p style={{fontSize: '20px', fontWeight: '900', marginBottom: '0'}}>What is Lorem Ipsum? </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        
                        <p style={{fontSize: '20px', fontWeight: '900', marginBottom: '0'}}>Why is Lorem Ipsum? </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    </div>
                </div>
                
                
                <div style={{height:'100%', width: '50%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{marginLeft:'15px',  marginTop: '5px', marginBottom: '5px'}} src={FireImg} alt="Fire"/>
                </div>
                
            </div>
        </div>
    )
}

export default Fire