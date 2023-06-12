import React from 'react';

import classes from './HebrewDate.module.css'


const HebrewDate = (props) => {
  return (
    <div>
      <h2 className={classes.hebrew_date} >here is your hebrew date : </h2>
      <h3 className={classes.hebrew_date} >{props.convertedHebrewDate}</h3>
    </div>
  );
};

export default HebrewDate;
