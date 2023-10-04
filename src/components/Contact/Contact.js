// import { useEffect } from "react";
import React from 'react';
// import { NavLink } from 'react-router-dom';
import contactImg from '../1_Assets/Images/contactImg.avif';

const Error = () => { 

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
        <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '90%', width: '90%', backgroundColor: 'white', marginTop: '-20px', display: 'flex'}}>


                <div style={{height:'100%', width: '50%', backgroundSize: 'cover', backgroundImage: `url('${contactImg}')`, border: '0.5px solid transparent'}}>

                </div>
                
                
                <div style={{height:'100%', width: '50%', backgroundColor: 'black', border: '0.5px solid #00F526', borderLeft: 'none'}}>

                {/* <form ref={form} className='contactdiv' onSubmit={sendEmail} style={{}}> */}
                <form className='contactdiv'>
                    <h1 style={{alignSelf: 'start', fontWeight: '900', color: 'white', fontSize: '35px'}}>Contact</h1>
                    <p style={{alignSelf: 'start', marginTop: '-12px', color: 'white'}}>Let's turn your ideas into reality. </p>
                    <input style={{border: '0.5px solid #00F526', margin: '5px', borderRadius: '0', color: 'white', backgroundColor: 'transparent'}} className="form-control" type="text" name="from_name" id="name" placeholder="Full Name" required/>
                    <input style={{border: '0.5px solid #00F526', margin: '5px', borderRadius: '0', color: 'white', backgroundColor: 'transparent'}} className="form-control" type="email" name="from_email" id="email" placeholder="Email Address" required/>
                    <input style={{border: '0.5px solid #00F526', margin: '5px', borderRadius: '0', color: 'white', backgroundColor: 'transparent'}} className="form-control" type="text" name="subject" id="subject" placeholder="Subject" required/>
                    <textarea className="form-control" type="textarea" name="message" id="message" rows='3'placeholder="For us, the answer is Yes. Now, what's your question?" required style={{border: '0.5px solid white', height: '115px', marginBottom: '0px', borderRadius:' 0', color: '#00F526', backgroundColor: 'transparent'}}/>
                    
                    <div>
                        <p id='error' className="error" style={{color:"white", marginBottom: '-17px', fontWeight: '900', fontSize: '11px'}}></p>
                    </div>
                    
                    <button className="bookacall2" type='submit' style={{marginTop: '20px'}} onClick={contact}>Submit</button>
                </form>


                </div>

                
            </div>
        </div>
    )
}

export default Error