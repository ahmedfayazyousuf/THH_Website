//  'AIzaSyCiN_ddGa10P6ri5gS4K3wU8uXHsoRNIbM';

import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{width:'100%',height:'100vh',margin:'auto'}}>
      {/* <div style={{ height: '500px' }}> */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCiN_ddGa10P6ri5gS4K3wU8uXHsoRNIbM" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      {/* </div> */}

    </div>
    
  );
}
