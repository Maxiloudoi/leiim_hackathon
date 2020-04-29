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
        <Row style={{ width: "100%" }}>
          <Col xs="4">
            <img
              src={NA}
              alt="Amérique du Nord"
              className="rounded"
              width="100%"
            />
            <p className={!this.state.continents ? `${styles.displayOff}` : ""}>
              Amérique du Nord
            </p>
            <p className={!this.state.climat ? `${styles.displayOff}` : ""}>
              Climat continental
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              Population: 579 Millions
            </p>
          </Col>
          <Col xs="4">
            <img src={EU} alt="Europe" className="rounded" width="100%" />
            <p className={!this.state.continents ? `${styles.displayOff}` : ""}>
              Europe
            </p>
            <p className={!this.state.climat ? `${styles.displayOff}` : ""}>
              Climat Océanique
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              Population: 741,4 Millions
            </p>
          </Col>
          <Col xs="4" className="text-left">
            <img src={Asia} alt="Asia" className="rounded" width="100%" />
            <p className={!this.state.continents ? `${styles.displayOff}` : ""}>
              Asie
            </p>
            <p className={!this.state.climat ? `${styles.displayOff}` : ""}>
              Climat Continental
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              Population: 4,463 Milliards
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="4" className="text-right">
            <img
              src={SA}
              alt="South_America"
              className="rounded"
              height="300"
            />
            <p className={!this.state.continents ? `${styles.displayOff}` : ""}>
              Amérique du Sud
            </p>
            <p className={!this.state.climat ? `${styles.displayOff}` : ""}>
              Climat Tropical
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              Population : 422,5 Millions
            </p>
          </Col>
          <Col xs="5" className="text-left">
            {" "}
            <img src={Africa} alt="Africa" className="rounded" height="300" />
            <p className={!this.state.continents ? `${styles.displayOff}` : ""}>
              Afrique
            </p>
            <p className={!this.state.climat ? `${styles.displayOff}` : ""}>
              Climat Tropical
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              Population : 1,216 Milliards
            </p>
          </Col>
          <Col xs="3">
            {" "}
            <img src={Oceania} alt="Oceania" className="rounded" height="300" />
            <p className={!this.state.continents ? `${styles.displayOff}` : ""}>
              Océanie
            </p>
            <p className={!this.state.climat ? `${styles.displayOff}` : ""}>
              Climat Aride
            </p>
            <p className={!this.state.population ? `${styles.displayOff}` : ""}>
              Population : 38 Millions
            </p>
          </Col>
        </Row>
        <Row>
          <Checkbox
            handleOnClickCont={this.handleOnClickCont}
            handleOnClickClim={this.handleOnClickClim}
            handleOnClickPop={this.handleOnClickPop}
          />
        </Row>
      </Container>
    );
  }
}

export default WorldPageBackGround;
