

      

      import React, { useEffect } from 'react';

      const GoogleMapsComponent = () => {
        useEffect(() => {
          const apiKey = 'AIzaSyCiN_ddGa10P6ri5gS4K3wU8uXHsoRNIbM';
      
          // Load the Google Maps JavaScript API
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=maps,marker&v=beta`;
          script.async = true;
          script.defer = true;
      
          script.onerror = () => {
            console.error('Error loading Google Maps API.');
          };
      
          document.head.appendChild(script);
      
          // Initialize the 'google' object
          window.initMap = () => {
            createMap();
          };
        }, []);
      
        const createMap = () => {
          console.log('Google Maps API loaded successfully.');
          const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 55.1940803527832, lng: 24.967422485351562 },
            zoom: 14,
          });
      
          new window.google.maps.Marker({
            position: { lat: 55.1940803527832, lng: 24.967422485351562 },
            map: map,
            title: 'My location',
          });
        };
      
        return <div id="map" style={{ width: '400px', height: '400px' }}></div>;
      };
      
      export default GoogleMapsComponent;
      