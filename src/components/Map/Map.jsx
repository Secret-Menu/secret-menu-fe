import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import Overlay from './MapOverlay.js';
import Style from './MapStyle.css';
import Pin from '../../assets/food_pin.png';

export default function Map({ center, zoom, marker, markers }) {
  let markerNode;
  if(marker) {
    markerNode = (
      <div key={1} lat={marker.lat} lng={marker.lng}>{marker.restaurantName}</div>
    );
  }
  
  let markerNodes = [];
  if(markers.length > 0){
    markerNodes = markers.map((item, i) => {
      return (
        <div className={Style.Pin} key={i} lat={item.lat} lng={item.lng}>
          <Link key={i} to={`/restaurant/${item._id}`}>
            <img src={Pin} styles={Style.Pin}/>
          </Link>
        </div>
      );
    });
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
      defaultOptions={{ styles: Overlay }}
    >
      {markerNode ? markerNode : ''}
      {markerNodes.length > 0 ? markerNodes : ''}
    </GoogleMapReact>
  );
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  markers: PropTypes.array,
  marker: PropTypes.object
};
