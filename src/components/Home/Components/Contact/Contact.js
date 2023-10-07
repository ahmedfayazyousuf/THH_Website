import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


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
                </div>

                <div className='contactForm'>
                    <form>
                        <h1 className='special' style={{alignSelf: 'start', fontWeight: '900', color: 'white', fontSize: '35px'}}>GET IN <span className='special' style={{color:'#00F526'}}>TOUCH</span></h1>
                        <p style={{alignSelf: 'start', marginTop: '-12px', color: 'white'}}>Let's turn your ideas into reality. </p>
                        <input className="form-control inputDefault" type="text" name="from_name" id="name" placeholder="Full Name" required/>
                        <input className="form-control inputDefault" type="email" name="from_email" id="email" placeholder="Email Address" required/>
                        <input className="form-control inputDefault" type="text" name="subject" id="subject" placeholder="Subject" required/>
                        <textarea style={{height: '120px'}} className="form-control inputDefault" type="textarea" name="message" id="message" rows='3'placeholder="For us, the answer is Yes. Now, what's your question?" required/>
                        
                        <div>
                            <p id='error' className="error" style={{color:"white", marginBottom: '-17px', fontWeight: '900', fontSize: '11px'}}>snkdnks</p>
                        </div>
                        
                        
                        <button className="buttonDefault" type='submit' onClick={contact}>Submit</button>
                        <div style={{display: 'flex', flexDirection: 'row', width: '98%', background: 'red'}}>
                            <WhatsAppIcon/>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Contact