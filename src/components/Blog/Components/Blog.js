import React from 'react';


const Blog = (props) => { 
    

    return (
        <div style={{height: '100%', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '100%', width: '100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>

                <div style={{width: '90%', height: '150px', position: 'fixed', top: '0px', background:'black', display: 'flex', alignItems: 'flex-end'}}>
                    <h1 className='special' style={{color: '#00f526', marginLeft: '18px', fontSize: '30px'}}>BLOGS<span> / </span> <span className="special" style={{fontSize: '30px'}}>{props.Title}</span> </h1>
                </div>

                <div style={{height:'100%', width: '1000px', border: '0.5px solid transparent', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', marginTop: '100px'}}>

                    <div style={{margin: '80px', border: '0.2px solid #00f526', padding: '40px' }}>
                        <p style={{fontStyle: 'italic', fontSize: '90%', color: 'grey'}} >By {props.Author},</p>
                        <p style={{fontStyle: 'italic', marginTop: '-20px', fontSize: '90%', color: 'grey', marginBottom: '10px'}}>{props.Date}</p>

                        <h1>{props.Title}</h1>
                        {props.Body}
                    </div>

                </div>
                
                
                
            </div>
        </div>
    )
}

export default Blog