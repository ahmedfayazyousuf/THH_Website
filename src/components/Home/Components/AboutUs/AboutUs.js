import React from 'react';
import contactImg from './../../../1_Assets/Images/Contact/contactImg.avif';

import experiences from './../../../1_Assets/Images/AboutUs/experiences.jpg';
import innovations from './../../../1_Assets/Images/AboutUs/innovations.jpg';
import activations from './../../../1_Assets/Images/AboutUs/activations.jpg';


const AboutUs = () => { 
    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
            <div style={{height: '90%', width: '100%', backgroundColor: 'grey', marginTop: '-20px', display: 'flex'}}>

                <div style={{display: 'flex', width: '50%', background: 'black', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${experiences}')`, height: '270px', width: '220px', marginBottom: '-30px', marginLeft: '300px'}}></div>
                    <div style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${innovations}')`, height: '200px', width: '300px', marginLeft: '-120px'}}></div>
                    <div style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${activations}')`, height: '200px', width: '300px', marginTop: '-20px', marginLeft: '80px'}}></div>

                </div>

                <div style={{display: 'flex', width: '50%', background: 'black', alignItems: 'center'}}>

                    <div style={{display: 'flex', background: 'black', width: '70%',flexDirection: 'column'}}>
                        <h1 className='special' style={{marginBottom: '20px'}}>ABOUT <span className='special' style={{color: '#00f526'}}>US</span></h1>

                        <p style={{fontSize: '18px', fontWeight: '900', marginBottom: '2px'}}>Experiential: Like never before</p>
                        <p style={{fontSize: '14px'}}>The Hanging House is everything experiential. We take creative action and prope audiences into a speechless affair. We bring your brand home, sparking trust, meaning, and change; Blending novelty and precision to transform moments into memories.</p>
                        <p style={{marginTop: '-10px', marginBottom: '15px', fontSize: '14px'}}>Whether it’s through live activations, or virtual solutions, we tell solutions, we tell stories through the power of human interaction.</p>

                        <p style={{fontSize: '18px', fontWeight: '900', marginBottom: '2px'}}>We use our imagination</p>
                        <p style={{fontSize: '14px'}}>We’re the radical bunch on the block – a diverse team of storytellers, artists, wordsmiths and designers, untainted by the noise, birthing concepts you may have seen in outer space.</p>
                        <p style={{marginTop: '-10px', fontSize: '14px'}}>Our designs are brought to life by the THH lab wizards – engineers, architects, planners and fabricators putting their heads together, animating the wildest ideas into reality.</p>
                        <p style={{marginTop: '-10px', fontSize: '14px'}}>From ideation to invention, all the magic happens under the same roof.</p>
                    
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default AboutUs