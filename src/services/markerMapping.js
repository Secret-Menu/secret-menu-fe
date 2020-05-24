import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../components/Map/MapStyle.css';
import Pin from '../assets/food_pin.png';

export const mapMarker = (marker) => {
  return (
    <div key={1} lat={marker.lat} lng={marker.lng}>{marker.restaurantName}</div>
  );
};

export const mapMarkers = (markers) => {
  return markers.restaurants.map((item, i) => {
    return (
      <div className={Style.Pin} key={i} lat={item.lat} lng={item.lng}>
        <Link key={i} to={`/restaurant/${item._id}`}>
          <img src={Pin} styles={Style.Pin}/>
        </Link>
      </div>
    );
  });
}; 
