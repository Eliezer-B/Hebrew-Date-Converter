import React from "react";
import { useState } from "react";
import HebrewDate from "./HebrewDate";

import classes from "./EnterGregorianDate.module.css";

const EnterGregorianDate = () => {
  const [enterDate, setEnterDate] = useState("");
  const [showHebrewDate, setShowHebrewDate] = useState("");

  async function getHebrewDate(date) {
    const response = await fetch(
      `https://www.hebcal.com/converter?cfg=json&date=${date}&g2h=1&strict=1`
    );
    const jsonData = await response.json();
    setShowHebrewDate(jsonData.hebrew);
  }

  const converDatetHandler = (e) => {
    e.preventDefault();
    getHebrewDate(enterDate);
  };

  const dateInputHandler = (e) => {
    setEnterDate(e.target.value);
  };

  const resetData = () => {
    setEnterDate("");
    setShowHebrewDate("");
  };

  return (
    <div>
      <h1 className={classes.c_form}>Hebrew Date Converter</h1>
      <form>
        <label>
          <p className={classes.c_form_input}>Choose a date to convert :</p>
          <p className={classes.c_form_input}>
            <input
              className={classes.c_form}
              onChange={dateInputHandler}
              type="date"
              name="date"
              value={enterDate}
            />
          </p>
        </label>
        <p className={classes.c_form}>
          {!showHebrewDate ? (
            <button onClick={converDatetHandler}>Convert Date</button>
          ) : (
            ""
          )}
        </p>
      </form>
      <p>
        {showHebrewDate ? (
          <HebrewDate convertedHebrewDate={showHebrewDate} />
        ) : (
          ""
        )}
        <p className={classes.c_form}>
          {showHebrewDate ? (
            <button onClick={resetData}>Convert another date </button>
          ) : (
            ""
          )}
        </p>
      </p>
    </div>
  );
};

export default EnterGregorianDate;
