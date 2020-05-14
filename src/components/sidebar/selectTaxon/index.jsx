import React, { useState } from "react";
import styles from "./selectTaxon.module.scss";
import InputCheckbox from "../inputCheckbox";

const SelectTaxon = (props) => {
  const [isShown, setIsShown] = useState(true);

  const toggleFIeldset = () => setIsShown(!isShown);

  let selectTaxonCheckbox = props.selectTaxonData.map((input) => (
    <InputCheckbox id={input.id} htmlFor={input.htmlFor} title={input.title} />
  ));

  return (
    <div className={styles.taxon}>
      <h2 className={styles.h2} onClick={toggleFIeldset}>
        Назва Таксону
      </h2>
      {isShown && (
        <fieldset className={styles.fieldset + " " + styles.fieldsetActive}>
          <legend className={styles.legend}>Охоронний статус</legend>
          {selectTaxonCheckbox}
          <legend className={styles.legend + " " + styles.legendTaxon}>
            Джерело даних
          </legend>
        </fieldset>
      )}
    </div>
  );
};

export default SelectTaxon;
