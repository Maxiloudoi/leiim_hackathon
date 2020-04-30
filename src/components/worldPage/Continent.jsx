import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./WorldPageBackground.module.css";

function Continent({
  link,
  pop,
  climat,
  img,
  name,
  showName,
  showClimat,
  showPop,
}) {
  return (
    <Col xs="4">
      <h4 className={!showName ? `${styles.displayOff}` : ""}>{name}</h4>
      <p
        id={styles.marginClimatna}
        className={!showClimat ? `${styles.displayOff}` : ""}
      >
        <b>Climat</b>: {climat}
      </p>
      <p className={!showPop ? `${styles.displayOff}` : ""}>
        <b>Population</b>: {pop}
      </p>
      <Link to={link}>
        <img
          src={img}
          alt="Amérique du Nord"
          className={styles.imag}
          width="200vw"
        />
      </Link>
    </Col>
  );
}
export default Continent;
