import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBusinessPoll } from '../../../../actions/businessActions';
import { useCurrentUser } from '../../../../hooks/authHooks';
import styles from '../../../../assets/Styling.css';
import { useHistory } from 'react-router-dom';

export default function AddPoll() {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const history = useHistory();
  const [name, setName] = useState('');
  const [offering1Name, setOffering1Name] = useState('');
  const [offering2Name, setOffering2Name] = useState('');
  const [offering1Description, setOffering1Description] = useState('');
  const [offering2Description, setOffering2Description] = useState('');
  const [offering1ImageUrl, setOffering1ImageUrl] = useState('');
  const [offering2ImageUrl, setOffering2ImageUrl] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [status, setStatus] = useState('Open');
  console.log(user);

  const handleChange = ({ target }) => {
    if(target.name === 'pollName') setName(target.value);
    if(target.name === 'offering1Name') setOffering1Name(target.value);
    if(target.name === 'offering2Name') setOffering2Name(target.value);
    if(target.name === 'offering1Description') setOffering1Description(target.value);
    if(target.name === 'offering2Description') setOffering2Description(target.value);
    if(target.name === 'offering1ImageUrl') setOffering1ImageUrl(target.value);
    if(target.name === 'offering2ImageUrl') setOffering2ImageUrl(target.value);
    if(target.name === 'start') setStart(target.value);
    if(target.name === 'end') setEnd(target.value);
    if(target.name === 'status') setStatus(target.value);
  };

  const poll = {
    name,
    offering1Name,
    offering2Name,
    offering1Description,
    offering2Description,
    offering1ImageUrl,
    offering2ImageUrl,
    start,
    end,
    status,
    restaurant: user?.restaurant[0]._id
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addBusinessPoll(poll));
    history.push('/business/');
  };

  return (
    <div className={styles.Form}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          name="pollName" 
          onChange={handleChange} 
          placeholder="Poll Name" 
        />
        <input 
          type="text" 
          value={offering1Name} 
          name="offering1Name" 
          onChange={handleChange} 
          placeholder="First Offering" 
        />
        <input 
          type="text" 
          value={offering2Name} 
          name="offering2Name" 
          onChange={handleChange} 
          placeholder="Second Offering" 
        />
        <input 
          type="date" 
          value={start} 
          name="start" 
          onChange={handleChange} 
          placeholder="Start date"
        />
        <input 
          type="date" 
          value={end} 
          name="end" 
          onChange={handleChange} 
          placeholder="End date" 
        />
        <input 
          type="text" 
          value={offering1Description} 
          name="offering1Description" 
          onChange={handleChange} 
          placeholder="First offering description" 
        />
        <input 
          type="text" 
          value={offering2Description} 
          name="offering2Description" 
          onChange={handleChange} 
          placeholder="First offering description" 
        />
        <input 
          type="text" 
          value={offering1ImageUrl} 
          name="offering1ImageUrl" 
          onChange={handleChange} 
          placeholder="First offering image url" 
        />
        <input type="text" 
          value={offering2ImageUrl} 
          name="offering2ImageUrl" 
          onChange={handleChange} 
          placeholder="Second offering image url" 
        />
        <select 
          value={status} 
          name="status" 
          onChange={handleChange}
        >
          <option value="open" default selected>Open</option>
          <option value="closed">Closed</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}
