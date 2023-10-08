import React from 'react';
// import contactImg from './../../../1_Assets/Images/Contact/contactImg.avif';

import experiences from './../../../1_Assets/Images/AboutUs/experiences.jpg';
import innovations from './../../../1_Assets/Images/AboutUs/innovations.jpg';
import activations from './../../../1_Assets/Images/AboutUs/activations.jpg';
import Cover from './../../../1_Assets/Images/AboutUs/Cover.jpg';

import TextAnim from '../TextAnim.jsx';


const AboutUs = () => { 
    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${Cover}')`}}>
            <div style={{height: '90%', width: '100%', marginTop: '-20px', display: 'flex'}}>

                <div style={{display: 'flex', width: '50%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <TextAnim  Styles={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${experiences}')`, height: '270px', width: '220px', marginBottom: '-30px', marginLeft: '300px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}} Body={
                        <h1 className='special' style={{color: '#00f526', fontSize: '20px', marginRight: '8px', marginBottom: '5px'}}>EXPERIENCES</h1>
                    }  />
                    <TextAnim  Styles={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${innovations}')`, height: '200px', width: '300px', marginLeft: '-120px'}} Body={
                        <h1 className='special' style={{color: '#00f526', fontSize: '20px', position: 'sticky', bottom: '0'}}>INNOVATION</h1>
                    }  />
                    <TextAnim Styles={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${activations}')`, height: '200px', width: '300px', marginTop: '-20px', marginLeft: '80px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}} Body={
                        <h1 className='special' style={{color: '#00f526', fontSize: '20px', marginRight: '8px', marginBottom: '5px'}}>ACTIVATIONS</h1>
                    }  />      
                </div>
                

                <div style={{display: 'flex', width: '50%', alignItems: 'center'}}>

                    <div style={{display: 'flex', width: '70%',flexDirection: 'column', padding: '20px'}}>

                    <TextAnim Body={
                       <h1 className='special' style={{marginBottom: '20px'}}>ABOUT <span className='special' style={{color: '#00f526'}}>US</span></h1>
                    }  />

                    <TextAnim Body={
                        <div>
                            <p style={{fontSize: '18px', fontWeight: '900', marginBottom: '2px'}}>Experiential: Like never before</p>
                            <p style={{fontSize: '14px'}}>The Hanging House is everything experiential. We take creative action and prope audiences into a speechless affair. We bring your brand home, sparking trust, meaning, and change; Blending novelty and precision to transform moments into memories.</p>
                            <p style={{marginTop: '-10px', marginBottom: '15px', fontSize: '14px'}}>Whether it’s through live activations, or virtual solutions, we tell solutions, we tell stories through the power of human interaction.</p>
                        </div>
                    }  />
                        

                        <TextAnim Body={
                        <div>
                            <p style={{fontSize: '18px', fontWeight: '900', marginBottom: '2px'}}>We use our imagination</p>
                            <p style={{fontSize: '14px'}}>We’re the radical bunch on the block – a diverse team of storytellers, artists, wordsmiths and designers, untainted by the noise, birthing concepts you may have seen in outer space.</p>
                            <p style={{marginTop: '-10px', fontSize: '14px'}}>Our designs are brought to life by the THH lab wizards – engineers, architects, planners and fabricators putting their heads together, animating the wildest ideas into reality.</p>
                            <p style={{marginTop: '-10px', fontSize: '14px'}}>From ideation to invention, all the magic happens under the same roof.</p>
                        </div>
                        }  />   
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default AboutUs