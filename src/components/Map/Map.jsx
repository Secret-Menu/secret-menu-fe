import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Overlay from './MapOverlay.js';
import { mapMarkers, mapMarker } from '../../services/markerMapping.js';

export default function Map({ center, zoom, marker, markers }) {
  let markerNode;
  if(marker) { markerNode = mapMarker(marker);}

  let markerNodes = [];
  if(markers.restaurants) markerNodes = mapMarkers(markers);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
      center={center}
      defaultZoom={zoom}
      defaultOptions={{ styles: Overlay }}
    >
      {markerNode ? markerNode : null}
      {markerNodes ? markerNodes : null}
    </GoogleMapReact>
  );
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  markers: PropTypes.object,
  marker: PropTypes.object
};
