import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import EmailIcon from '@mui/icons-material/Email';
// import Mobile from './../../../1_Assets/Images/Contact/makesvg.svg';
import TextAnim from '../TextAnim.jsx';

const Contact = () => { 

    function contact (){
        const Name = document.getElementById('name').value
        const Email = document.getElementById('email').value
        const Subject = document.getElementById('subject').value
        const Content = document.getElementById('message').value

        if(Name === ''){
            // buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "Please enter your name"
            return;
        }

        var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (Email === "" || !Email.match(validRegex))
        {
            document.getElementById('error').innerHTML = "Please enter a valid email"
            return;
        }

        if(Subject === ''){
            // buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "Please enter a subject"
            return;
        }

        if(Content === ''){
            // buttonRef.current.disabled = false;
            document.getElementsByClassName('error').innerHTML = "Please type your message"
            return;
        }

        else{
            // firebase.firestore().collection('Users').add({
            //     Name:Name,
            //     Email:Email,
            //     Subject:Subject,
            //     Message:Content
            // })
            // document.getElementById('error').innerHTML.style.color = 'green';
            document.getElementsByClassName("error")[0].style.color = 'green';
            document.getElementById('error').innerHTML = "Success! We will get back to you soon!";
        }
        
    }

    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
            <div style={{height: '90%', width: '90%', backgroundColor: 'white', marginTop: '-20px', display: 'flex'}}>

                <div className='HideContactImg'>
                    <div className='HideContactImg2' style={{height: '100%', width: '100%', opacity: '0.4'}}>
                    </div>
                </div>

                <div className='contactForm'>
                    <form>

                    <TextAnim  Body={
                            <div > 
                               <h1 className='special' style={{alignSelf: 'start', fontWeight: '900', color: 'white', fontSize: '35px'}}>GET IN <span className='special' style={{color:'#00F526'}}>TOUCH</span></h1>
                            </div>
                        }  />

                    <TextAnim Styles={{marginTop: '-12px'}} Body={
                            <div > 
                        <p style={{  color: 'white'}}>Let's turn your ideas into reality. </p>
                            </div>
                        }  />
                        
                        <TextAnim  Body={
                            <div > 
                        <input className="form-control inputDefault" type="text" name="from_name" id="name" placeholder="Full Name" required/>
                            </div>
                        }  />

                        <TextAnim  Body={
                            <div > 
                        <input className="form-control inputDefault" type="email" name="from_email" id="email" placeholder="Email Address" required/>
                            </div>
                        }  />

                        <TextAnim  Body={
                            <div > 
                        <input className="form-control inputDefault" type="text" name="subject" id="subject" placeholder="Subject" required/>
                            </div>
                        }  />

                        <TextAnim  Body={
                            <div > 
                        <textarea style={{height: '90px'}} className="form-control inputDefault" type="textarea" name="message" id="message" rows='3'placeholder="For us, the answer is Yes. Now, what's your question?" required/>
                            </div>
                        }  />



                        
                        <div>
                            <p id='error' className="error" style={{color:"white", marginBottom: '-17px', fontWeight: '900', fontSize: '11px'}}></p>
                        </div>
                        
                        

                        <TextAnim  Body={
                            <div > 
                                <button className="buttonDefault" type='submit' onClick={contact}>Submit</button>                            
                            </div>
                        }  />

                        <TextAnim  Body={
                            <div className='BelowContactPack'>
                            <div className='ContactPackText'>
                                <p style={{fontSize: '12px', marginTop: '10px'}}>UAE: +971 4 236 8844 | KSA: +966 56 365 5835</p>
                                <p style={{marginTop: '-19px', fontSize: '10px', color: '#00f526', marginBottom: '5px'}}>No ridiculously long phone menu – promise!</p>

                                <p style={{fontSize: '12px'}}>welcome<span style={{fontFamily: 'sans-serif, Montserrat', fontSize: '10px'}}>@</span>thehanginghouse.com</p>
                                <p style={{marginTop: '-19px', fontSize: '10px', color: '#00f526', marginBottom: '5px'}}>It won’t end up in an inbox abyss</p>

                                <p style={{fontSize: '12px'}}>Office 4, Span Precast Compound, Dubai Investment Park 2, Dubai, UAE</p>
                                <p style={{marginTop: '-19px', fontSize: '10px', color: '#00f526', marginBottom: '5px'}}>Where the house hangs</p>

                                <p style={{fontSize: '12px'}}>joinus<span style={{fontFamily: 'sans-serif, Montserrat', fontSize: '10px'}}>@</span>thehanginghouse.com</p>
                                <p style={{marginTop: '-19px', fontSize: '10px', color: '#00f526', marginBottom: '5px'}}>To become a part of the house!</p>

                                <p style={{fontSize: '12px'}}>procurement<span style={{fontFamily: 'sans-serif, Montserrat', fontSize: '10px'}}>@</span>thehanginghouse.com</p>
                                <p style={{marginTop: '-19px', fontSize: '10px', color: '#00f526', marginBottom: '5px'}}>To register as a vendor and receive RFQ's</p>
                            </div>


                            <div class="hover-effect4 ContactPackSocials">
                                <ul>
                                    <li><a href="#." style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#." style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Twitter"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#." style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Google Plus"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="#." style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Youtube"><i class="fa fa-youtube"></i></a></li>
                                    <li><a href="#." style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Vimeo"><i class="fa fa-vimeo"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        }  />
                       

                        

                        



                        <div style={{backgroundColor: 'white', color: ''}}>

                        </div>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Contact