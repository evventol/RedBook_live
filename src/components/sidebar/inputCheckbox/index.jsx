import React from "react";
import styles from "../../aside/aside.module.scss";

const InputCheckbox = (props) => {
  return (
    <p>
      <input
        className={styles.inputCheckbox}
        id={props.id}
        type="checkbox"
        name="option"
      />
      <label className={styles.labelCheckbox} htmlFor={props.htmlFor}>
        {props.title}
      </label>
    </p>
  );
};

export default InputCheckbox;
