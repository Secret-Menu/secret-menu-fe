import React from 'react';
import OrderCalendar from '../../OrderCalendar/OrderCalendar';
import styles from './UserProfile.css';
import UserProfileDetail from './UserProfileDetail';
import { useUserProfile } from '../../../hooks/userProfileHooks';
import RestaurantList from '../../3_Quadrant/RestaurantList';

export default function UserProfile() {
  const { user, allOrders, upcomingOrders, previousOrders, favorites, upcomingPolls, previousPolls } = useUserProfile();

  const upcomingOrderNodes = upcomingOrders.map(order => <UserProfileDetail key={order._id} order={order}/>);
  const previousOrderNodes = previousOrders.map(order => <UserProfileDetail key={order._id} order={order}/>);

  // NEW COMPONENT?
  const upcomingPollNodes = upcomingPolls.map(poll => {
    let leader = {
      name: '',
      votes: 0
    };    
    if(poll.offering1Votes > poll.offering2Votes) { 
      leader.name = poll.offering1Name;
      leader.votes = poll.offering1Votes;
    }
    else if(poll.offering1Votes < poll.offering2Votes) { 
      leader.name = poll.offering2Name;
      leader.votes = poll.offering2Votes;
    } else leader = null;
    const today = new Date();
    const diff = poll.end - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(leader) {
      return (
        <li key={poll._id}>
          <h3>{poll.name}</h3>
          <p>{`${days} days ${hours} hours left!`}</p>
          <p>{`${leader.name} is in the lead with ${leader.votes} votes`}</p>
          <p>{`${poll.offering1Name} has ${poll.offering1Votes} votes`}</p>
          <p>{`${poll.offering2Name} has ${poll.offering2Votes} votes`}</p>
        </li>
      ); 
    } else {
      return (
        <li key={poll._id}>
          <h3>{poll.name}</h3>
          <p>Currently tied</p>
        </li>
      );
    }

  });

  // NEW COMPONENT?
  const previousPollNodes = previousPolls.map(poll => {
    let winner = {
      name: '',
      votes: 0
    };     
    if(poll.offering1Votes > poll.offering2Votes) { 
      winner.name = poll.offering1Name;
      winner.votes = poll.offering1Votes;
    }
    else if(poll.offering1Votes < poll.offering2Votes) { 
      winner.name = poll.offering2Name;
      winner.votes = poll.offering2Votes;
    } else winner = null;
    if(winner) {
      return (
        <li key={poll._id}>
          <h3>{poll.name}</h3>
          <p>{`Ended on ${poll.end}`}</p>
          <p>{`The winner was ${winner.name} has ${winner.votes} votes`}</p>
        </li>
      ); 
    } else {
      return (
        <li key={poll._id}>
          <h3>{poll.name}</h3>
          <p>{`Ended on ${poll.end}`}</p>
          <p>Tie!</p>
        </li>
      );
    }
  });

  const favoriteMunge = favorites.map(favorite => favorite.restaurant);

  return (
    <div className={styles.UserProfile}>
      <h1>{user ? `${user.firstName} ${user.lastName}` : 'Loading'}</h1>
      <div className={styles.Orders}>
        <div>
          <h2>Upcoming Orders</h2>
          <ul className={styles.OrdersList}>
            {upcomingOrderNodes.length > 0 ? upcomingOrderNodes : 'No upcoming orders'}
          </ul>          
          <h2>Previous Orders</h2>
          <ul className={styles.OrdersList}>
            {previousOrderNodes.length > 0 ? previousOrderNodes : 'No previous orders'}
          </ul>
        </div>
        <div>
          <OrderCalendar orders={allOrders}/>
        </div>
      </div>
      <div className={styles.Favorites}>
        <h2>Favorite Restaurants</h2>
        <RestaurantList restaurants={favoriteMunge}/>
      </div>
      <div className={styles.Polls}>
        <h2>Upcoming Polls</h2>
        <ul>
          {upcomingPollNodes}
        </ul>  
        <h2>Previous Polls</h2>
        <ul>
          {previousPollNodes}
        </ul> 
      </div>
    </div>
  );
}
