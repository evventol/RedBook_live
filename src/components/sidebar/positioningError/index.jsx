import React, { useState } from "react";
import styles from "../sidebar.module.scss";
import InputCheckbox from "../inputCheckbox";

const PositioningError = (props) => {
  const [isShown, setIsShown] = useState(true);

  const toggleFIeldset = () => setIsShown(!isShown);
  let positioningErrorCheckbox = props.positioningErrorData.map((input) => (
    <InputCheckbox id={input.id} htmlFor={input.htmlFor} title={input.title} />
  ));
  return (
    <div className={styles.dataRegister}>
      <h2 className={styles.h2} onClick={toggleFIeldset}>
        Похибка позиціювання
      </h2>

      {isShown && positioningErrorCheckbox}
    </div>
  );
};

export default PositioningError;
