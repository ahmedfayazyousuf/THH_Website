import React from 'react';
import TextAnim from '../TextAnim.jsx';
// import maps from './../../../1_Assets/Images/Contact/Maps.png';

const Contact = () => { 
    // GOOGLE MAPS START 
    // const mapContainerStyle = {
    //     width: '400px',
    //     height: '400px',
    //   };
    
    //   const center = {
    //     lat: 24.967260, // Default latitude
    //     lng: 55.194097, // Default longitude
    //   };
    //   GOOGLE MAPS END

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
            document.getElementsByClassName("error")[0].style.color = 'yellow';
            document.getElementById('error').innerHTML = "Success! We will get back to you soon!";
        }
        
    }

    const handleSubmit = (event) => {
        // Prevent the default form submission behavior, which refreshes the page
        event.preventDefault();

        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('subject').value = ""
        document.getElementById('message').value = ""

    
        // You can access form data from the 'formData' state
        // Perform your form processing or API call here
    
        // For example, you can log the form data
        // console.log(formData);
      };
    

    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px', marginBottom: '100px'}}>
            <div style={{height: '90%', width: '90%', backgroundColor: 'white',display: 'flex'}}>

                <div className='HideContactImg'>
                    <div className='HideContactImg2' style={{height: '100%', width: '100%', opacity: '0.4'}}>
                    </div>
                </div>

                <div className='contactForm'>
                    <form onSubmit={handleSubmit}>

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



                        <p id='error' className='error' style={{color: 'red', width: '100%',marginBottom:'-1px', textAlign: 'center', fontSize: '12px', marginTop: '-7px', height: '15px'}}> </p>
                       
                        
                        

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

                                <a target="_blank" className='ContactPackSocials' href='https://maps.app.goo.gl/oDoPDHVSqJ2Z53Ja9'>
                                   
                                </a>
                                
                                
                                {/* <div class="hover-effect4">
                                    <LoadScript googleMapsApiKey="AIzaSyCiN_ddGa10P6ri5gS4K3wU8uXHsoRNIbM">
                                        <GoogleMap
                                            mapContainerStyle={mapContainerStyle}
                                            center={center}
                                            zoom={10} // Adjust the initial zoom level as needed
                                        >
                                            <Marker
                                            position={center}
                                            />
                                        </GoogleMap>
                                    </LoadScript>
                                </div> */}
                            </div>
                        }  />
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Contact