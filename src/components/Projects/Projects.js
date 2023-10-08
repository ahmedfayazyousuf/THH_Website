import {React, useEffect, useState} from 'react';
import '../1_Assets/thh.css';
import img1 from '../1_Assets/Images/Projects/AlSerkal.jpg'
import img2 from '../1_Assets/Images/Projects/ArabHealth.jpg'
import img3 from '../1_Assets/Images/Projects/G42.jpg'
import $ from 'jquery'

const Projects = () => { 


    const [images, setImages] = useState([img1,img2,img3])

    
      useEffect(() => {

        $('#root').on('scroll', function () {
            console.log('scolll')
            // console.log($("#divs"))
            $("#divs").stop().animate({
              "marginTop": ($('body').scrollTop()) + "px",
              "marginLeft": ($('body').scrollLeft()) + "px"
            }, "slow");
          });
    },[])


    

    return (
        <div id='main' style={{width: '100vw', height: '100%', display:'flex',justifyContent:'center',alignItems:"center",background:"black"}}>

            

            <div style={{background: 'grey', height: '100%', width: '90%', marginTop:'120px',display:'flex', justifyContent: 'center', alignItems: 'center',background:"black"}}>
                
                <div style={{display:'flex', flexDirection:'column', flex:'60%'}}> 
                    {images.map((image, index) => (
                        <img key={index} src={image} width={700} style={{marginBottom:'40px'}} alt={`Image ${index}`} />
                    ))}
                </div>

                <div    style={{flex:'40%',height:'100%',display:'flex',alignSelf:'flex-start'}}>

                    <div id='divs'  style={{background:'red'}}>
                        <h1>TITLE</h1>

                        <div style={{margin: '5px 0'}}>
                            <p>The Quoz Arts Fest brought together artists and art lovers from all over the city for a celebration of creativity and community. Amidst the vibrant displays of paintings, sculptures, and installations, two activations stood out as truly unique and unforgettable experiences.</p>
                            <p>&nbsp;</p>
                            <p>The first activation was &ldquo;The World in Technicolor,&rdquo; a colorful maze that transported visitors back in time while also inspiring hope for a bright future. The second activation, &ldquo;Stranger Flings&rdquo;, is a portal that allowed festival-goers to communicate with others from another area of the festival, was truly out-of-the-box. This innovative idea brought people together, creating a sense of community in a fun and unique way.</p>
                            <p>&nbsp;</p>
                            <p>The combination of art, technology, and human connection made the festival truly special, and visitors left with a renewed appreciation for the power of creativity and community.</p>
                            <p>&nbsp;</p>
                            <p><strong>Stats:</strong></p>
                            <ul>
                                <li><strong>30k+ people shifted away</strong></li>
                                <li><strong>2 interactive art installations</strong></li>
                                <li><strong>30 days from ideation to execution</strong></li>
                                <li><strong>2-day event</strong></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

           
            
        </div>
    )
}

export default Projects