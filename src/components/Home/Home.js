import {React} from 'react';
import '../1_Assets/thh.css';
import ContactForm from './Components/Contact/Contact'
import BlogGallery from './Components/BlogGallery/BlogGallery'
import ClientsCarousel from './Components/ClientsCarousel/ClientsCarousel';
import FireSection from './Components/FireSection/FireSection';
import AboutUs from './Components/AboutUs/AboutUs';
import Hero from './Components/Hero/Hero';

const Home = () => { 

    return (
        <div style={{width: '100vw', height: '100%'}}>

            

            <div style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Hero />
            </div>

            <div style={{background: 'black', height: '700px', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
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