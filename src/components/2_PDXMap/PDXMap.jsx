import React from 'react';
import Map from '../Map/Map';
import { Link } from 'react-router-dom';
import logo from '../../assets/mainLogo.png';

export default function PDXMap() {
  const center = {
    lat: 45.52, 
    lng: -122.67,
  };
  const zoom = 12;
  
  return (
    <div>
      <img style={{ height: '100px'}}src={logo}></img>
      <div style={{ height: '60vh', width: '50%' }}>
        <Map center={center} zoom={zoom} />
        <Link to={'/portland/Northwest'}>NW</Link>
      </div>
    </div>
  );
}
