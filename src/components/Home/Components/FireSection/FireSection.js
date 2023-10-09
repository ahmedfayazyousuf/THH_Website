import React from 'react';
import FireImg from './../../../1_Assets/Images/Fire/fire.png';
import TextAnim from '../TextAnim.jsx';

const Fire = () => { 

    return (
        <div style={{height: '100%', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '100%', width: '100vw', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>


                <div style={{height:'100%', width:  window.innerWidth>= 750 ?  '50%':"100%", border: '0.5px solid transparent', display: 'flex', flexDirection: 'column'}}>
                    <div style={{margin:  window.innerWidth>= 750 ? '80px':'0px',padding: window.innerWidth>= 750 ?'0px':'20px',width:'100%'}}>

                        <TextAnim  Body={
                            <div > 
                                <h1 className='special' style={{fontSize:window.innerWidth>= 750 ? `${window.innerWidth/16 }px`:'40px'}}>INTRODUCING</h1><br></br>
                                <h1 className='special' style={{fontSize:window.innerWidth>= 750 ? `${window.innerWidth/10 }px`:'70px', color: '#00f526', marginTop:window.innerWidth>= 750 ?`-${window.innerWidth/16 }px`:'-55px'}}>FIRE</h1>
                            </div>
                        }  />

                        <TextAnim   Body={
                            <div > 
                                <p style={{fontSize: '20px', fontWeight: '900', marginBottom: '0'}}>What is Lorem Ipsum? </p>
                                <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        }  />

                        <TextAnim Styles={{width:'100%',display:"flex",justifyContent:'flex-end',alignItems:'flex-end', backgroundColor: 'black', marginTop: '-30px', marginBottom: '-20px'}}  Body={
                            <img style={{width:'150px',display: window.innerWidth>= 750 ? 'none' : 'initial'}} src={FireImg} alt="Fire"/>
                        }  />


                        <TextAnim  Body={
                            <div> 
                                <p style={{fontSize: '20px', fontWeight: '900', marginBottom: '0'}}>Why is Lorem Ipsum? </p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        }  />
                            
                    </div>
                </div>
                
                
                <div id='DesktView' style={{height:'100%', width: '50%', backgroundColor: 'red', display: window.innerWidth<= 750 ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <TextAnim  Body={
                            <img style={{marginLeft:'15px',  marginTop: '5px', marginBottom: '5px'}} src={FireImg} alt="Fire"/>
                    }  />
                    
                </div>
                
            </div>
        </div>
    )
}

export default Fire