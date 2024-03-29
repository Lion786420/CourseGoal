import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputStatus, setInputStatus] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (enteredValue.trim().length > 0) {
      setInputStatus(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setInputStatus(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${
          !inputStatus && styles.invalid
        }`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          className={`${!inputStatus ? styles.invalid : ""}`}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
