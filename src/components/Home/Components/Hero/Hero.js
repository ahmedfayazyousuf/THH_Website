import { useMotionValue } from "framer-motion";
import React, { useState, useEffect} from "react";
import '../../../1_Assets/thh.css';
import NissanXTrail from './../../../1_Assets/Images/Projects/NissanXTrail.jpg';
import Geely from './../../../1_Assets/Images/Projects/Geely.jpg';
import Huawei from './../../../1_Assets/Images/Projects/Huawei.jpg';


import NBA from './../../../1_Assets/Images/Projects/NBA.jpg';
import NissanEmployee from './../../../1_Assets/Images/Projects/NissanEmployee.png';
import ArabHealth from './../../../1_Assets/Images/Projects/ArabHealth.jpg';
import AlSerkal from './../../../1_Assets/Images/Projects/AlSerkal.jpg';
import NissanAftersales from './../../../1_Assets/Images/Projects/NissanAftersales.png';
import G42 from './../../../1_Assets/Images/Projects/G42.jpg';
import RTA from './../../../1_Assets/Images/Projects/RTA.jpg';

import { useNavigate } from "react-router-dom";


export default function Hero(){
    const navigate = useNavigate();



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


    useEffect(()=>{
        document.getElementById('next').onclick = function(){
            let lists = document.querySelectorAll('.item');
            document.getElementById('slideHero').appendChild(lists[0]);
        }
        document.getElementById('prev').onclick = function(){
            let lists = document.querySelectorAll('.item');
            document.getElementById('slideHero').prepend(lists[lists.length - 1]);
        }
          
    },[])


    const [isHovering, setIsHovering] = useState(false);

    // Event handler for when the mouse enters the div
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    // Event handler for when the mouse leaves the div
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // Style object to conditionally set the width and height
    // eslint-disable-next-line
    const cursorStyle = {
        width: isHovering ? '60px' : '30px',
        height: isHovering ? '60px' : '30px',
    };

    return(
        <div style={{background: 'grey', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center',position:'relative', padding: '0', margin: '0'}}>


            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000',width: isHovering ? '60px' : '30px',height: isHovering ? '60px' : '30px', transition: isHovering ? 'width 0.5s, height 0.5s' : 'width 0.5s, height 0.5s'}} />

            <div id="slideHero">
                <div class="item" style={{backgroundImage: `url('${NissanXTrail}')`}}>
                <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}>
                        <div class="name">Nissan Al Rostamani – X-Trail Launch 2023</div>
                        <div class="des">A Thrilling X-Pedition into the Unknown</div>
                        <button className='buttonDefault' onClick= {()=> navigate("/projects/1")} style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Geely}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}>
                        <div class="name HoverCursor">GEELY AGMC – UAE Showroom Launch 2023</div>
                        <div class="des">Navigating the Future of Mobility</div>
                        <button onClick= {()=> navigate("/projects/2")} className='buttonDefault' style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Huawei}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}>
                        <div class="name">Huawei – Comic Con 2023</div>
                        <div class="des">Encouraging Business Innovations</div>
                        <button onClick= {()=> navigate("/projects/3")} className='buttonDefault' style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${NBA}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">NBA2KL – Comic Con 2023</div>
                        <div class="des">Welcome to Swish City</div>
                        <button onClick= {()=> navigate("/projects/4")} className='buttonDefault' style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${NissanEmployee}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">Nissan Middle East FZE – Employee Event</div>
                        <div class="des">Explore More, Together</div>
                        <button onClick= {()=> navigate("/projects/5")} className='buttonDefault' style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${ArabHealth}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">American Hospital – Arab Health 2023</div>
                        <div class="des">Bringing Evolution in Motion</div>
                        <button onClick= {()=> navigate("/projects/6")} className='buttonDefault' style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${AlSerkal}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">Al Serkal Avenue – Quoz Arts Fest</div>
                        <div class="des">A Celebration of Color & Connection </div>
                        <button onClick= {()=> navigate("/projects/7")} className='buttonDefault' style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${NissanAftersales}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">Nissan Middle East FZE – Aftersales Conference</div>
                        <div class="des">A Comprehensive Conference</div>
                        <button onClick= {()=> navigate("/projects/8")} className='buttonDefault' style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${G42}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">G42 at Gitex 2022</div>
                        <div class="des">Discover Limitless</div>
                        <button onClick= {()=> navigate("/projects/9")} className='buttonDefault' style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${RTA}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">Roads & Transport Authority at Project AB</div>
                        <div class="des">Expanding Horizons</div>
                        <button onClick= {()=> navigate("/projects/10")} className='buttonDefault' style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
            </div>
            
            <div class="buttons" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button id="prev" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><i style={{color: '#00f526'}} class="fa-solid fa-angle-left arrows"></i></button>
                <button id="next" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><i style={{color: '#00f526'}} class="fa-solid fa-angle-right arrows"></i></button>
            </div>

        </div>


    )
}