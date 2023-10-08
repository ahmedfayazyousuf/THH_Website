import {React, useEffect, useState} from 'react';
import '../1_Assets/thh.css';
import img1 from '../1_Assets/Images/Projects/AlSerkal.jpg'
import img2 from '../1_Assets/Images/Projects/ArabHealth.jpg'
import img3 from '../1_Assets/Images/Projects/G42.jpg'
import $ from 'jquery'
import Project from './components/Project';

import { useParams } from 'react-router-dom';

const Projects = () => { 

    const {id} = useParams();


    const [images, setImages] = useState([img1,img2,img3])

    function data(){
        // eslint-disable-next-line
        if(id == 1){
            return(
            <Project Images={["https://thehanginghouse.com/wp-content/uploads/2023/07/3-3.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/1-3.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/2-3.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/4-3.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/5-1.jpg"]} Title="A Thrilling X-Pedition into the Unknown" Body={
                <div class="wpb_text_column wpb_content_element ">
                    <div class="wpb_wrapper">
                    <p>The New Nissan X-Trail harmoniously fuses style, technology, and utility, offering an uncompromised blend of design and adventure. Embracing the mission to DEFY ORDINARY, we engaged influencers in a profound brand encounter that showcases the X-Trail&rsquo;s distinctive identity and capabilities.</p>
                    <p>&nbsp;</p>
                    <p>In the Great X-Trail Expedition, we invited influencers to journey into the unknown, pushing their limits with the trailblazing X-Trail. Guided by a tailor-made app, their digital compass, they embarked on a thrilling exploration of diverse Dubai pitstops, each step bringing them closer to unlocking the mystery of the X.</p>
                    <p>&nbsp;</p>
                    <p><strong>Stats:</strong></p>
                    <ul>
                        <li><strong>35 influencers engaged</strong></li>
                        <li><strong>4 locations explored</strong></li>
                        <li><strong>10 X-Trails activated</strong></li>
                        <li><strong>5 hours event runtime</strong></li>
                    </ul>
                    </div>
                </div>
            } />)
        }

        if(id == 2){
            return(
            <Project Images={["https://thehanginghouse.com/wp-content/uploads/2023/07/5.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/4-2.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/1-2.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/3-2.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/2-2.jpg"]} Title="Navigating the Future of Mobility" Body={<div class="wpb_text_column wpb_content_element ">
            <div class="wpb_wrapper">
              <p>Our mission was to orchestrate an unparalleled introduction of GEELY in the UAE market and unveil the high-tech Deira Showroom, marking a monumental epoch of unrivaled automotive superiority. In pursuit of this ambitious endeavor, we donned our SMART caps on and meticulously designed an immersive day-long experience for media personnel and influential figures.</p>
              <p>&nbsp;</p>
              <p>The convergence of thrilling test drives and captivating entertainment culminated in a grand unveiling of the showroom, creating a vivid impression on all attendees.</p>
              <p>&nbsp;</p>
              <p><strong>Stats:</strong></p>
              <ul>
                <li><strong>180 visitors engaged</strong></li>
                <li><strong>4 smart activations</strong></li>
                <li><strong>4 entertainments experienced</strong></li>
                <li><strong>8 hours event runtime</strong></li>
              </ul>
            </div>
          </div>}/>)
        }

        if(id == 3){
            return(
                <Project Images={["https://thehanginghouse.com/wp-content/uploads/2023/07/3-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/4-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/1-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/2-1.jpg"]} Title="Encouraging Business Innovations" Body={<div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <p>The best business decisions are made in collaboration with the top business drivers. Huawei stands by this belief, and this is exactly why they partnered with us to bring about the best possible experience for their Latam leaders.</p>
                  <p>&nbsp;</p>
                  <p>Through careful event planning with meticulous attention to detail, down to the tiniest decision regarding the dinner, the event attendees were able to experience Huawei&rsquo;s brand of perfection.</p>
                  <p>&nbsp;</p>
                  <p><strong>Stats:</strong></p>
                  <ul>
                    <li><strong>350 attendees</strong></li>
                    <li><strong>10 entertainments experienced</strong></li>
                    <li><strong>1 runtime</strong></li>
                    <li><strong>1 month&rsquo;s planning</strong></li>
                  </ul>
                </div>
              </div>}/>)
        }

        if(id == 4){
            return(
                <Project Images={["https://thehanginghouse.com/wp-content/uploads/2023/07/1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/3.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/2.jpg","https://thehanginghouse.com/wp-content/uploads/2023/07/4.jpg"]} Title="Welcome to Swish City" Body={<div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <p>Bringing our dream team of experiential engineers and creative strategists to the game, we geared up to engage NBA 2K fans in the Middle East Comic Con 2023. Starting from the urban look and feel, we built an experience that housed that one ring to rule them all.</p>
                  <p>&nbsp;</p>
                  <p>Through our trademark creativity and spotless execution, we took the Comic Con crowd on an exciting immersive journey through the NBA 2K world. Our highly engaging and interactive games, paired with a merch display like no other. We also revamped the client&rsquo;s game pods and brought new life to what it means to ball in the NBA 2K universe. And on top of everything, we made sure that the fans meet-and-greet create a three-pointer memory in the minds of the stand visitors.</p>
                  <p>&nbsp;</p>
                  <p><strong>Stats:</strong></p>
                  <ul>
                    <li><strong>6 ballin&rsquo; activations</strong></li>
                    <li><strong>3K+ ballers engaged</strong></li>
                    <li><strong>150+ registrations scored</strong></li>
                    <li><strong>3 days event runtime</strong></li>
                  </ul>
                </div>
              </div>}/>)
        }

        if(id == 5){
            return(
                <Project Images={["https://thehanginghouse.com/wp-content/uploads/2023/03/emplyeecover-1.png","https://thehanginghouse.com/wp-content/uploads/2023/03/emp3-1.png","https://thehanginghouse.com/wp-content/uploads/2023/03/emp2-1.png","https://thehanginghouse.com/wp-content/uploads/2023/03/emp1-1.jpg"]} Title="Explore More, Together" Body={<div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <div class="mkdf-grid-row mkdf-grid-huge-gutter">
                    <div class="mkdf-grid-col-4">
                      <div class="mkdf-ps-info-holder mkdf-ps-info-sticky-holder">
                        <div class="mkdf-ps-info-item mkdf-ps-content-item">
                          <section class="wpb-content-wrapper">
                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1497515061581">
                              <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner">
                                  <div class="wpb_wrapper">
                                    <div class="wpb_text_column wpb_content_element ">
                                      <div class="wpb_wrapper">
                                        <p>As Nissan makes its move to create more Innovations that Excite for the world ahead, they also work hard to fully ingrain their tradition of excellence within every employee.</p>
                                        <p>&nbsp;</p>
                                        <p>With the belief that we can only explore the future if we venture together, we conceptualized and facilitated a test drive and dinner event for the employees.</p>
                                        <p>&nbsp;</p>
                                        <p>To solidify the experience in the Nissan employees&rsquo; memories, we made sure that the interactive elements during the out-of-the-box test drive experience are not only relevant, but also supplementary, to their practice. And to cap the experience, we crafted a dinner journey that talked to all the senses.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>Stats:</strong></p>
                                        <ul>
                                          <li><strong>176 test drives</strong></li>
                                          <li><strong>293 employees engaged</strong></li>
                                          <li><strong>1 day swift execution</strong></li>
                                          <li><strong>1 day event</strong></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                        <div class="mkdf-ps-info-item mkdf-ps-date">&nbsp;</div>
                      </div>
                    </div>
                  </div>
                  <div class="mkdf-ps-navigation">&nbsp;</div>
                </div>
              </div>}/>)
        }

        if(id == 6){
            return(
                <Project Images={["https://thehanginghouse.com/wp-content/uploads/2023/03/AHcoverf-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/03/ah4-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/03/ah3-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/03/ah2-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/03/ah1-1.jpg"]} Title="Bringing Evolution in Motion" Body={<div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <div class="mkdf-grid-row mkdf-grid-huge-gutter">
                    <div class="mkdf-grid-col-4">
                      <div class="mkdf-ps-info-holder mkdf-ps-info-sticky-holder">
                        <div class="mkdf-ps-info-item mkdf-ps-content-item">
                          <section class="wpb-content-wrapper">
                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1497515061581">
                              <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner">
                                  <div class="wpb_wrapper">
                                    <div class="wpb_text_column wpb_content_element ">
                                      <div class="wpb_wrapper">
                                        <p>The American Hospital brought their commitment to progress and innovation to the forefront with &ldquo;Evolution in Motion.&rdquo; This dynamic exhibit was the latest installment in a series showcasing the hospital&rsquo;s commitment to staying at the forefront of medical technology and patient care.</p>
                                        <p>&nbsp;</p>
                                        <p>Visitors were treated to an immersive journey through the latest advancements in medical technology. The centerpiece of the stand was a rotating modular panel, a technological marvel that was the first of its kind in the region. This rotating panel provided visitors with a dynamic and interactive experience as they learned about the hospital&rsquo;s latest developments. Alongside the rotating panel was a robotic arm, symbolizing the hospital&rsquo;s use of technology to improve patient outcomes and make medical procedures safer and more effective.</p>
                                        <p>&nbsp;</p>
                                        <p>And at the center of it all was Cora, a holographic robot that we conceptualized, designed, and named, to position the synergy between humans and technology at the core of the stand &ndash; on the seat of evolution.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>Stats:</strong></p>
                                        <ul>
                                          <li><strong>3 unreal activations</strong></li>
                                          <li><strong>1000+ guests engaged</strong></li>
                                          <li><strong>30 days from ideation to execution</strong></li>
                                          <li><strong>4-day event</strong></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}/>)
        }

        if(id == 7){
            return(
                <Project Images={["https://thehanginghouse.com/wp-content/uploads/2023/03/alserkalcover-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/03/alserkal2-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/03/alserkal1-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/03/alserkal3-1.jpg"]} Title="A Celebration of Color & Connection" Body={<div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <div class="mkdf-grid-row mkdf-grid-huge-gutter">
                    <div class="mkdf-grid-col-4">
                      <div class="mkdf-ps-info-holder mkdf-ps-info-sticky-holder">
                        <div class="mkdf-ps-info-item mkdf-ps-content-item">
                          <section class="wpb-content-wrapper">
                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1497515061581">
                              <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner">
                                  <div class="wpb_wrapper">
                                    <div class="wpb_text_column wpb_content_element ">
                                      <div class="wpb_wrapper">
                                        <p>The Quoz Arts Fest brought together artists and art lovers from all over the city for a celebration of creativity and community. Amidst the vibrant displays of paintings, sculptures, and installations, two activations stood out as truly unique and unforgettable experiences.</p>
                                        <p>&nbsp;</p>
                                        <p>The first activation was &ldquo;The World in Technicolor,&rdquo; a colorful maze that transported visitors back in time while also inspiring hope for a bright future. The second activation, &ldquo;Stranger Flings&rdquo;, is a portal that allowed festival-goers to communicate with others from another area of the festival, was truly out-of-the-box. This innovative idea brought people together, creating a sense of community in a fun and unique way.</p>
                                        <p>&nbsp;</p>
                                        <p>The combination of art, technology, and human connection made the festival truly special, and visitors left with a renewed appreciation for the power of creativity and community.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>Stats:</strong></p>
                                        <ul>
                                          <li><strong>30k+ people shifted away</strong></li>
                                          <li><strong>2 interactive art installations</strong></li>
                                          <li><strong>30 days from ideation to execution</strong></li>
                                          <li><strong>2-day event</strong></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}/>)
        }

        if(id == 8){
            return(
                <Project Images={["https://thehanginghouse.com/wp-content/uploads/2023/03/aftersalescover-1.png","https://thehanginghouse.com/wp-content/uploads/2023/03/aftersales3-1.jpg","https://thehanginghouse.com/wp-content/uploads/2023/03/aftersales2-1.png","https://thehanginghouse.com/wp-content/uploads/2023/03/aftersales1-1.jpg"]} Title="A Comprehensive Conference" Body={<div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <div class="mkdf-grid-row mkdf-grid-huge-gutter">
                    <div class="mkdf-grid-col-4">
                      <div class="mkdf-ps-info-holder mkdf-ps-info-sticky-holder">
                        <div class="mkdf-ps-info-item mkdf-ps-content-item">
                          <section class="wpb-content-wrapper">
                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1497515061581">
                              <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner">
                                  <div class="wpb_wrapper">
                                    <div class="wpb_text_column wpb_content_element ">
                                      <div class="wpb_wrapper">
                                        <p>Attention to detail is always key to success &ndash; wherever one might be. And for their Aftersales Conference, Nissan wanted to create a comprehensive experience with perfection down to the smallest detail.</p>
                                        <p>&nbsp;</p>
                                        <p>So, we took care of everything from the presentation content to the conference flow, and we even designed the space to make it visually appealing. But the real icing on the cake was the seamless journey that comes from the sum of all elements &ndash;activations, presentations, stage direction, and space design. It was a complete experience that got everyone involved and excited.</p>
                                        <p>&nbsp;</p>
                                        <p>In short, we made sure that the attendees felt like they were a part of something special and had a blast while they were there.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>Stats:</strong></p>
                                        <ul>
                                          <li><strong>14 presentations perfected</strong></li>
                                          <li><strong>2 activations created</strong></li>
                                          <li><strong>67 attendees from the region</strong></li>
                                          <li><strong>2-day event</strong></li>
                                          <li><strong>1 prototype app created</strong></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}/>)
        }

        if(id == 9){
            return(
                <Project Images={["https://thehanginghouse.com/wp-content/uploads/2023/01/g42crop.jpg"]} Title="Discover Limitless" Body={<div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <div class="mkdf-grid-row mkdf-grid-huge-gutter">
                    <div class="mkdf-grid-col-4">
                      <div class="mkdf-ps-info-holder mkdf-ps-info-sticky-holder">
                        <div class="mkdf-ps-info-item mkdf-ps-content-item">
                          <section class="wpb-content-wrapper">
                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1497515061581">
                              <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner">
                                  <div class="wpb_wrapper">
                                    <div class="wpb_text_column wpb_content_element ">
                                      <div class="wpb_wrapper">
                                        <p class="p1">G42 harnesses the immense power AI for the benefit of humanity by masterfully applying the technology to various areas of interest. By seamlessly combining technology with human ingenuity, G42 opens new avenues for a better tomorrow.</p>
                                        <p class="p1">While preserving its encompassing power, we distilled and translated this concept into a cohesive stand on three levels. First, we visualized AI&rsquo;s momentum through dynamic light components. Second, the area planning was consciously designed to highlight the importance of each pillar in harnessing the power of AI towards a better future. And finally, their equal floor space, arranged in a cohesive manner, allows the guests to fully appreciate G42 and its subsidiary companies as 360&ordm; AI innovations provider.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}/>)
        }

        if(id == 10){
            return(
                <Project Images={["https://thehanginghouse.com/wp-content/uploads/2023/01/rtacrop.jpg"]} Title="Expanding Horizons" Body={<div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <div class="mkdf-grid-row mkdf-grid-huge-gutter">
                    <div class="mkdf-grid-col-4">
                      <div class="mkdf-ps-info-holder mkdf-ps-info-sticky-holder">
                        <div class="mkdf-ps-info-item mkdf-ps-content-item">
                          <section class="wpb-content-wrapper">
                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1497515061581">
                              <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner">
                                  <div class="wpb_wrapper">
                                    <div class="wpb_text_column wpb_content_element ">
                                      <div class="wpb_wrapper">
                                        <div class="wpb_text_column wpb_content_element ">
                                          <div class="wpb_wrapper">
                                            <p class="p1">The growth of Dubai throughout the decades paints a clear picture of a holistic standard of progress. And as the city evolves to become one of the best metropolises in the world, Dubai&rsquo;s Roads and Transport Authority (RTA) opened yet another frontier of progress.</p>
                                            <p class="p1">Replicating the region&rsquo;s organic and rapid growth, we designed an entire experience that unveiled the newly created nature reserve south of the city. Following the concept of biomorphism, we highlighted the organic nature of Dubai&rsquo;s development and its harmonious relationship with the region&rsquo;s natural beauty.</p>
                                            <p class="p1">This launch event was attended by Sheikh Mohammed bin Rashid, Vice President and Ruler of Dubai, along with high dignitaries and VVIPs.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}/>)
        }


    }

    

    return (
        <>
            {data()}
        </>
    )
}

export default Projects