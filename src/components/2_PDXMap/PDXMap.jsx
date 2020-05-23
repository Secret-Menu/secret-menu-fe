import React from 'react';
import Map from '../Map/Map';
import { Link } from 'react-router-dom';
import { pdxAnchor } from '../../services/map-utils';
import logo from '../../assets/mainLogo.png';

export default function PDXMap() {  

  
  return (
    <div>
      <img style={{ height: '100px' }}src={logo}></img>
      <div style={{ height: '60vh', width: '50%' }}>
        <Map center={pdxAnchor.center} zoom={pdxAnchor.zoom} markers={[]}/>
        <Link to={'/portland/Northwest'}>NW</Link>
      </div>
    </div>
  );
}
