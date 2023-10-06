import React, { } from 'react';
// import contactImg from './../../../1_Assets/Images/Contact/contactImg.avif';
import './styles.css'

const BlogGallery = () => { 

    // const cursor = document.getElementById("cursor");

    // const animateCursor = (e, interacting) => {
    // const x = e.clientX - cursor.offsetWidth / 2,
    //         y = e.clientY - cursor.offsetHeight / 2;
    
    // const keyframes = {
    //     transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
    // }

    // useEffect(() => {
    //     cursor.animate(keyframes, { 
    //         duration: 800, 
    //         fill: "forwards" 
    //     });
    // }, [])


    // useEffect(() => {

    //     const getCursorClass = type => {
    //     switch(type) {
    //         case "video":
    //         return "play";
    //         case "image":
    //         return "fa-solid fa-pause";
    //         default:
    //         return "fa-solid fa-arrow-up-right"; 
    //     }
    //     }
    // }, [])

    // window.onmousemove = e => {
    // const interactable = e.target.closest(".interactable"),
    //         interacting = interactable !== null;
    
    // const icon = document.getElementById("cursor-icon");
    
    // animateCursor(e, interacting);
    
    // cursor.dataset.type = interacting ? interactable.dataset.type : "";
    
    // if(interacting) {
    //     icon.className = getCursorClass(interactable.dataset.type);
    // }
    // } // eslint-disable-next-line
    // };

    

    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
            <div style={{height: '90%', width: '90%', backgroundColor: 'white', marginTop: '-20px', display: 'flex'}}>
            <div id="cursor"><i id="cursor-icon" class="fa-solid fa-arrow-up-right"></i></div>


            <section className="gallery" style={{background: 'black', overflowY: 'scroll'}}>
                <div className="image interactable" data-type="image">
                    <img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
                </div>
                <div className="image interactable" data-type="image">
                    <img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
                </div>
                <div className="image interactable" data-type="image">
                    <img src="https://images.unsplash.com/photo-1505178041309-ad46d2e4207b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="img" />
                </div>
                <div className="image interactable" data-type="image">
                    <img src="https://images.unsplash.com/photo-1497114046243-1154db4f4abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80" alt="img" />
                </div>
                <div className="image interactable" data-type="image">
                    <img src="https://images.unsplash.com/photo-1573655349936-de6bed86f839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFic3RyYWN0JTIwJTIweWVsbG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>
                <div className="image interactable" data-type="image">
                    <img src="https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="img" />
                </div>
                <div className="image interactable" data-type="image">
                    <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3QlMjAlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>
                <div className="image interactable" data-type="image">
                    <img src="https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFic3RyYWN0JTIwJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>
                <div className="image interactable" data-type="image">
                    <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFic3RyYWN0JTIwJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>

                
            </section>


                

                
            </div>
        </div>
    )
}

export default BlogGallery