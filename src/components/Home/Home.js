import {React, useEffect} from 'react';
import '../1_Assets/thh.css';
import ContactForm from './Components/Contact/Contact'
import BlogGallery from './Components/BlogGallery/BlogGallery'
import ClientsCarousel from './Components/ClientsCarousel/ClientsCarousel';
import FireSection from './Components/FireSection/FireSection';
import Hero from './Components/Hero/Hero';

const Home = () => { 

    useEffect(()=>{
        const cursor = document.getElementById("cursor");

        const animateCursor = (e, interacting) => {
          const x = e.clientX - cursor.offsetWidth / 2,
                y = e.clientY - cursor.offsetHeight / 2;
          
          const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
          }
          
          cursor.animate(keyframes, { 
            duration: 800, 
            fill: "forwards" 
          });
        }
        
        const getCursorClass = type => {
          switch(type) {
            case "video":
              return "play";
              case "image":
              return "fa-solid fa-pause";
            default:
              return "fa-solid fa-arrow-up-right"; 
          }
        }
        
        window.onmousemove = e => {
          const interactable = e.target.closest(".interactable"),
                interacting = interactable !== null;
          
          const icon = document.getElementById("cursor-icon");
          
          animateCursor(e, interacting);
          
          cursor.dataset.type = interacting ? interactable.dataset.type : "";
          
          if(interacting) {
            icon.className = getCursorClass(interactable.dataset.type);
          }
        }
    },[])

    return (
        <div style={{width: '100vw', height: '100%'}}>
            <div id="cursor">
                <i id="cursor-icon" class="fa-solid fa-arrow-up-right"></i>
            </div>
            <div style={{background: 'grey', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Hero />
            </div>

            <div style={{background: 'lightblue', height: '700px', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 >About</h1>
            </div>

            <div style={{background: 'RED', height: '700px', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <FireSection />
            </div>

            <div style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <BlogGallery/>
            </div>

            <div style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ClientsCarousel/>
            </div>
            
            <div style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ContactForm/>
            </div>
        </div>
    )
}

export default Home