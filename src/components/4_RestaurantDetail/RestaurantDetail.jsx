import React from 'react';
import OfferingDetail from '../6_OfferingDetail/OfferingDetail';
import styles from './RestaurantDetail.css';
import PollCarousel from '../5_PollDetail/PollCarousel';

export default function RestaurantDetail() {
  const restaurant = {
    address: {
      'streetAddress': '456 Main St.',
      'city': 'Portland',
      'state': 'OR',
      'zipcode': 97218
    },
    _id: '5ec6d024caec760377a4e2a6',
    restaurantName: 'Chris\' Bamboo Grove',
    phoneNumber: '503-555-6666',
    category: 'Other',
    quadrant: 'Southwest',
    description: 'Bamboo Grove description goes here',
    imageUrl: 'https://www.hawaiimagazine.com/sites/default/files/sites/default/files/Hawaiian-food-ThinkstockPhotos-488006550.jpg',
    websiteUrl: 'https://chrisbamboogrove.com',
    email: 'chris@bamboogrove.com'
  };
  const offerings = [
    {
      dietaryRestriction: [
        'None'
      ],
      _id: '5ec6d024caec760377a4e2aa',
      dishName: 'Take & Bake Pizza',
      imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/20/0/FNK_Gluten-Free-Mushroom-Ricotta_Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1483737096931.jpeg',
      description: '18 inch mushroom pizza ready to bake - just pop in the over for 15 minutes!',
      numRemaining: 25,
      servingSize: 4,
      price: 2500,
      restaurant: '5ec6d024caec760377a4e2a6'
    },
    {
      dietaryRestriction: [
        'None'
      ],
      _id: '5ec6d024caec760377a4e2ab',
      dishName: 'Hawaiian Mixed Plate',
      imageUrl: 'https://www.thepitchkc.com/content/uploads/2019/06/Hawaiian_Bros___Pitch___20190515_302.5cf04650719e1.jpg',
      description: 'Shoyu chicken and kahlua pork, white rice, mac salad, and green salad',
      numRemaining: 50,
      servingSize: 2,
      price: 3000,
      restaurant: '5ec6d024caec760377a4e2a5'
    },
    {
      dietaryRestriction: [
        'None'
      ],
      _id: '5ec6d024caec760377a4e2a9',
      dishName: 'Taco Tuesday Kit',
      imageUrl: 'https://elcocinerotlh.com/wp/wp-content/uploads/2019/10/taco-kit-2-02126-2000x1200.jpg',
      description: 'Comes with 12 corn tortillas, pollo asado, tomato, onions, cilantro, cotija cheese, and sides of rice and black beans',
      numRemaining: 40,
      servingSize: 4,
      price: 4000,
      restaurant: '5ec6d024caec760377a4e2a8'
    },
    {
      dietaryRestriction: [
        'None'
      ],
      _id: '5ec6d024caec760377a4e2ac',
      dishName: 'Margarita Kit',
      imageUrl: 'https://media.bahamabreeze.com/en_us/images/product/ClassicMargarita.jpg',
      description: 'A pitcher of our famous secret margarita mix, 2 limes, and chili salt - just add tequila!',
      numRemaining: 100,
      price: 5000,
      restaurant: '5ec6d024caec760377a4e2a5'
    },
    {
      dietaryRestriction: [
        'None'
      ],
      _id: '5ec6d024caec760377a4e2ad',
      dishName: 'Sunday Brunch Box',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/K93HL7yf7pTQAMXPFb0_7GKnIDw=/0x0:1767x1413/1200x675/filters:focal(743x566:1025x848)/cdn.vox-cdn.com/uploads/chorus_image/image/66646052/Bar_King_brunch_box.0.jpg',
      description: '1lb bag of Nossa Familia Full Cycle coffee beans, a tray of take-and-bake cinnamon rolls, half a kale and spinach quiche, bottle of bubbly and fresh-squeezed OJ!',
      numRemaining: 30,
      servingSize: 4,
      price: 6000,
      restaurant: '5ec6d024caec760377a4e2a8'
    }
  ];
  const polls = [
    {
      _id: '5ec6d025caec760377a4e2e0',
      name: 'Friday Night BBQ',
      end: '1970-01-01T00:20:34.567Z',
      status: 'open',
      restaurant: '5ec6d024caec760377a4e2a8',
      offering1Name: 'Baby Back Ribs',
      offering1Votes: 0,
      offering1ImageUrl: 'https://www.simplyrecipes.com/wp-content/uploads/2019/10/IP-Baby-Back-Ribs-Lead-2.jpg',
      offering1Description: 'Full rack of smokey baby back ribs, with an accompaniment of cornbread muffins, spinach salad, and bbq baked beans',
      offering2Name: 'Pulled Pork Slider Sammies',
      offering2Votes: 0,
      offering2ImageUrl: 'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2016/6/10/0/CCKHWSP2H_Pulled-Pork-Sliders_s4x3.jpg.rend.hgtvcom.616.462.suffix/1465587520182.jpeg',
      offering2Description: 'Build your own pulled pork slider sammies - comes with coleslaw and potato salad'
    },
    {
      _id: '5ec6d025caec760377a4e2e0',
      name: 'This is Different',
      end: '1970-01-01T00:20:34.567Z',
      status: 'open',
      restaurant: '5ec6d024caec760377a4e2a8',
      offering1Name: 'Food',
      offering1Votes: 0,
      offering1ImageUrl: 'https://www.simplyrecipes.com/wp-content/uploads/2019/10/IP-Baby-Back-Ribs-Lead-2.jpg',
      offering1Description: 'Full rack of smokey baby back ribs, with an accompaniment of cornbread muffins, spinach salad, and bbq baked beans',
      offering2Name: 'Meat',
      offering2Votes: 0,
      offering2ImageUrl: 'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2016/6/10/0/CCKHWSP2H_Pulled-Pork-Sliders_s4x3.jpg.rend.hgtvcom.616.462.suffix/1465587520182.jpeg',
      offering2Description: 'Build your own pulled pork slider sammies - comes with coleslaw and potato salad'
    }
  ];

  const offeringNodes = offerings.map(offering => {
    return (<OfferingDetail offering={offering} key={offering._id}/>);
  });

  return (
    <div className={styles.RestaurantDetail}>
      <h1>Restaurant Info</h1> 
      <section className={styles.RestaurantMain}>
        <h2>Live Votes</h2>
        <div className={styles.Polls}>
          <PollCarousel polls={polls}/>
        </div> 
      </section>
      <section className={styles.RestaurantMain}>
        <h2>Current Offerings</h2>
        <ul>
          {offeringNodes}
        </ul>
      </section>
    </div>
  );
}
