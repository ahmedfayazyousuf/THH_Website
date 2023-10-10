import React from 'react';
// import contactImg from './../../../1_Assets/Images/Contact/contactImg.avif';

// import experiences from './../../../1_Assets/Images/AboutUs/experiences.jpg';
// import innovations from './../../../1_Assets/Images/AboutUs/innovations.jpg';
// import activations from './../../../1_Assets/Images/AboutUs/activations.jpg';
import Cover from './../../../1_Assets/Images/AboutUs/Cover.jpg';

import TextAnim from '../TextAnim.jsx';


const AboutUs = () => { 
    return (
        <div style={{ width: '100vw', height: '100%', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${Cover}')`}}>
            <div className='mainAbout'>

                <div className='AboutImageDiv'>
                    <TextAnim CN='Experiences' Body={<></>
                        // <h1 className='special' style={{color: '#00f526', fontSize: '20px', marginRight: '8px', marginBottom: '5px'}}>EXPERIENCES</h1>
                    }  />
                    <TextAnim CN='Innovation' Body={<></>
                        // <h1 className='special' style={{color: '#00f526', fontSize: '20px', position: 'sticky', bottom: '0'}}>INNOVATION</h1>
                    }  />
                    <TextAnim CN='Activations' Body={<></>
                        // <h1 className='special' style={{color: '#00f526', fontSize: '20px', marginRight: '8px', marginBottom: '5px'}}>ACTIVATIONS</h1>
                    }  />
                </div>
                

                <div className='AboutTextDiv'>

                    <div className='texttextdiv'>
                        <TextAnim Body={
                        <h1 className='special' style={{marginBottom: '2px'}}>ABOUT <span className='special' style={{color: '#00f526'}}>US</span></h1>
                        }  />

                        <TextAnim Body={
                            <div>
                                <p>The Hanging House is an experiential agency where tech and creativity share the same home. We catalyse powerful human connections through immersive experiences that leave a lasting impression, opening uncharted portals for brands and their audiences.  Our goal is clear: harmonize creativity and technology seamlessly to craft experiences that are disruptive, innovative, and above all, human. At our core, authenticity, creativity, innovation, collaboration, and flawless execution are not mere catchphrases; they're our guiding principles. They dictate our daily actions, navigate our ventures, and fine-tune our approach.</p>
                            </div>
                        }  />
                            

                        {/* <TextAnim Body={
                        <div>
                            <p style={{fontSize: '18px', fontWeight: '900', marginBottom: '2px'}}>We use our imagination</p>
                            <p style={{fontSize: '14px'}}>We’re the radical bunch on the block – a diverse team of storytellers, artists, wordsmiths and designers, untainted by the noise, birthing concepts you may have seen in outer space.</p>
                            <p style={{marginTop: '-10px', fontSize: '14px'}}>Our designs are brought to life by the THH lab wizards – engineers, architects, planners and fabricators putting their heads together, animating the wildest ideas into reality.</p>
                            <p style={{marginTop: '-10px', fontSize: '14px'}}>From ideation to invention, all the magic happens under the same roof.</p>
                        </div>
                        }  />    */}
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default AboutUs