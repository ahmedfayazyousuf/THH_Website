// import {React} from 'react';
import '../1_Assets/thh.css';
import ContactForm from './Components/Contact/Contact'
import BlogGallery from './Components/BlogGallery/BlogGallery'
import ClientsCarousel from './Components/ClientsCarousel/ClientsCarousel';
import FireSection from './Components/FireSection/FireSection';
import AboutUs from './Components/AboutUs/AboutUs';
import Hero from './Components/Hero/Hero';

import { useMotionValue } from "framer-motion";
import React, { useState, useEffect} from "react";

const Home = () => { 

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    // eslint-disable-next-line
    const springConfig = { damping: 25, stiffness: 700 };

    useEffect(() => {
        // eslint-disable-next-line
        const moveCursor = (e) => {
        cursorX.set(e.clientX - 16)
        cursorY.set(e.clientY - 16)
        };
        // eslint-disable-next-line
    }, [])
    
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
                <ClientsCarousel/>
            </div>
            
            <div style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ContactForm/>
            </div>

            
        </div>
    )
}

export default Home