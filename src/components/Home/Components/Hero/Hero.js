import {React,useEffect} from 'react';
import '../../../1_Assets/thh.css'

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
        <div style={{background: 'grey', height: '700px', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center',position:'relative'}}>
        <div id="slideHero">
                <div class="item" style={{backgroundImage: "url('https://get.wallhere.com/photo/landscape-sunset-hill-nature-sunrise-evening-morning-wilderness-dusk-New-Zealand-plateau-cloud-autumn-mountain-flower-dawn-grassland-meadow-wildflower-prairie-3840x2160-px-mountainous-landforms-geographical-feature-mountain-range-556254.jpg')"}}>
                    <div class="content">
                        <div class="name">LUNDEV</div>
                        <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: "url('https://get.wallhere.com/photo/landscape-sunset-hill-nature-sunrise-evening-morning-wilderness-dusk-New-Zealand-plateau-cloud-autumn-mountain-flower-dawn-grassland-meadow-wildflower-prairie-3840x2160-px-mountainous-landforms-geographical-feature-mountain-range-556254.jpg')"}}>
                    <div class="content">
                        <div class="name">LUNDEV</div>
                        <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: "url('https://get.wallhere.com/photo/landscape-sunset-hill-nature-sunrise-evening-morning-wilderness-dusk-New-Zealand-plateau-cloud-autumn-mountain-flower-dawn-grassland-meadow-wildflower-prairie-3840x2160-px-mountainous-landforms-geographical-feature-mountain-range-556254.jpg')"}}>
                    <div class="content">
                        <div class="name">LUNDEV</div>
                        <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: "url('https://get.wallhere.com/photo/landscape-sunset-hill-nature-sunrise-evening-morning-wilderness-dusk-New-Zealand-plateau-cloud-autumn-mountain-flower-dawn-grassland-meadow-wildflower-prairie-3840x2160-px-mountainous-landforms-geographical-feature-mountain-range-556254.jpg')"}}>
                    <div class="content">
                        <div class="name">LUNDEV</div>
                        <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: "url('https://get.wallhere.com/photo/landscape-sunset-hill-nature-sunrise-evening-morning-wilderness-dusk-New-Zealand-plateau-cloud-autumn-mountain-flower-dawn-grassland-meadow-wildflower-prairie-3840x2160-px-mountainous-landforms-geographical-feature-mountain-range-556254.jpg')"}}>
                    <div class="content">
                        <div class="name">LUNDEV</div>
                        <div class="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                        <button>See more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: "url('https://get.wallhere.com/photo/landscape-sunset-hill-nature-sunrise-evening-morning-wilderness-dusk-New-Zealand-plateau-cloud-autumn-mountain-flower-dawn-grassland-meadow-wildflower-prairie-3840x2160-px-mountainous-landforms-geographical-feature-mountain-range-556254.jpg')"}}>
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