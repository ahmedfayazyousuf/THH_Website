import React, { useState } from 'react';
// import contactImg from './../../../1_Assets/Images/Contact/contactImg.avif';
import { useNavigate } from "react-router-dom";


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
                    <img onClick={()=> navigate("/blogs/1")} src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
                </div>
                <div className="image">
                    <img onClick={()=> navigate("/blogs/2")} src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
                </div>
                <div className="image">
                    <img onClick={()=> navigate("/blogs/3")} src="https://images.unsplash.com/photo-1505178041309-ad46d2e4207b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="img" />
                </div>
                <div className="image">
                    <img onClick={()=> navigate("/blogs/4")} src="https://images.unsplash.com/photo-1497114046243-1154db4f4abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80" alt="img" />
                </div>
                <div className="image">
                    <img onClick={()=> navigate("/blogs/5")} src="https://images.unsplash.com/photo-1573655349936-de6bed86f839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFic3RyYWN0JTIwJTIweWVsbG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>
                <div style={{display:'none'}} className="image batch1">
                    <img onClick={()=> navigate("/blogs/6")} src="https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="img" />
                </div>
                <div style={{display:'none'}}  className="image batch1">
                    <img onClick={()=> navigate("/blogs/7")} src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3QlMjAlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>
                <div style={{display:'none'}}  className="image batch1">
                    <img onClick={()=> navigate("/blogs/8")} src="https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFic3RyYWN0JTIwJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>
                <div style={{display:'none'}}  className="image batch1">
                    <img onClick={()=> navigate("/blogs/9")} src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFic3RyYWN0JTIwJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>
                <div style={{display:'none'}}  className="image batch1">
                    <img onClick={()=> navigate("/blogs/10")} src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3QlMjAlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>

                
            </section>

            <button onClick= {()=> seeMore()} className='buttonDefault' style={{width: '120px', height: '50px',alignSelf:'center'}}>See more</button>


                

                
            </div>
        </div>
    )
}

export default BlogGallery