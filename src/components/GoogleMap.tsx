// pages/street-view.tsx
import { useEffect } from 'react';

const StreetView = () => {
  useEffect(() => {
    const initialize = () => {
      const fenway = { lat: 42.345573, lng: -71.098326 };
      const map = new google.maps.Map(document.getElementById("map"), {
        center: fenway,
        zoom: 14,
      });
      const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("pano"),
        {
          position: fenway,
          pov: {
            heading: 34,
            pitch: 10,
          },
        }
      );

      map.setStreetView(panorama);
    };

    window.initialize = initialize;
    initialize(); // Call initialize on component mount

    // Clean up the global initialize function when the component is unmounted
    return () => {
      window.initialize = undefined;
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ float: 'left', height: '100%', width: '50%' }}></div>
      <div id="pano" style={{ float: 'left', height: '100%', width: '50%' }}></div>
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=<API_KEY>&callback=initialize&v=weekly`}
        defer
      ></script>
    </div>
  );
};

export default StreetView;
