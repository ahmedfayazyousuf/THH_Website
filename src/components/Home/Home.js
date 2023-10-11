// import {React} from 'react';
import '../1_Assets/thh.css';
import ContactForm from './Components/Contact/Contact'
import BlogGallery from './Components/BlogGallery/BlogGallery'
import Team from './Components/Team/Team'
import ClientsCarousel from './Components/ClientsCarousel/ClientsCarousel';
import FireSection from './Components/FireSection/FireSection';
import AboutUs from './Components/AboutUs/AboutUs';
import Hero from './Components/Hero/Hero';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { useMotionValue } from "framer-motion";
import React, { useState, useEffect} from "react";

const Home = () => { 

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    // eslint-disable-next-line
    const springConfig = { damping: 25, stiffness: 700 };
    // GOOGLE MAPS START 
    const mapContainerStyle = {
        width: '400px',
        height: '400px',
      };
    
      const center = {
        lat: 24.967260, // Default latitude
        lng: 55.194097, // Default longitude
      };
    //   GOOGLE MAPS END

    useEffect(() => {
        // eslint-disable-next-line
        const moveCursor = (e) => {
        cursorX.set(e.clientX - 16)
        cursorY.set(e.clientY - 16)
        };
        // eslint-disable-next-line
    }, [])
    // eslint-disable-next-line
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    
    useEffect(() => {
        const moveCursor = (e) => {
            const x = e.clientX - 16
            const y = e.clientY - 16
            setCursorXY({ x, y })
        }

        window.addEventListener('mousemove', moveCursor)
        return () => {
        window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <div style={{width: '100vw', height: '100%'}}>

            {/* <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000',}} /> */}

            <div style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Hero />
            </div>

            <div style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <AboutUs />
            </div>

            <div style={{background: 'RED', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <FireSection />
            </div>

            <div style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <BlogGallery/>
            </div>

            <div style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Team/>
            </div>

            <div style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ClientsCarousel/>
            </div>
            
            <div style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ContactForm/>
            </div>

            <div class="hover-effect4">
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
            </div>

            <div class="hover-effect4" style={{position: 'fixed', bottom: '0', right: '0', display: 'flex', flexDirection: 'column', marginRight: '10px', zIndex: '10000000'}}>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.facebook.com/thehanginghouse" target='_blank'  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Facebook"><i class="fa fa-facebook"></i></a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://twitter.com/thehanginghouse" target='_blank' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Twitter"><i class="fa fa-twitter"></i></a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.instagram.com/thehanginghouse/" target='_blank' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Instagram"><i class="fa fa-instagram"></i></a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.youtube.com/@thehanginghouse8082" target='_blank' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Youtube"><i class="fa fa-youtube"></i></a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.linkedin.com/company/thehanginghouse" target='_blank' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="LinkedIn"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>

            
        </div>
    )
}

export default Home