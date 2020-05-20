const sampleState = {
  user: {
    id: '1h12u123',
    firstName: 'Josh',
    lastName: 'Ford',
    email: 'thisisjoshford@gmail.com',
    role: 'user',
    website: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: 0
    },
    area: 'NW',
    description: '',
    favRestaurants: [
      'restID123245',
      'restID1234ew',
    ],
  },
  messages: [
    {
      title: '',
      body: '',
      link: '/restaurant/dishID',
      active: true
    }
  ],
  cart: {
    dishes:[
      {
        id: 'dishID123',
        price: 1200,
        qty: 1
      },
      { 
        id: 'dishID124',
        price: 1050,
        qty: 1
      }
    ],
    total: 2250,
    orderDate: 1234215
  },
  restaurants: [
    {
      id: 'rest1234',
      name: 'Bamboo Grove',
      address: '1234 Something St.',
      City: 'Portland',
      State: 'OR',
      Zip: 97212,
      phone: '(503)555-1212',
      email: 'info@bamboogrove.com',
      description: 'Chill eatery offering hearty plates of Hawaiian fare, plus tropical decor, cocktails & music.',
      area: 'SW',
      url: 'http://www.bamboogrove.com',
      img_url: 'http://www.bamboogrove.com/logo.jpg',
      polls: [
        {
          dish1Name: 'chicken',
          dish1Price: 1300,
          dish1Votes: 0,
          dish2Name: 'beef',
          dish2Price: 1000,
          dish2Votes: 5,
          active: true
        }
      ],
      activeDishes: [
        {
          dishID: 'dishID12345',
          dishName: 'Baked Tofu',
          img_url: 'http://www.bamboogrove.com/tofuDish.jpg',
          description: 'yummy tofu dish',
          dishPrice: 1000,
          qty: 10,
          active: true
        }
      ]
    }
  ],
  orders: [
    {
      id: 'orderID123',
      restaurantId: 'rest1234',
      order: [
        dishId1,
        dishId2,
        dishId3
      ]
    }
  ],
  adminInfo: {
    activeOrders: [
      orderId1,
      orderId2,
      orderId3
    ],
    activePolls: [
      pollId1,
      pollId2,
      pollId3
    ],
    activeDishes: [
      dishId1,
      dishId2,
      dishId3
    ]
  },
  adminDishes: [
    {
      dishID: 'dishID12345',
      dishName: 'Baked Tofu',
      img_url: 'http://www.bamboogrove.com/tofuDish.jpg',
      description: 'yummy tofu dish',
      dishPrice: 1000,
      qty: 10,
      active: true
    }
  ],
  adminPolls: [
    {
      dish1Name: 'chicken',
      dish1Price: 1300,
      dish1Votes: 0,
      dish2Name: 'beef',
      dish2Price: 1000,
      dish2Votes: 5,
      active: true
    }
  ]
};

export default sampleState;
