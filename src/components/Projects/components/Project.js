import {React, useEffect, useState} from 'react';
import '../../1_Assets/thh.css';
import $ from 'jquery'

const Project = (props) => { 


    const [images, setImages] = useState(props.Images)

    
      useEffect(() => {

        $('body').on('scroll', function () {
            console.log('scolll')
            // console.log($("#divs"))
            $("#divs").stop().animate({
              "marginTop": ($('body').scrollTop()) + "px",
              "marginLeft": ($('body').scrollLeft()) + "px"
            }, "slow");
          });
    },[])


    

    return (
        <div id='main' style={{width: '100vw', height: '100%', display:'flex',justifyContent:'center',alignItems:"center",background:"black"}}>

            

            <div style={{background: 'grey', height: '100%', width: '90%', marginTop:'120px',display:'flex', justifyContent: 'center', alignItems: 'center',background:"black"}}>
                
                <div style={{display:'flex', flexDirection:'column', flex:'60%'}}> 
                    {images.map((image, index) => (
                        <img key={index} src={image} width={700} style={{marginBottom:'40px'}} alt={`Image ${index}`} />
                    ))}
                </div>

                <div    style={{flex:'40%',height:'100%',display:'flex',alignSelf:'flex-start'}}>

                    <div id='divs'>
                        <h1>{props.Title}</h1>

                        <div style={{margin: '5px 0'}}>
                            {props.Body}
                        </div>
                    </div>

                </div>
            </div>

           
            
        </div>
    )
}

export default Project