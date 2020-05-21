import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function RestaurantSignUp() {

  const [restaurantName, setRestaurantName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [addressState, setAddressState] = useState('OR');
  const [zipcode, setZipcode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [description, setDescription] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const history = useHistory();

  const handleChange = ({ target }) => {
    if(target.name === 'restaurantName') setRestaurantName(target.value);
    if(target.name === 'streetAddress') setStreetAddress(target.value);
    if(target.name === 'city') setCity(target.value);
    if(target.name === 'addressState') setAddressState(target.value);
    if(target.name === 'zipcode') setZipcode(target.value);
    if(target.name === 'phoneNumber') setPhoneNumber(target.value);
    if(target.name === 'website') setWebsite(target.value);
    if(target.name === 'contactEmail') setContactEmail(target.value);
    if(target.name === 'description') setDescription(target.value);
    if(target.name === 'neighborhood') setNeighborhood(target.value);
    if(target.name === 'category') setCategory(target.value);
    if(target.name === 'imageUrl') setImageUrl(target.value);
  };

  const handleRestaurantRegistration = event => {
    event.preventDefault();
    // dispatch an action to create restaurant in db and add to state
  };

  return (
    <div>
      <h2>Restaurant Registration</h2>
      <form>
        <input type="text" value={restaurantName} name="restaurantName" onChange={handleChange} placeholder="Restaurant name" />
        <input type="text" value={streetAddress} name="streetAddress" onChange={handleChange} placeholder="Street address" />
        <input type="text" value={city} name="city" onChange={handleChange} placeholder="City" />
        <select value={addressState} name="state" onChange={handleChange}>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <input type="text" value={zipcode} name="zipcode" onChange={handleChange} placeholder="Zipcode" />
        <input type="tel" value={phoneNumber} name="phone" onChange={handleChange} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone number" />
        <input type="text" value={website} name="website" onChange={handleChange} placeholder="http://www.yourwebsite.com" />
        <input type="email" value={contactEmail} name="contactEmail" onChange={handleChange} placeholder="Contact email address" />
        <input type="text" value={imageUrl} name="imageUrl" onChange={handleChange} placeholder="Image URL" />
        <textarea value={description} name="description" onChange={handleChange} placeholder="Restaurant description"></textarea>
        <select value={neighborhood} name="neighborhood" onChange={handleChange}>
          <option value="North">North</option>
          <option value="Northeast">Northeast</option>
          <option value="Northwest">Northwest</option>
          <option value="South">South</option>
          <option value="Southeast">Southeast</option>
          <option value="Southwest">Southwest</option>
        </select>
        <select value={category} name="Category" onChange={handleChange}>
          <option value="American">American</option>
          <option value="Bakery">Bakery</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Burger">Burger</option>
          <option value="Chinese">Chinese</option>
          <option value="Cocktails">Cocktails</option>
          <option value="Coffee">Coffee</option>
          <option value="Dessert">Dessert</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Korean">Korean</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican</option>
          <option value="Pizza">Pizza</option>
          <option value="Seafood">Seafood</option>
          <option value="Thai">Thai</option>
          <option value="Other">Other</option>
        </select>
        <button>Register</button>
      </form>
    </div>
  )
}