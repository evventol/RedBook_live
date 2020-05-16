import React from "react";
import styles from "../aside.module.scss";
import InputCheckbox from "../../sidebar/inputCheckbox";

const Biodiversity = (props) => {
  let biodiversityCheckbox = props.biodiversityData.map((input) => (
    <InputCheckbox id={input.id} htmlFor={input.htmlFor} title={input.title} />
  ));
  return (
    <>
      <h3 className={styles.h3 + " " + styles.title}>Біорізноманіття</h3>
      {biodiversityCheckbox}
    </>
  );
};

export default Biodiversity;
