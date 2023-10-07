import React, { useEffect, useState } from 'react';
import Blog from './Components/Blog'; 
import { useParams } from 'react-router-dom';

const Blogs = (props) => { 
  const {id} = useParams();
useEffect(()=>{
  console.log(id == 1)
})
  function data(){
    if(id == 1){

      return(
        <Blog Title="Coachella 2023: Exciting Visuals, But Where’s the Tech-citement?" Author="The Housemates" Date="May 26, 2023" Body={<div style={{margin: '5px 0'}}>
  <div class="mkdf-post-text-main">
    <section class="wpb-content-wrapper">
      <div class="vc_row wpb_row vc_row-fluid">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <p><strong>The Epicenter of Glitter, Music, and Fashion</strong></p>
                  <p>Coachella 2023 &ndash; the epicenter of glitter, music, and fashion. With thousands of influencers and music enthusiasts flocking to the desert, there was no shortage of Instagram-worthy moments. From flower walls to neon signs, it was a veritable carnival of visual delights. The festival of all festivals was a showstopper with stunning art installations, breathtaking performances, and of course, the experimental activations that had us all excited. But let&rsquo;s be honest, did the experiential activations live up to the excitement?</p>
                  <p><strong>Memorable Activations</strong></p>
                  <p><strong>Neutrogena: The Hero We Needed</strong></p>
                  <p>First up, Neutrogena. The skincare brand not only had their usual influencer campaign, but they also put on the&nbsp;<strong>Skin Vitals Experience</strong>. Inside the space, attendees were able to walk-through and learn more about their skin, access their skin vitals, and try some of the products. And in addition to that, they had sunscreen stations set up around the festival for attendees to protect against UV rays. Honestly, Neutrogena was the hero we needed in a sea of sunburnt attendees.</p>
                  <p><strong>Adidas x Bad Bunny: Sneaker Sensation</strong></p>
                  <p>Next, Adidas teamed up with Bad Bunny for the&nbsp;<strong>Adidas Campus Experience</strong>, an on-site, cube-shaped pop-up that celebrated the pair&rsquo;s latest sneaker release. The space&rsquo;s eye-catching exterior boasted 50,000 live florals in 60 different varietals. On one side, Bad Bunny&rsquo;s signature logo made from steel and pine formed a larger-than-life archway entrance. On the other side of the cube was the Adidas logo, which marked a shoppable experience. Inside, a zen garden-inspired space was blanketed in wood tones and Spanish moss. In a fun touch, a floral chandelier included hanging sneakers. It was definitely a sight to see, but we couldn&rsquo;t help but wonder how many of those shoes actually sold.</p>
                  <p><strong>B&Eacute;IS x Wanderlust Creamery: Beating the Heat</strong></p>
                  <p>But the activation that had our mouths watering was from Shay Mitchell&rsquo;s travel accessories brand B&Eacute;IS. In honor of their new&nbsp;<strong>Sherbert Collection</strong>, they teamed up with Wanderlust Creamery to serve limited-edition ice cream out of a colorful on-site ice cream truck. And in a fun touch, products from the Sherbert Collection were displayed on the side of the truck. It was the perfect way to beat the heat while also checking out some stylish travel gear.</p>
                  <p><strong>The Missing Ingredient: Technology</strong></p>
                  <p>But, as much as we loved these activations, there was something missing from the experience. In a world where technology plays such a major role, it was surprising that more brands didn&rsquo;t incorporate it into their activations. Sure, the activations were pretty, but they could have been so much more. For example, Aperol could have used misted spirits to create a sensory experience that would transport attendees to the canals of Venice. Casetify could have incorporated a mosaic screen using old phones and phone cases, creating a cool and interactive installation. The possibilities are endless, and it&rsquo;s a missed opportunity for brands who want to make a lasting impression.</p>
                  <p><strong>Final Thoughts</strong></p>
                  <p>It&rsquo;s safe to say that some brands like Playboy and Hyatt Hotel could have stepped up their game, but the event as a whole lacked a strong technological backup. All in all, Coachella 2023 was a visual feast. From the music to the activations, it was an unforgettable experience. But, as we move forward, we hope to see more brands incorporating technology into their activations, creating even more immersive and unforgettable experiences.</p>
                  <p>Because, let&rsquo;s face it, pretty isn&rsquo;t always enough. We want to be wowed, and we know that these brands have the creativity and resources to make it happen. So, until next year, let&rsquo;s see what Coachella 2024 has in store for us. We&rsquo;ll be waiting with bated breath, hoping for an even more unforgettable experience filled with innovative technology and immersive activations that truly transport us to new worlds.</p>
                  <p><strong><br />Frequently Asked Questions</strong></p>
                  <p><strong>Q1: What were some of the standout experiential activations at Coachella 2023?</strong></p>
                  <p>A1: Some of the standout activations included Neutrogena&rsquo;s Skin Vitals Experience, the Adidas x Bad Bunny Campus Experience, and the B&Eacute;IS x Wanderlust Creamery collaboration for the Sherbert Collection.</p>
                  <p><strong>Q2: How could brands have incorporated technology into their activations?</strong></p>
                  <p>A2: Brands could have used technology to create more immersive and interactive experiences. For example, Aperol could have used misted spirits for a sensory experience, and Casetify could have created a mosaic screen using old phones and phone cases.</p>
                  <p><strong>Q3: Which brands could have stepped up their game at Coachella 2023?</strong></p>
                  <p>A3: Some brands that could have improved their activations include Playboy and Hyatt Hotel. These brands lacked strong technological components in their activations, which could have made them more engaging and memorable.</p>
                  <p><strong>Q4: What can we expect from Coachella 2024?</strong></p>
                  <p>A4: While we can&rsquo;t predict the specifics, we hope to see more brands incorporating technology into their activations at Coachella 2024. This would create more immersive and unforgettable experiences for attendees.</p>
                  <p><strong>Q5: Why is it important for brands to create engaging and immersive activations at events like Coachella?</strong></p>
                  <p>A5: Engaging and immersive activations help brands make a lasting impression on attendees, allowing them to connect with their target audience in a unique and memorable way. This can lead to increased brand awareness, loyalty, and ultimately, sales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="mkdf-post-info">
    <div class="mkdf-post-info-left">&nbsp;</div>
    <div class="mkdf-post-info-right">&nbsp;</div>
  </div>
</div>} />
      )
    }

    if(id == 2){
      return(
        <Blog Title="Contactless activations for your brand" Author="The Housemates" Date="October 14, 2020" Body={<div style={{margin: '5px 0'}}>
        <div class="mkdf-post-text-main">
          <p>Over the years, technology has revolutionized experiences and has changed the way we perceive and interact within spaces and amongst ourselves. Capitalizing on this fact, we have reinvented the wheel to include remote and hybrid experiences.</p>
          <p>Take a look at just some of our hybrid experiences below</p>
          <figure class="wp-block-image size-large is-resized"><img class="wp-image-9385" src="https://thehanginghouse.com/wp-content/uploads/2020/10/Contactless-brand-activations-invisible-.gif" alt="Invisible screen the hanging house" width="300" height="300" />
            <figcaption><strong>Invisible Screen</strong></figcaption>
          </figure>
          <p>The Invisible Screen is the perfect way to grab a passer by&rsquo;s attention.</p>
          <p>Increase consumer engagement for your brand by enticing them with this experience.</p>
          <p>It&rsquo;s a crowd puller that intrigues passers by, increasing their interest in engaging with you. It can be used build database through collecting consumer details. Most importantly, it gives consumers a chance to interact with your brand in a unique, fun manner.</p>
          <figure class="wp-block-image size-large is-resized"><img class="wp-image-9390" src="https://thehanginghouse.com/wp-content/uploads/2020/10/Social-media-vending-machine-the-hanging-hosue-touchless.gif" alt="social media vending machine brand" width="300" height="300" />
            <figcaption><strong>Social vending machine</strong></figcaption>
          </figure>
          <p>Featuring fun giveaways that can be incentivized for consumers to post on your brand&rsquo;s personalized hashtag. The social vending machine is sure to build your social media presence with real-time social attention. The best part is that upgrade the vending machine with voice activation or gaming!</p>
          <p>Use the power of social media to your brand&rsquo;s advantage at your next event.</p>
          <figure class="wp-block-image size-large is-resized"><img class="wp-image-9392" src="https://thehanginghouse.com/wp-content/uploads/2020/10/AR-augmented-reality-the-hanging-house.gif" alt="augmented reality AR the hanging house" width="300" height="300" />
            <figcaption><strong>Augmented Reality Gaming</strong></figcaption>
          </figure>
          <p>Gamify your brand&rsquo;s experience through AR treasure hunts, quizzes and much more!</p>
          <p>We provide the application, the technology and technical support on site &ndash; all we need is an objective from your end. How will you be leveraging AR for your brand today?</p>
          <figure class="wp-block-image size-large is-resized"><img class="wp-image-9393" src="https://thehanginghouse.com/wp-content/uploads/2020/10/digital-contactless-photo-booth-the-hanging-house.gif" alt="digital photo booth the hanging house touchless custom" width="300" height="300" />
            <figcaption><strong>Digital photo booth</strong></figcaption>
          </figure>
          <p>A Digital Photo Booth is the perfect add on for consumer engagement!</p>
          <p>With unlimited prints, customizable polaroids, social media sharing and digital branding available &ndash; this booth is sure to create rave-worthy experience at your next event.</p>
          <p>&nbsp;</p>
          <p><strong>Contact us to know more about how you can create exceptional experiences for your consumers.</strong></p>
        </div>
        <div class="mkdf-post-info">&nbsp;</div>
      </div>} />
      )
    }

    if(id == 3){
      return(
      <Blog Title="The power of virtual experiences for brands" Author="The Housemates" Date="December 14, 2020" Body={<div style={{margin: '5px 0'}}>
      <div class="mkdf-post-text-main">
        <p>Virtual worlds have been defined as &ldquo;persistent virtual environments in which people experience others as being there with them &ndash; and where they can interact with them&rdquo; (Schroeder, 2008).</p>
        <p>&nbsp;</p>
        <p>Through virtual worlds, Virtual Reality (VR) offers a new way for marketers to connect with consumers where consumers are immersed into technologically synthesized &lsquo;real-use&rsquo; experiences of products and services.</p>
        <p>Consumers today want to experience the unknown, the road not taken and the unconventional &ndash; if you give a consumer a choice between two brands &ndash; one whose products are sold through a virtual experience and one that prefers traditional forms of marketing, the average consumer will always pick the newer, more modern brand.</p>
        <p><a href="https://contentmarketinginstitute.com/2017/01/virtual-reality-change-marketing/">62% of consumers say they would feel more engaged with a brand that sponsors a VR experience and over 71% of consumers think a brand is forward-thinking if it uses virtual reality.</a></p>
        <p>You don&rsquo;t have to take our word for it- even the&nbsp;<a href="https://www.forbes.com/sites/timsparapani/2017/08/16/can-we-have-our-virtual-reality-cake-and-eat-it-too/?sh=1cd619ee5369">World&rsquo;s Most Valuable brands according to Forbes have all created some form of virtual experiences for their consumers</a>.</p>
        <p>Brand Marketing &ndash; be it for consumers or other businesses, must shift and adapt to the unique needs of consumers today. It&rsquo;s not an option anymore &ndash; your brand will sink amongst the hundreds of other brands that are already out there capturing consumer attention with virtual and augmented reality experiences.</p>
        <p>As simply as the use of virtual reality is, the possibilities of VR are endless. From showcasing product samples to relaunching a product, organizing an event, activities to engage adults and children and even watching a movie!</p>
        <p>Virtual Reality (VR) and Augmented Reality (AR) have the power to transform and elevate consumer experiences to the next level. Use it to change the way your consumers view your brand through virtual escape rooms, virtual experience fairs, events, virtual painting and so much more.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>Reach out to us to know how you can leverage the power of virtual experiences for brands.</p>
        <p>&nbsp;</p>
      </div>
    </div>}/>)
  }

  if(id == 4){
    return(
      <Blog Title="5 jobs of the future that don’t exist today" Author="The Housemates" Date="October 7, 2020" Body={<div style={{margin: '5px 0'}}>
      <div class="mkdf-post-text-main">
    <div class="mkdf-post-text-main">
      <p>Jobs as we know them today, consist of titles such as &lsquo;App developer&rsquo;, &lsquo;Social media manager&rsquo; and &lsquo;VR specialist&rsquo; &ndash; words that didn&rsquo;t mean anything to the world 10 years ago. At The Hanging House itself, we have Mechatronics engineers and even VR experience specialists as a part of our team!</p>
      <p>Similarly, with the world changing constantly and at a pace never imagined before, we are soon going to require jobs and professionals that specialize in concepts that seem unimaginable today.</p>
      <p>We can all get ready for the needs of the future by choosing to educate ourselves about future needs.</p>
      <p>The need of the hour is to understand the job market of the future.Through insights, research and predictions, we as organizations and people, can predict future jobs and needs and educate ourselves about the skills required. This can help us move in the right direction and start focusing on what would be important in the next 5-10 years.</p>
      <p>At The Hanging House, we took a step in this direction by creating a space for learning and teaching every Wednesday, where every week, an employee skilled in their work would present a short webinar to everyone in the team so that they could learn more about that field. So far, we&rsquo;ve learnt about Design, Bitcoin, AI and many other interesting topics!</p>
      <p>We can begin our journey towards the future in the right direction by starting to learn and teach ourselves the meaning of AI, Robotics, Wellness Management, Data Management and many such concepts so that we can be prepared for the future job market.</p>
      <p>So, let&rsquo;s get down to the nitty gritty. What jobs can we expect to have in the future that don&rsquo;t exist today?</p>
      <h3><strong>1. Space Pilot </strong></h3>
      <p>The UAE has recently already taken the first step into the future with its planned space exploration mission to Mars. The Al Amal probe is set to launch into space on the 14th of July and it doesn&rsquo;t stop there. In 2036, an international spacecraft named Alpha Centauri is set to be launched into an inhabitable planet. That&rsquo;s only 16 years from now!</p>
      <p><strong>On that note, we would like to take this opportunity to congratulate and celebrate the launch of the Al Amal probe into space.</strong></p>
      <p>Now that UAE has stepped into the future, we already need the skills required for space travel to be taught today. It won&rsquo;t be long before we see the &lsquo;launch&rsquo; of the commercial space flights and we reckon it won&rsquo;t be too long before we see space pilots brushing shoulders with us and heading to &lsquo;space-ports&rsquo;.</p>
      <p>A space pilot would have to be very well educated in sciences and math for them to efficiently fly a bunch of us to other planets. Though this may seem like it&rsquo;s a thing of the future, the reality is that some of us on Earth have already started learning the subjects necessary to become a commercial space pilot!</p>
      <h3><strong>2. Chief Productivity Officer</strong></h3>
      <p>The average person&rsquo;s attention span has gone down from 12 seconds in the year 2000 to 8 seconds today. All the best to us at the marketing end. With hundreds of distractions available to everyone at a hands grab, managing these distractions and increasing productivity will save organizations hundreds and thousands of dollars.</p>
      <p>A Chief Productivity Officer is an expert in increasing an employee&rsquo;s productivity, in any form. Be it by changing the lighting in the office, creating more space for work or reducing distractions in the workspace, he will create a space for us to be more focused at work. The question at the end of the day would be: Are we all ready to have a love-hate relationship, with this person?</p>
      <h3><strong>3. Autonomous Transportation Specialist</strong></h3>
      <p>With some organizations already hiring for this position, we can easily assume that the market for this job will quadruple soon. Major car manufacturing brands like Audi, Cadillac and Buick have already launched self-driving features in their cars, and we think it won&rsquo;t be long before we won&rsquo;t even need driving licenses.</p>
      <p>But as much as cars can be smart and self-driving, they won&rsquo;t be able to fix or code themselves into working perfectly. An autonomous transportation specialist would for example: integrate human voice recognition software&rsquo;s, monitor and manage software results and determine the best way to make a car, well..autonomous.</p>
      <h3><strong>4. Augmented Reality Journey Builder</strong></h3>
      <p>Augmented reality has become one of the most used terms in technology in the past few years. Every day, we see more apps like Pok&eacute;mon Go, HP reveal and Snapchat dominate youngsters&rsquo; time. There&rsquo;s something about interacting with a &lsquo;real&rsquo; object through our screens, right?</p>
      <p>AR journeys are something The Hanging House specialize in and over time, we have seen the need to perfect this journey. In the future, there would be to hire a professional who can create and personalize a journey that is both mind-blowing and perfect for the target audience of a brand.&nbsp;Another task for the professional would be to create interactive stories that take children and adults alike into various virtual worlds. Can you imagine being virtually present with Cinderella? The possibilities that would result from this job, we believe are endless.</p>
      <h3><strong>5. Simplicity Engineer</strong></h3>
      <p>With millions of data being produced at the speed of light today, our brains are not equipped to handle the amount of information being presented to us in a short time frame. Think about how many images, texts and other information you see when you scroll on Instagram for 10 minutes and imagine having to process double of that in the future.</p>
      <p>As the amounts of data being produced daily continues to increase at an alarming rate, there would be a need for, believe it or not, a&nbsp;<em>Simplicity Engineer</em>. He or she would be able to understand the working of a human mind, the amount of data that is perfect for consumers and have the ability to simplify large chunks of data into simple, sensible, understandable processes. We think he has his job sorted out for him 😅</p>
      <p>&nbsp;</p>
      <p>That bring us to the end of our article, however the possibility of future jobs will always remain endless.</p>
      <p>Knowing and preparing for what is about to come is very important for us today as we move day by day into the future.</p>
      <p>&nbsp;</p>
      <p>We at The Hanging House have vowed to learn more about future possibilities so that we can play our part in bridging the gap between future needs and create mind-blowing experiences for the future.</p>
      <p>And who knows, maybe we will also be creating experiences for you on other planets. Just be sure to bring your oxygen tank!</p>
      <p><strong>Think you can predict which jobs will be the talk of the town in 10 years?</strong></p>
      <p><strong>Comment below.</strong></p>
    </div>
    <div class="mkdf-post-info">&nbsp;</div>
  </div>
    </div>}/>)
  }

  if(id == 5){
    return(
      <Blog Title="Inside the Activations @ Dubai International Motor Show" Author="The Housemates" Date="November 18, 2019" Body={<div style={{margin: '5px 0'}}>
      <div class="mkdf-post-text-main">
    <div class="mkdf-post-text-main">
      <p>We were delighted to be part of 2 different experiences at the Dubai Motor Show that took place from the 12th to 16th November 2019!</p>
      <figure class="wp-block-image"><img class="wp-image-9070" src="https://thehanginghouse.com/wp-content/uploads/2019/11/Motor-Show-Social-Media-1024x576.gif" sizes="(max-width: 700px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2019/11/Motor-Show-Social-Media-1024x576.gif 1024w, https://thehanginghouse.com/wp-content/uploads/2019/11/Motor-Show-Social-Media-300x169.gif 300w, https://thehanginghouse.com/wp-content/uploads/2019/11/Motor-Show-Social-Media-768x432.gif 768w" alt="" width="700"  />
        <figcaption>AR hunt Car collector</figcaption>
      </figure>
      <p class="has-text-align-left">The &lsquo;<strong>Car Collector</strong>&rsquo; activation that we set up was an exhilarating&nbsp;<strong>AR scavenger hunt&nbsp;</strong>that had participants running around the venue, bringing miniature cars to life as they raced on to collect points.</p>
      <figure class="wp-block-image"><img class="wp-image-9071" src="https://thehanginghouse.com/wp-content/uploads/2019/11/AR-hunt-dubai-motor-show-768x1024.jpeg" sizes="(max-width: 768px) 100vw, 768px" srcset="https://thehanginghouse.com/wp-content/uploads/2019/11/AR-hunt-dubai-motor-show-768x1024.jpeg 768w, https://thehanginghouse.com/wp-content/uploads/2019/11/AR-hunt-dubai-motor-show-225x300.jpeg 225w, https://thehanginghouse.com/wp-content/uploads/2019/11/AR-hunt-dubai-motor-show.jpeg 960w" alt=""  height="700" />
        <figcaption>Car Collector</figcaption>
      </figure>
      <p>Besides this, we setup&nbsp;<strong>Kidzania&rsquo;s driving arena</strong>&nbsp;for young racers who could test their own driving skills in order to earn their very own license!</p>
      <figure class="wp-block-image"><img class="wp-image-9072" src="https://thehanginghouse.com/wp-content/uploads/2019/11/dubai-motor-show-kidzania-activation-1024x768.jpeg" sizes="(max-width: 1024px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2019/11/dubai-motor-show-kidzania-activation.jpeg 1024w, https://thehanginghouse.com/wp-content/uploads/2019/11/dubai-motor-show-kidzania-activation-300x225.jpeg 300w, https://thehanginghouse.com/wp-content/uploads/2019/11/dubai-motor-show-kidzania-activation-768x576.jpeg 768w" alt="" width="700"  />
        <figcaption>Kidzania Activation</figcaption>
      </figure>
      <p>In case you were part of the Dubai Motor show and experienced these activations, we would love to know what you thought about them!</p>
      <p>To know more, get in touch with us on:&nbsp;<a href="mailto:welcome@thehanginghouse.com">welcome@thehanginghouse.com</a></p>
    </div>
  </div>
    </div>}/>)
  }

  if(id == 6){
    return(
      <Blog Title="Harness the power of your brain" Author="The Housemates" Date="October 17, 2019" Body={<div style={{margin: '5px 0'}}>
      <div class="mkdf-post-text-main">
    <div class="mkdf-post-text-main">
      <p>Unleash the power of your mind with our cutting edge technology.<br />Using EEG, we transform your brainwaves into physical energy!</p>
      <div class="wp-block-image">
        <figure class="aligncenter is-resized"><img class="wp-image-9049" src="https://thehanginghouse.com/wp-content/uploads/2019/10/b9860735-fe95-481f-bdc7-8b2d6c4a7a60.gif" alt="Brain wave racing" width="602" height="413" />
          <figcaption><strong>Brainwave racing</strong></figcaption>
        </figure>
      </div>
      <p>Strap on the headset and control your car!</p>
      <p class="has-text-align-left">The rules are simple:&nbsp;<strong>&nbsp;The more you focus on your car, the faster it moves!</strong><br />Blow your visitor&rsquo;s minds away as they challenge their friends to a competition of concentration.</p>
      <div class="wp-block-image">
        <figure class="aligncenter is-resized"><img class="wp-image-9050" src="https://thehanginghouse.com/wp-content/uploads/2019/10/951e6370-a516-4990-be20-19b12eb2fb71.gif" alt="Brain wave tug of war activation" width="583" height="400" />
          <figcaption><strong>Brainwave tug of war</strong></figcaption>
        </figure>
      </div>
      <p>We decided to bring back one of the most commonly played games of the 90&rsquo;s &ndash;&nbsp;<strong>The Tug of War!</strong></p>
      <p>This version however comes with a twist!</p>
      <p>We&rsquo;ve upgraded it with technology in a way where you use the strength of your mind instead of your body to win!</p>
      <p>Presenting,&nbsp;<strong>The Tug of War&nbsp;</strong>with brainwave tracking!</p>
      <p>The aim of the game is to bring an object closer to you &ndash; before time runs out. The closer it moves towards you, the closer you get to winning!</p>
      <p>The best part is that the object can be anything you want it to be &ndash; a give-away, a new product or product samples!</p>
      <p><strong>Power up your next event with your visitors&rsquo; Brainwaves!</strong></p>
      <p>To know more, get in touch with us on:&nbsp;<a href="mailto:welcome@thehanginghouse.com">welcome@thehanginghouse.com</a></p>
    </div>
  </div>
    </div>}/>)
  }

  if(id == 7){
    return(
      <Blog Title="Fitness Activations That Get Attendees’ Hearts Pumping  💪" Author="The Housemates" Date="August 1, 2019" Body={<div style={{margin: '5px 0'}}>
      <div class="mkdf-post-text-main">
    <div class="mkdf-post-text-main">
      <p class="has-medium-font-size">Challenge Dubai with these 4 Fitness Activations</p>
      <p class="has-medium-font-size">With the Dubai Fitness Challenge right around the corner, we know you&rsquo;ve been racking your brains to get people off their couch.</p>
      <p class="has-medium-font-size">Here are 4 active- ations for your next event.</p>
      <p class="has-medium-font-size"><strong>Hit the lights</strong></p>
      <figure class="wp-block-image"><img class="wp-image-9028" src="https://thehanginghouse.com/wp-content/uploads/2019/08/ig-fitness-5-1024x683.jpg" sizes="(max-width: 1024px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2019/08/ig-fitness-5-1024x683.jpg 1024w, https://thehanginghouse.com/wp-content/uploads/2019/08/ig-fitness-5-300x200.jpg 300w, https://thehanginghouse.com/wp-content/uploads/2019/08/ig-fitness-5-768x512.jpg 768w" alt="" width="700" />
        <figcaption>Batak Challenge</figcaption>
      </figure>
      <p class="has-medium-font-size">Tap as many lights as possible &ndash; before your time runs out. That&rsquo;s right &ndash; Challenge your hand-eye coordination and your agility in this fun (almost extreme) physical activity!</p>
      <p class="has-medium-font-size">Bring your friends and family to play together or beat the clock on your own,</p>
      <p class="has-medium-font-size"><strong>Lose to win</strong></p>
      <figure class="wp-block-image"><img class="wp-image-9030" src="https://thehanginghouse.com/wp-content/uploads/2019/08/treadmill-vending.jpg" sizes="(max-width: 1000px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2019/08/treadmill-vending.jpg 1000w, https://thehanginghouse.com/wp-content/uploads/2019/08/treadmill-vending-300x200.jpg 300w, https://thehanginghouse.com/wp-content/uploads/2019/08/treadmill-vending-768x511.jpg 768w" alt="" width="700"  />
        <figcaption>Lose to win</figcaption>
      </figure>
      <p class="has-medium-font-size">Where there is a will, there is a way. And we surely know how to keep the &lsquo;will&rsquo; going! We used the concept of hanging donuts in front of runners except these are branded freebies.&nbsp; Keep your energy up enough to convert it into electricity to win your reward. It&rsquo;s one small step for man, one giant leap for free goodies.</p>
      <p>image source:&nbsp;<a href="https://shop.adidas.ae/en/">https://shop.adidas.ae/en/</a></p>
      <p><strong>Pump it up</strong></p>
      <div class="wp-block-image">
        <figure class="aligncenter"><img class="wp-image-9027" src="https://thehanginghouse.com/wp-content/uploads/2019/08/ig-fitness-3-1024x683.jpg" sizes="(max-width: 1024px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2019/08/ig-fitness-3-1024x683.jpg 1024w, https://thehanginghouse.com/wp-content/uploads/2019/08/ig-fitness-3-300x200.jpg 300w, https://thehanginghouse.com/wp-content/uploads/2019/08/ig-fitness-3-768x512.jpg 768w" alt="Cycle to light up" width="700"  />
          <figcaption>Pump it up</figcaption>
        </figure>
      </div>
      <p class="has-medium-font-size">You don&rsquo;t have to be a cycologist to figure this one out. Bring your energy to the cycle and compete with our friends to shine the brightest light. The faster you pedal, the more calories you burn and the brighter your light shines.&nbsp;</p>
      <p><strong>Catch me if you can</strong></p>
      <figure class="wp-block-image"><img class="wp-image-9031" src="https://thehanginghouse.com/wp-content/uploads/2019/08/21764967_1499055840180151_268334727492356592_n-1024x1024.jpg" sizes="(max-width: 1024px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2019/08/21764967_1499055840180151_268334727492356592_n-1024x1024.jpg 1024w, https://thehanginghouse.com/wp-content/uploads/2019/08/21764967_1499055840180151_268334727492356592_n-1024x1024-150x150.jpg 150w, https://thehanginghouse.com/wp-content/uploads/2019/08/21764967_1499055840180151_268334727492356592_n-1024x1024-300x300.jpg 300w, https://thehanginghouse.com/wp-content/uploads/2019/08/21764967_1499055840180151_268334727492356592_n-1024x1024-768x768.jpg 768w, https://thehanginghouse.com/wp-content/uploads/2019/08/21764967_1499055840180151_268334727492356592_n-1024x1024-550x550.jpg 550w" alt="" width="700"  />
        <figcaption>Catch me if you can</figcaption>
      </figure>
      <p class="has-medium-font-size">We know it&rsquo;s hot outside so why not exercise with some breeze? Let the wind blow as you have to stretch, jump and squat to catch the balls blown in every direction. Want to give them an incentive? Switch the balls for coupons or money and watch it all go down from the outside</p>
      <p>image source:&nbsp;<a href="https://uniqueideas.co.uk/fanta-orange/">https://uniqueideas.co.uk/fanta-orange/</a></p>
      <p><strong>Simon says Squat</strong></p>
      <figure class="wp-block-image"><img class="wp-image-9029" src="https://thehanginghouse.com/wp-content/uploads/2019/08/Fitness-Activations-1024x1024.png" sizes="(max-width: 1024px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2019/08/Fitness-Activations-1024x1024.png 1024w, https://thehanginghouse.com/wp-content/uploads/2019/08/Fitness-Activations-150x150.png 150w, https://thehanginghouse.com/wp-content/uploads/2019/08/Fitness-Activations-300x300.png 300w, https://thehanginghouse.com/wp-content/uploads/2019/08/Fitness-Activations-768x768.png 768w, https://thehanginghouse.com/wp-content/uploads/2019/08/Fitness-Activations-550x550.png 550w, https://thehanginghouse.com/wp-content/uploads/2019/08/Fitness-Activations.png 1080w" alt="" width="700" />
        <figcaption>Simon Says Squat</figcaption>
      </figure>
      <p class="has-medium-font-size">Do as many squats as Simon asks &ndash; but do them as perfectly as Simon shows you, or do them all over again to impress Simon.</p>
      <p>&nbsp;</p>
      <p class="has-medium-font-size">Dubai is getting fitter. Are you?</p>
    </div>
  </div>
    </div>}/>)
  }

  if(id == 8){
    return(
      <Blog Title="How to get out of a creative rut" Author="The Housemates" Date="July 16, 2018" Body={<div style={{margin: '5px 0'}}>
      <p><strong>How to get out of a creative rut<br /></strong></p>
  <p>Are you sitting there with your hands in your head wondering what to do next with your upcoming project or book or anything that requires your creativity?</p>
  <p><img class="wp-image-8698 size-large" src="https://thehanginghouse.com/wp-content/uploads/2018/07/automation-1024x683.jpg" sizes="(max-width: 1024px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/automation-1024x683.jpg 1024w, https://thehanginghouse.com/wp-content/uploads/2018/07/automation-300x200.jpg 300w, https://thehanginghouse.com/wp-content/uploads/2018/07/automation-768x512.jpg 768w, https://thehanginghouse.com/wp-content/uploads/2018/07/automation.jpg 1500w" alt="" width="700" /></p>
  <p>&nbsp;</p>
  <p>Are you sitting there with your hands in your head wondering what to do next with your upcoming project or book or anything that requires your creativity?</p>
  <p>&nbsp;</p>
  <p>The good news is that getting stuck is just part of the process of creativity.</p>
  <p>Follow these tips for a relief from that block</p>
  <p>&nbsp;</p>
  <ol>
    <li><strong>Embrace the rut</strong>&nbsp;&ndash; this may seem like the worst thing to do but if you accept the fact that your creativity is taking a break from you and needs to take a vacation himself, then you will be able to stop feeling hopeless while he takes his time out. Maybe this is your mind&rsquo;s way of saying take a break yourself.</li>
  </ol>
  <p>&nbsp;</p>
  <ol start="2">
    <li><strong>Stay in the now</strong>&nbsp;&ndash; Remember to not think about your failures from the past. You must live in the present and focus on what the problem is at hand. As Buddha said: &ldquo;Do not dwell in the past, do not dream of the future. Concentrate the mind on the present moment.&rdquo;</li>
  </ol>
  <p>&nbsp;</p>
  <ol start="3">
    <li><strong>Change your environment</strong>&nbsp;&ndash; When you&rsquo;ve been sitting in front of the computer for 6 hours, this may not be the most obvious thing to do. Taking a walk around the neighborhood or if you have enough time, driving to the beach or lake will certainly spike up those creative brain cells.</li>
  </ol>
  <p>&nbsp;</p>
  <ol start="4">
    <li><strong>Change your routine</strong>&nbsp;&ndash; Routines are like the old song&ndash;know when to hold &lsquo;em, know when to fold &lsquo;em and in the case of a creative rut, you want to fold &lsquo;em. Break the auto pilot cycle by trying out new things such as picking up a guitar or even trying out a new recipe in the kitchen</li>
  </ol>
  <p>&nbsp;</p>
  <ol start="5">
    <li><strong>Use mind exercises</strong>&nbsp;&ndash; Even your brain needs to be exercised on a regular basis. Whether you&rsquo;re using an app or you choose not to, Word-skills, Memory, recognition and emotional intelligence are a definite way to get that project completed.</li>
  </ol>
  <p>&nbsp;</p>
  <p>Everyone hates being stuck in a rut, but unfortunately we all face it in our lives some day or the other. So next time that ugly feeling seeps inside you, you know what exactly to do. Most importantly remember that this is not the end of the road but just a bump in the road of creativity.</p>
    </div>}/>)
  }

  if(id == 9){
    return(
      <Blog Title="The Changing Future of Movie Premiers" Author="The Housemates" Date="July 30, 2018" Body={<div style={{margin: '5px 0'}}>
      <div class="mkdf-post-text-main">
    <section class="wpb-content-wrapper">
      <p><strong>The changing future of movie premiers<br /></strong></p>
      <p>Gone are the days when you took your golden tickets to your local cinema to be greeted by a box office agent, who smiled and handed over popcorn and a drink in your hand while you rushed to the hall to find the best seat in the house.</p>
      <p><img class="alignnone wp-image-8704 size-large" src="https://thehanginghouse.com/wp-content/uploads/2018/07/meg2-1024x619.jpg" sizes="(max-width: 1024px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/meg2-1024x619.jpg 1024w, https://thehanginghouse.com/wp-content/uploads/2018/07/meg2-300x181.jpg 300w, https://thehanginghouse.com/wp-content/uploads/2018/07/meg2-768x464.jpg 768w, https://thehanginghouse.com/wp-content/uploads/2018/07/meg2.jpg 1100w" alt="" width="700" /></p>
      <p>&nbsp;</p>
      <p>The demand from moviegoers to be entertained at a movie premiere is more than ever before. With the advent of experiential marketing, there is no need for one to get bored waiting while the cinema fills up; the future is here.</p>
      <p>&nbsp;</p>
      <p>The rise of photo- booths, VR experiences, Interactive games, and Immersive activities has changed the way we look at movie premiers.</p>
      <p>Movie goers can now be immersed in the story and be whipped away into the world of dinosaurs &ndash; as in Jurassic World, an ocean of sharks &ndash; as in The Meg and many such out of the world (pun intended) experiences.</p>
      <p><img class="alignnone wp-image-8703 size-large" src="https://thehanginghouse.com/wp-content/uploads/2018/07/Meg-1024x768.jpeg" sizes="(max-width: 1024px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/Meg-1024x768.jpeg 1024w, https://thehanginghouse.com/wp-content/uploads/2018/07/Meg-300x225.jpeg 300w, https://thehanginghouse.com/wp-content/uploads/2018/07/Meg-768x576.jpeg 768w, https://thehanginghouse.com/wp-content/uploads/2018/07/Meg.jpeg 1280w" alt="" width="700"  /></p>
      <p>&nbsp;</p>
      <p>Green screen photo booths allow the background to be changed into a movie star, a beautiful home or even a forest and allow moviegoers to take home a memory of the movie premiere.</p>
      <p>&nbsp;</p>
      <p>With a VR Pod that moves and VR glasses, movie goers experience almost a rollercoaster ride through the movie itself, allowing one to one emotional connection with the story. After all, Directors target on evoking emotions when making a movie. Experiential Marketing could be all the help directors&rsquo; need at making a movie successful.</p>
      <p>&nbsp;</p>
      <p><img class="alignnone wp-image-8706 size-large" src="https://thehanginghouse.com/wp-content/uploads/2018/07/MI6-1024x682.jpeg" sizes="(max-width: 1024px) 100vw, 1024px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/MI6-1024x682.jpeg 1024w, https://thehanginghouse.com/wp-content/uploads/2018/07/MI6-300x200.jpeg 300w, https://thehanginghouse.com/wp-content/uploads/2018/07/MI6-768x512.jpeg 768w, https://thehanginghouse.com/wp-content/uploads/2018/07/MI6.jpeg 1280w" alt="" width="700" /></p>
      <p>&nbsp;</p>
      <p>Zombies vs Aliens? We have a VR game for that. Crazy Rich Asians? How about a slow-mo money blowing photo booth? Slender Man? Think VR experience through the scariest part in the forest.</p>
      <p>All you need to do to make your upcoming movie premiere the talk of the town is call us. We&rsquo;re here to change experiences now and in the future.</p>
    </section>
  </div>
    </div>}/>)
  }

  if(id == 10){
    return(
      <Blog Title="The Power of Experiential Marketing" Author="The Housemates" Date="July 4, 2018" Body={<div style={{margin: '5px 0'}}>
      <div class="mkdf-post-text-main">
    <section class="wpb-content-wrapper">
      <div class="mkdf-post-text-main">
        <section class="wpb-content-wrapper">
          <p><strong>Three extraordinary examples of how to use experiential marketing to cut through the clutter and connect directly with the end user.</strong></p>
          <p><img class="wp-image-8675 size-full alignnone" src="https://thehanginghouse.com/wp-content/uploads/2018/07/MANDELL-for-roots-northern-lights.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/MANDELL-for-roots-northern-lights.jpg 770w, https://thehanginghouse.com/wp-content/uploads/2018/07/MANDELL-for-roots-northern-lights-300x200.jpg 300w, https://thehanginghouse.com/wp-content/uploads/2018/07/MANDELL-for-roots-northern-lights-768x512.jpg 768w" alt="EXPERIENTIAL MARKETING" width="700" /></p>
          <p>The boom in experiential marketing may lead many to think this is a relatively new marketing strategy but the truth is, the concept has been around for a long time. At the 1893 world fair, companies showcased their latest innovations in front of large groups eager for a once in a lifetime experience. Car shows in the 1920s became a popular way to market automobiles to consumers. They did more than just showcase cars in a museum-like atmosphere; they created showy events that motivated people to buy and treasure their cars. Who can forget the Miller Lite Taste Challenge designed to reach people from different demographics in memorable ways.</p>
          <p>Today, more and more brands are recognizing the opportunity live events offer to cut through the clutter and connect directly with customers.</p>
          <p>Here are three unique examples of companies marrying strategic marketing goals with innovative event design to create powerful experiential activations.</p>
          <p>&nbsp;</p>
          <h3><strong>1) Style HappyTour</strong></h3>
          <p><img class="alignnone wp-image-8666 size-full" src="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CHATTERS-2.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CHATTERS-2.jpg 700w, https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CHATTERS-2-300x220.jpg 300w" alt="EXPERIENTIAL MARKETING" width="700"  /></p>
          <p>Wildfire Experiential and Events decided to meet the needs of style-hungry people across Canada by creating the Style HappyTour. They transformed a van into a bright pink mobile salon that traveled across the country with a team of four on an epic Canadian road trip. They visited big cities, small towns and everything in between. The objective was to find people across the country having #badhairdays or feeling #blah about their style, transform them into #stylehappypeopl and get young Millennials excited about the Chatters brand.</p>
          <p><img class="alignnone wp-image-8667 size-full" src="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CHATTERS-4.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CHATTERS-4.jpg 700w, https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CHATTERS-4-300x220.jpg 300w" alt="EXPERIENTIAL MARKETING" width="700"  /></p>
          <p>The journey began in Vancouver, BC and traveled to key cities across Canada including Kelowna, Calgary, Edmonton, Regina, Winnipeg, Thunder Bay, Toronto, London and wrapped in Ottawa, ON on June 29th. Along the journey, the Style Happy team stopped in small communities with the Style Happy Van to provide a pop up salon experience offering blowouts, styles, haircuts, fun&nbsp;and Chatters Salon products. Guests were welcomed into the Style Happy Van, invited to select their style service of choice and then pampered and transformed by on-site stylists. Video captured people&rsquo;s stories on the spot and their team spread the Style Happy story beyond the communities we visited by creating rich social media content including six online episodes and tutorials. Not only did this experiential campaign generate significant excitement and walkup audiences along the route, numerous local influencers also visited to get the latest topknot, beach waves or fishtail braids, which they then shared via their Style Happy story with the<br />rest of Canada.</p>
          <p>&nbsp;</p>
          <p><strong>THE RESULTS?</strong></p>
          <ul>
            <li>Visited 5 provinces, 9 cities, and many towns across Canada</li>
            <li>Created 6 Style Happy episodes capturing footage of the pop up salon executions</li>
            <li>Visited numerous iconic Canadian places and landscapes</li>
            <li>Created complimentary online hair tutorials</li>
            <li>Had over 500 Canadian styled in the Style Happy Van</li>
          </ul>
          <p>&nbsp;</p>
          <h3><strong>2) Mentos Hello Freshness campaign, Citizen Relations</strong></h3>
          <p><img class="alignnone wp-image-8668 size-full" src="https://thehanginghouse.com/wp-content/uploads/2018/07/experiential-citizen-mentos-1.jpg" sizes="(max-width: 770px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/experiential-citizen-mentos-1.jpg 770w, https://thehanginghouse.com/wp-content/uploads/2018/07/experiential-citizen-mentos-1-300x200.jpg 300w, https://thehanginghouse.com/wp-content/uploads/2018/07/experiential-citizen-mentos-1-768x513.jpg 768w" alt="EXPERIENTIAL MARKETING" width="700"  /></p>
          <p>For the Mentos Hello Freshness campaign, Citizen Relations introduced Canadians across the country to Mentos Pure Fresh gum through a buzz-worthy experience that created shareable content for consumers. They built a story using characters called Yeti&rsquo;s from planet &ldquo;Fresh&rdquo; to form a Yeti Invasion across Canada whereby they had run out of Mentos Pure Fresh gum on their own planet and came to earth for more. Citizen created a team of 20 Yetis &mdash; custom-made costumes with Mentos blue faces, hands and feet &ndash; wearing various branded props. Each costume was designed and &ldquo;propped&rdquo; to amplify individual personalities of each Yeti. Yetis were accompanied by 50 Brand Ambassadors wearing Mentos branded t-shirts, and deployed around high-traffic downtown locations, and university campuses, in Vancouver, Toronto and Montreal.</p>
          <p>&nbsp;</p>
          <p><img class="alignnone wp-image-8670 size-full" src="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CITIZEN-MENTOS-3.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CITIZEN-MENTOS-3.jpg 700w, https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CITIZEN-MENTOS-3-300x220.jpg 300w" alt="EXPERIENTIAL MARKETING" width="700"  /></p>
          <p>The activation took place on the same day at the same time in each city requiring over 70&nbsp;activation staff. Teams hit the streets in over a dozen locations throughout downtown cores to create a &ldquo;takeover effect&rdquo; &mdash; coupled with a strong out-of-home media campaign and PR influencer program to support creating a true &ldquo;invasion&rdquo;. In addition to the guerilla street teams, the Yetis and Brand Ambassadors also invaded frosh events on university campuses continuing to make fresh connections. 10&rsquo; x 10&rsquo; branded tents anchored the experience. Students played branded Plinko games to win full size bottles of gum. Adding a 9&prime; inﬂatable Mentos Pure&nbsp;Fresh bottle to the footprint increased visibility, while also acting as a great photo backdrop for photo shoots with the Yetis. They also visited Stanley Park and Kitsilano Beach in Vancouver, dog parks, Kensington Market and Chinatown in Toronto and the Gay Village, Jacque Cartier Bridge skate park and Square Victoria in Montreal. Yetis rode bikes and skateboards, tried poutine and their ﬁrst Japa Dogs &mdash; engaging with consumers and these interactions were captured on video to create social media content which deployed over the 30-day campaign</p>
          <p><img class="alignnone wp-image-8669 size-full" src="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CITIZEN-MENTOS-2.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CITIZEN-MENTOS-2.jpg 700w, https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-CITIZEN-MENTOS-2-300x220.jpg 300w" alt="EXPERIENTIAL MARKETING" width="700"  /></p>
          <p>&nbsp;</p>
          <p><strong>THE RESULTS?</strong></p>
          <p>Consumer&rsquo;s got to meet the Yeti&rsquo;s in real life forming those connections that can only be made from a high-five, hug or sharing that memory together. Consumers were eager to share their Yeti experiences on social media, while sharing their second piece of Mentos Pure Fresh gum with a friend resulting in distributing over 174,000 samples and garnering +200 million impressions.</p>
          <p>&nbsp;</p>
          <h3><strong>3) An immersive brand experience.</strong></h3>
          <p><img class="alignnone wp-image-8671 size-full" src="https://thehanginghouse.com/wp-content/uploads/2018/07/experiential-mandell.jpg" sizes="(max-width: 770px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/experiential-mandell.jpg 770w, https://thehanginghouse.com/wp-content/uploads/2018/07/experiential-mandell-300x200.jpg 300w, https://thehanginghouse.com/wp-content/uploads/2018/07/experiential-mandell-768x513.jpg 768w" alt="EXPERIENTIAL MARKETING" width="700"  /></p>
          <p>&nbsp;</p>
          <p>Mandell Entertainment took a different approach to experiential marketing, whereby they didn&rsquo;t go to the consumer, they brought the consumer to them for a true 360<br />immersive brand experience.</p>
          <p>Using a combination of technology, social media, and live event design Mandell Entertainment created a live marketing event for Roots which completely revolutionized the way buyers and influencers interacted with the brand during its peak winter campaign.</p>
          <p>Mandell was hired to create this experience for fashion media and influencers. The objective was to use a live event to reimagine the highly anticipated and traditional holiday gift guide with a game-changing shopping experience for the beloved Canadian lifestyle brand.</p>
          <p><img class="alignnone wp-image-8672 size-full" src="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-MANDELL-2.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-MANDELL-2.jpg 700w, https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-MANDELL-2-300x221.jpg 300w" alt="EXPERIENTIAL MARKETING2" width="700"  /></p>
          <p>Roots Northern Light combined live music, technology, art, and fashion, with guests being able to shop the collection as they were seeing it walk down the runway using the &ldquo;Roots Live&rdquo; mobile app.</p>
          <p>To create this epic experience, Mandell used over 400 ft. of screen surface to cover 3 sides of the ballroom. The Roots Live app worked a lot like Shazam but for live events. It scanned the music that was in the room and picked up the ultrasonic sound waves, populating the screen with the individual products guests were seeing on stage. The&nbsp;custom musical score was created by classically trained violinist Andrew Forde with vocals performed by the up-and-coming Canadian pop artist Ryland James and accompanied by an original video viewed on huge screens covering three walls of the venue.</p>
          <p>&nbsp;</p>
          <p><img class="alignnone wp-image-8673 size-full" src="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-MANDELL-4.jpg" sizes="(max-width: 887px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-MANDELL-4.jpg 887w, https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-MANDELL-4-300x200.jpg 300w, https://thehanginghouse.com/wp-content/uploads/2018/07/EXPERIENTIAL-MANDELL-4-768x512.jpg 768w" alt="EXPERIENTIAL MARKETING" width="700"  /></p>
          <p>Everything seen on the video was completely original artwork, meant to celebrate the best of Canada from elements to artists and icons acting as the backdrop for the runway, the video also featured life-sized models, which at times, looked so realistic that they could be mistaken for ﬂwe real models walking the runway. Mandell shot the video on a green screen and then had animators&rsquo; custom animate all the backgrounds to put the models in. The result was a surreal blend between the dreamy and the mystical aspects of the holidays that paired with what was in the room creating a sensory overload.</p>
          <p>The event concluded with a performance by JUNO Award Viﬁnning multi-platinum recording artist Ruth B.</p>
          <p><img class="alignnone wp-image-8674 size-full" src="https://thehanginghouse.com/wp-content/uploads/2018/07/mandell-3.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="https://thehanginghouse.com/wp-content/uploads/2018/07/mandell-3.jpg 700w, https://thehanginghouse.com/wp-content/uploads/2018/07/mandell-3-300x220.jpg 300w" alt="EXPERIENTIAL MARKETING" width="700" /></p>
          <p>The use of social media, allowed Mandell to live stream the entire&nbsp;show, extending the live launch of the brands holiday line to the masses and opening an online portal to allow them to buy off the runway as well.</p>
          <p><strong>THE RESULTS?</strong></p>
          <ul>
            <li>Video Views +1.1MM</li>
            <li>Reach +2.7MM</li>
            <li>Impressions +7.1MM</li>
            <li>Mentions 441</li>
            <li>Engagement 43,000</li>
          </ul>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>Blog reference from&nbsp;<a href="http://canadianspecialevents.com/18519/experiential-marketing/">link</a>.</p>
        </section>
      </div>
      <div class="mkdf-post-info">&nbsp;</div>
    </section>
  </div>
    </div>}/>)

  }
}

    return (
        <div style={{height: '100%', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {data()}
        </div>
    )
}

export default Blogs