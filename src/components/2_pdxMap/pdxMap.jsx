import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';

export default function PDXMap() {
  const center = {
    lat: 45.52, 
    lng: -122.67,
  };
  const zoom = 12;
  return (
    <div>
      <h1>Crowd Pleaser Map Component</h1>
      <div style={{ height: '60vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <div lat={45.52} lng={-122.66}>🍔</div>
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>
        <Link to={'/portland/Northwest'}>NW</Link>
      </div>
    </div>
  );
}
