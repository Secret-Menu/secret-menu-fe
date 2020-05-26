import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantList from '../3_Quadrant/RestaurantList';

export default function PDXQuadrants({restaurants}) {
  const quadrants = [
    {
      name: 'North',
      abbrev: 'N'
    },
    {
      name: 'Northeast',
      abbrev: 'N'
    },
    {
      name: 'Northwest',
      abbrev: 'NW'
    },
    {
      name: 'South',
      abbrev: 'S'
    },
    {
      name: 'Southeast',
      abbrev: 'SE'
    },
    {
      name: 'Southwest',
      abbrev: 'SW'
    }
  ];

  const quadrantLists = quadrants.map(quadrant => 
    <div>
      <Link to={`/portland/${quadrant.abbrev}`}>{quadrant.name}</Link>
      <RestaurantList restaurants={restaurants.restaurants} />
    </div>
  );

  return (
    <section>
      {quadrantLists}
    </section>
  );
};

