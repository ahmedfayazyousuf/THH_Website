import React from 'react';
import FireImg from './../../../1_Assets/Images/Fire/fire.png';
import TextAnim from '../TextAnim.jsx';

const Fire = () => { 

    return (
        <div style={{height: '100%', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '100%', width: '100vw', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>


                <div style={{height:'100%', width:  window.innerWidth>= 750 ?  '50%':"100%", border: '0.5px solid transparent', display: 'flex', flexDirection: 'column',zIndex:'100000000000'}}>
                    <div style={{margin:  window.innerWidth>= 750 ? '80px':'0px',padding: window.innerWidth>= 750 ?'0px':'20px',width:'100%'}}>

                        <TextAnim  Body={
                            <div > 
                                <h1 className='special' style={{fontSize:window.innerWidth>= 750 ? `${window.innerWidth/16 }px`:'40px'}}>INTRODUCING</h1><br></br>
                                <h1 className='special' style={{fontSize:window.innerWidth>= 750 ? `${window.innerWidth/10 }px`:'70px', color: '#00f526', marginTop:window.innerWidth>= 750 ?`-${window.innerWidth/16 }px`:'-55px'}}>FIRE</h1>
                            </div>
                        }  />

                        <TextAnim Styles={{zIndex:'100000000000'}}  Body={
                            <div style={{zIndex:'100000000000'}}> 
                                <p style={{zIndex:'100000000000'}} >FIRE isn't your run-of-the-mill bot – he's like the superhero of our team, always there to help us out and make things awesome for your brand. He's the one who kicks off the conversations in client meetings (and let's be honest, who can resist an adorable robot?), and he's like a mind-reader, knowing what the client needs even before they say it, thanks to his nifty image tracking skills. He's also the go-to source for all the coolest insights, the master of brainstorming, the feedback guru, and he magically transforms those never-ending meetings into quick and snappy recaps. Basically, he's our lifesaver. Oh, and here's the cherry on top – FIRE will be the first AI panelist in the MENA region!</p>
                            </div>
                        }  />

                        <TextAnim Styles={{width:'100%',display:"flex",justifyContent:'flex-end',alignItems:'flex-end', backgroundColor: 'black'}} Body={
                            <img style={{width:'150px',display: window.innerWidth>= 750 ? 'none' : 'initial'}} src={FireImg} alt="Fire"/>
                        }  />


                        <TextAnim Styles={{zIndex:'100000000000'}}  Body={
                            <div style={{zIndex:'100000000000'}}> 
                                <p style={{zIndex:'100000000000'}}>FIRE is a total game-changer. Our brilliant team didn't just create a regular machine; they've unleashed a tidal wave of creativity that's all set to redefine the marketing and advertising world. The masterminds behind FIRE combined their boundless innovation with cutting-edge tech to bring this genius into being.</p>
                                <p style={{zIndex:'100000000000'}}>You can catch him in action at the Athar Festival of Creativity in Saudi Arabia, where he's not just the star of the show but a symbol of how innovation is shaping the creative landscape. You absolutely don't want to miss the chance to witness this revolution in action and become a part of a future where creativity and technology come together in the coolest way possible.</p>
                            </div>
                        }  />

            
                            
                    </div>
                </div>
                
                
                <div id='DesktView' style={{height:'100%', width: '50%', display: window.innerWidth<= 750 ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center',zIndex:0}}>
                    <TextAnim  Body={
                            <img style={{marginLeft:'15px',  marginTop: '5px', marginBottom: '5px'}} src={FireImg} alt="Fire"/>
                    }  />
                    
                </div>
                
            </div>
        </div>
    )
}

export default Fire