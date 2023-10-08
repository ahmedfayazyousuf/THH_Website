import {React,useEffect} from 'react';
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


export default function Hero(){
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
    return(
        <div style={{background: 'grey', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center',position:'relative'}}>
            <div id="slideHero">
                <div class="item" style={{backgroundImage: `url('${NissanXTrail}')`}}>
                    <div class="content" style={{zIndex:'1000000000000000'}}>
                        <div class="name">Nissan Al Rostamani – X-Trail Launch 2023</div>
                        <div class="des">A Thrilling X-Pedition into the Unknown</div>
                        <button className='buttonDefault' style={{width: '200px', height: '60px'}} >Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Geely}')`}}>
                    <div class="content" style={{zIndex:'1000000000000000'}}>
                        <div class="name">GEELY X AGMC – UAE Showroom Launch 2023</div>
                        <div class="des">Navigating the Future of Mobility</div>
                        <button className='buttonDefault' style={{width: '120px', height: '50px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Huawei}')`}}>
                    <div class="content" style={{zIndex:'1000000000000000'}}>
                        <div class="name">Huawei – Comic Con 2023</div>
                        <div class="des">Encouraging Business Innovations</div>
                        <button className='buttonDefault' style={{width: '200px', height: '60px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${NBA}')`}}>
                    <div class="content" style={{zIndex:'1000000000000000'}}> 
                        <div class="name">NBA2KL – Comic Con 2023</div>
                        <div class="des">Welcome to Swish City</div>
                        <button className='buttonDefault' style={{width: '200px', height: '60px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${NissanEmployee}')`}}>
                    <div class="content" style={{zIndex:'1000000000000000'}}> 
                        <div class="name">Nissan Middle East FZE – Employee Event</div>
                        <div class="des">Explore More, Together</div>
                        <button className='buttonDefault' style={{width: '200px', height: '60px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${ArabHealth}')`}}>
                    <div class="content" style={{zIndex:'1000000000000000'}}> 
                        <div class="name">American Hospital – Arab Health 2023</div>
                        <div class="des">Bringing Evolution in Motion</div>
                        <button className='buttonDefault' style={{width: '200px', height: '60px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${AlSerkal}')`}}>
                    <div class="content" style={{zIndex:'1000000000000000'}}> 
                        <div class="name">Al Serkal Avenue – Quoz Arts Fest</div>
                        <div class="des">A Celebration of Color & Connection </div>
                        <button className='buttonDefault' style={{width: '200px', height: '60px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${NissanAftersales}')`}}>
                    <div class="content" style={{zIndex:'1000000000000000'}}> 
                        <div class="name">Nissan Middle East FZE – Aftersales Conference</div>
                        <div class="des">A Comprehensive Conference</div>
                        <button className='buttonDefault' style={{width: '200px', height: '60px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${G42}')`}}>
                    <div class="content" style={{zIndex:'1000000000000000'}}> 
                        <div class="name">G42 at Gitex 2022</div>
                        <div class="des">Discover Limitless</div>
                        <button className='buttonDefault' style={{width: '200px', height: '60px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${RTA}')`}}>
                    <div class="content" style={{zIndex:'1000000000000000'}}> 
                        <div class="name">Roads & Transport Authority at Project AB</div>
                        <div class="des">Expanding Horizons</div>
                        <button className='buttonDefault' style={{width: '200px', height: '60px'}}>Read more</button>
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