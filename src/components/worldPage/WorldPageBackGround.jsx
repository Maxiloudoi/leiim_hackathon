import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./WorldPageBackground.module.css";
import NA from "./img/NA.png";
import EU from "./img/EU.png";
import Asia from "./img/Asia.png";
import SA from "./img/SA.png";
import Africa from "./img/Africa.png";
import Oceania from "./img/Oceania.png";
import Checkbox from "../Checkbox.jsx";

class WorldPageBackGround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      continents: false,
      climat: false,
      population: false,
    };
    this.handleOnClickCont = this.handleOnClickCont.bind(this);
    this.handleOnClickClim = this.handleOnClickClim.bind(this);
    this.handleOnClickPop = this.handleOnClickPop.bind(this);
  }

  handleOnClickCont() {
    this.setState({ continents: !this.state.continents });
  }
  handleOnClickClim() {
    this.setState({ climat: !this.state.climat });
  }
  handleOnClickPop() {
    this.setState({ population: !this.state.population });
  }
  render() {
    return (
      <Container
        className={styles.colorred}
        style={{ width: "100%", padding: 0 }}
      >
        <Row className={styles.marginSet}>
          <Col xs="4">
            <h4
              className={!this.state.continents ? `${styles.displayOff}` : ""}
            >
              Amérique du Nord
            </h4>
            <p
              id={styles.marginClimatna}
              className={!this.state.climat ? `${styles.displayOff}` : ""}
            >
              <b>Climat</b>: Continental
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              <b>Population</b>: 579 Millions
            </p>
            <img
              src={NA}
              alt="Amérique du Nord"
              className={styles.imag}
              width="100%"
            />
          </Col>
          <Col xs="4">
            <h4
              className={!this.state.continents ? `${styles.displayOff}` : ""}
            >
              Europe
            </h4>
            <p
              id={styles.marginClimateu}
              className={!this.state.climat ? `${styles.displayOff}` : ""}
            >
              <b>Climat</b>: Océanique
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              <b>Population</b>: 741,4 Millions
            </p>
            <img src={EU} alt="Europe" className={styles.imag} width="100%" />
          </Col>
          <Col xs="4">
            <h4
              className={!this.state.continents ? `${styles.displayOff}` : ""}
            >
              Asie
            </h4>
            <p
              id={styles.marginClimat3}
              className={!this.state.climat ? `${styles.displayOff}` : ""}
            >
              <b>Climat</b>: Continental
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              <b>Population</b>: 4,463 Milliards
            </p>
            <img src={Asia} alt="Asia" className={styles.imag} width="100%" />
          </Col>
        </Row>
        <Row>
          <Col xs="1">
            <Checkbox
              handleOnClickCont={this.handleOnClickCont}
              handleOnClickClim={this.handleOnClickClim}
              handleOnClickPop={this.handleOnClickPop}
            />
          </Col>
          <Col xs="3">
            <img
              src={SA}
              alt="South_America"
              className={styles.imag}
              height="200vw"
            />
            <h4
              className={!this.state.continents ? `${styles.displayOff}` : ""}
            >
              Amérique du Sud
            </h4>
            <p
              id={styles.marginClimat4}
              className={!this.state.climat ? `${styles.displayOff}` : ""}
            >
              <b>Climat</b>: Tropical
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              <b>Population</b>: 422,5 Millions
            </p>
          </Col>
          <Col xs="5">
            {" "}
            <img
              src={Africa}
              alt="Africa"
              className={styles.imag}
              height="200vw"
            />
            <h4
              className={!this.state.continents ? `${styles.displayOff}` : ""}
            >
              Afrique
            </h4>
            <p
              id={styles.marginClimat5}
              className={!this.state.climat ? `${styles.displayOff}` : ""}
            >
              <b>Climat</b>: Tropical
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              <b>Population</b>: 1,216 Milliards
            </p>
          </Col>
          <Col xs="3">
            {" "}
            <img
              src={Oceania}
              alt="Oceania"
              className={styles.imag}
              height="200vw"
            />
            <h4
              className={!this.state.continents ? `${styles.displayOff}` : ""}
            >
              Océanie
            </h4>
            <p
              id={styles.marginClimat6}
              className={!this.state.climat ? `${styles.displayOff}` : ""}
            >
              <b>Climat</b>: Aride
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              <b>Population</b>: 38 Millions
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WorldPageBackGround;
