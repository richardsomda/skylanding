// GoogleMap.tsx

import React, { useEffect } from 'react';

// Add your Google Maps API key here
const googleMapsApiKey = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg';

interface MyLatlng {
  lat:  -25.363;
  lng: 131.04;
}

const GoogleMap: React.FC = () => {
  useEffect(() => {
    const initMap = () => {
      const myLatlng: MyLatlng = { lat: -25.363, lng: 131.044 };
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatlng,
      });

      const marker = new google.maps.Marker({
        position: myLatlng,
        map,
        title: 'Click to zoom',
      });

      map.addListener('center_changed', () => {
        window.setTimeout(() => {
          map.panTo(marker.getPosition());
        }, 3000);
      });

      marker.addListener('click', () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
      });
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap&v=weekly`;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ height: '100vh' }} />;
};

export default GoogleMap;
