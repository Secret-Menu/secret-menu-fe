import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import styles from './OrderCalendar.css';

const OrderCalendar = ({ orders }) => {
  
  const orderReduce = orders.reduce((acc, curr) => {
    const match = acc.find((order) => curr.date.getDate() === order.date.getDate());
    if(match) {
      const newAcc = acc.filter(replace => replace !== match);
      const newOrder = {
        info: `${curr.info},\n ${match.info}`,
        date: match.date
      };
      acc = [newOrder, ...newAcc];
    }
    else acc = [curr, ...acc];
    return acc;
  }, []);

  const tileContent = ({ date, view }) => { 
    if(view !== 'month') return null;
    const getInfo = () => {
      const order = orderReduce.find(order => order.date.getDate() === date.getDate());
      return order.info;
    };
    const monthYear = (order) => {
      if(order.date.getDate() !== date.getDate()) return false;
      if(order.date.getMonth() !== date.getMonth()) return false;
      if(order.date.getYear() !== date.getYear()) return false;
      return true;
    };
    return (
      <p>
        { orderReduce.find(order => monthYear(order, date)) ? <span>{getInfo()}</span> : null }
      </p>
    );
  };

  const tileClassName = ({ date, view }) => { 
    if(view !== 'month') return null;
    const monthYear = (order) => {
      if(order.date.getDate() !== date.getDate()) return false;
      if(order.date.getMonth() !== date.getMonth()) return false;
      if(order.date.getYear() !== date.getYear()) return false;
      return true;
    };
    return orderReduce.find(order => monthYear(order, date)) ? 'order_day' : null;
  };

  return (
    <div>
      <Calendar className={styles.reactCalendar}
        tileContent={tileContent}
        tileClassName={tileClassName}
      />
    </div>
  );};

OrderCalendar.propTypes = {
  orders: PropTypes.array,
  date: PropTypes.string,
  view: PropTypes.string
};

export default OrderCalendar;
