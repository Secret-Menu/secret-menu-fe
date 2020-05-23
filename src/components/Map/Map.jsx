import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

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
        <div key={i} lat={item.lat} lng={item.lng}>{item.restaurantName}</div>
      );
    });
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
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
