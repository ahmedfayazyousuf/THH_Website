import React, { useState } from 'react';
// import contactImg from './../../../1_Assets/Images/Contact/contactImg.avif';
import { useNavigate } from "react-router-dom";

import aurdino from '../../../1_Assets/Images/Blogs/landscape images/arduino.png'
import contactless from '../../../1_Assets/Images/Blogs/landscape images/contactless activation.png'
import harness from '../../../1_Assets/Images/Blogs/landscape images/harness brain power.png'
import inside from '../../../1_Assets/Images/Blogs/landscape images/inside the activation.png'
import premier from '../../../1_Assets/Images/Blogs/landscape images/what happens in movie premier.png'

import coachella from '../../../1_Assets/Images/Blogs/portrait images/Coachella.png'
import fitness from '../../../1_Assets/Images/Blogs/portrait images/Power of virtual experiences.png'
import jobs from '../../../1_Assets/Images/Blogs/portrait images/fitness.png'
import power from '../../../1_Assets/Images/Blogs/portrait images/jobs of future.png'
import summer from '../../../1_Assets/Images/Blogs/portrait images/summer activations.png'





const BlogGallery = () => { 

    const navigate = useNavigate();

    const [batch, setBatch] = useState(1)

    function seeMore(){
        const elements = document.querySelectorAll(`.batch${batch}`);

        elements.forEach((element) => {
       
            element.style.display = 'initial'
           
          });

        setBatch(batch + 1)


    }

    return (
        <div style={{height: '100%', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
            <div style={{height: '100%', width: '100vw', marginTop: '-20px', display: 'flex',flexDirection:'column'}}>


            <section className="gallery" style={{background: 'black', overflowY: 'scroll'}}>
                <div className="image">
                    <img onClick={()=> navigate("/blogs/1")} src={coachella} alt="img" />
                </div>
                <div className="image">
                    <img onClick={()=> navigate("/blogs/3")} src={power} alt="img" />
                </div>
                <div className="image">
                    <img onClick={()=> navigate("/blogs/2")} src={contactless} alt="img" />
                </div>

  
                <div className="image">
                    <img onClick={()=> navigate("/blogs/4")} src={jobs} alt="img" />
                </div>
                <div className="image">
                    <img onClick={()=> navigate("/blogs/5")} src={inside} alt="img" />
                </div>
                <div className="image">
                    <img onClick={()=> navigate("/blogs/6")} src={harness} alt="img" />
                </div>
                <div   className="image">
                    <img onClick={()=> navigate("/blogs/7")} src={fitness} alt="img" />
                </div>
                <div  className="image">
                    <img onClick={()=> navigate("/blogs/8")} src="https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFic3RyYWN0JTIwJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>

                <div  className="image">
                    <img onClick={()=> navigate("/blogs/9")} src={premier} alt="img" />
                </div>  
       
                <div className="image ">
                    <img onClick={()=> navigate("/blogs/10")} src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3QlMjAlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>

                
            </section>

            {/* <button onClick= {()=> seeMore()} className='buttonDefault' style={{width: '120px', height: '50px',alignSelf:'center'}}>See more</button> */}


                

                
            </div>
        </div>
    )
}

export default BlogGallery