import {React,useEffect} from 'react';
import '../../../1_Assets/thh.css';
import NissanXTrail from './../../../1_Assets/Images/Projects/NissanXTrail.jpg';
import Geely from './../../../1_Assets/Images/Projects/Geely.jpg';

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
                    <div class="content">
                        <div class="name">Nissan Al Rostamani – X-Trail Launch 2023</div>
                        <div class="des">A Thrilling X-Pedition into the Unknown</div>
                        <button>See more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Geely}')`}}>
                    <div class="content">
                        <div class="name">GEELY X AGMC – UAE Showroom Launch 2023</div>
                        <div class="des">Navigating the Future of Mobility</div>
                        <button>See more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${NissanXTrail}')`}}>
                    <div class="content">
                        <div class="name">LUNDEV</div>
                        <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${NissanXTrail}')`}}>
                    <div class="content">
                        <div class="name">LUNDEV</div>
                        <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${NissanXTrail}')`}}>
                    <div class="content">
                        <div class="name">LUNDEV</div>
                        <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${NissanXTrail}')`}}>
                    <div class="content">
                        <div class="name">LUNDEV</div>
                        <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
            </div>

            <div class="buttons">
                <button id="prev"><i class="fa-solid fa-angle-left"></i></button>
                <button id="next"><i class="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    )
}