import React from 'react';
import { useRestaurantSignUp } from '../../../hooks/authHooks';
import styles from './Styling.css';


export default function RestaurantSignUp() {
  const {
    restaurantName,
    streetAddress,
    city,
    addressState,
    zipcode,
    phoneNumber,
    websiteUrl,
    email,
    imageUrl,
    description,
    quadrant,
    category,
    handleChange,
    handleRestaurantReg
  } = useRestaurantSignUp();

  return (
    <div className={styles.Form}>
      <h2>Restaurant Registration</h2>
      <form onSubmit={handleRestaurantReg}>
        <div>
          <input 
            type="text" 
            value={restaurantName} 
            name="restaurantName" 
            onChange={handleChange} 
            placeholder="Restaurant name" 
          />
          <input 
            type="text" 
            value={streetAddress} 
            name="streetAddress" 
            onChange={handleChange} 
            placeholder="Street address" 
          />
          <input 
            type="text" 
            value={city} 
            name="city" 
            onChange={handleChange} 
            placeholder="City" 
          />
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
          <input 
            type="text" 
            value={zipcode} 
            name="zipcode"
            onChange={handleChange} 
            placeholder="Zipcode" 
          />
          <input 
            type="tel" 
            value={phoneNumber} 
            name="phoneNumber" 
            onChange={handleChange} 
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
            placeholder="Phone number" 
          />
          <input 
            type="text" 
            value={websiteUrl} 
            name="websiteUrl" 
            onChange={handleChange} 
            placeholder="http://www.yourwebsite.com" 
          />
          <input 
            type="email" 
            value={email} 
            name="email" 
            onChange={handleChange} 
            placeholder="Contact email address" 
          />
          <input 
            type="text" 
            value={imageUrl} 
            name="imageUrl" 
            onChange={handleChange} 
            placeholder="Image URL" 
          />
          <textarea 
            value={description} 
            name="description" 
            onChange={handleChange} 
            placeholder="Restaurant description">
          </textarea>
          <br/>
          <span>area: </span>
          <select value={quadrant} name="quadrant" onChange={handleChange}>
            <option value="N">North</option>
            <option value="NE">Northeast</option>
            <option value="NW">Northwest</option>
            <option value="S">South</option>
            <option value="SE">Southeast</option>
            <option value="SW">Southwest</option>
          </select>
          <span>category: </span>
          <select value={category} name="category" onChange={handleChange}>
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
          <br/>
          <br/>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}
