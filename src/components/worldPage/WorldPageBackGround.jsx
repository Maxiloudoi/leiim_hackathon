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
import Continent from "./Continent";

class WorldPageBackGround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      continents: false,
      climat: false,
      population: false,
      codeContinent: "",
      continentsArray: [
        {
          code: "NA",
          name: "North America",
          pop: "579 Millions",
          climat: "continental",
          link: "/NA",
          img: NA,
        },
        {
          code: "EU",
          name: "Europe",
          pop: "741,4 Millions",
          climat: "océanique",
          link: "/EU",
          img: EU,
        },
        {
          code: "AS",
          name: "Asia",
          pop: "4,463 Milliard",
          climat: "continental",
          link: "/AS",
          img: Asia,
        },
        {
          code: "SA",
          name: "South America",
          pop: "422,5 Millions",
          climat: "tropical",
          link: "/SA",
          img: SA,
        },
        {
          code: "AF",
          name: "Africa",
          pop: "1,216 Milliard",
          climat: "tropical",
          link: "/AF",
          img: Africa,
        },
        {
          code: "OC",
          name: "Oceania",
          pop: "38 Millions",
          climat: "aride",
          link: "/OC",
          img: Oceania,
        },
      ],
    };
    this.handleOnClickCont = this.handleOnClickCont.bind(this);
    this.handleOnClickClim = this.handleOnClickClim.bind(this);
    this.handleOnClickPop = this.handleOnClickPop.bind(this);
    this.handleClickNA = this.handleClickNA.bind(this);
  }
  handleClickNA() {
    this.setState({ codeContinent: "NA" });
    console.log(this.state.codeContinent);
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
      <Container style={{ width: "100%", padding: 0 }}>
        <Row className={styles.checkboxMargin}>
          <Col xs="3">
            <Checkbox
              handleOnClickCont={this.handleOnClickCont}
              handleOnClickClim={this.handleOnClickClim}
              handleOnClickPop={this.handleOnClickPop}
            />
          </Col>
          <Col xs="9">
            <h1>Voyage depuis ton canapé "Covid" !</h1>
          </Col>
        </Row>
        <Row className={styles.marginSet}>
          {this.state.continentsArray.map((continent) => {
            return (
              <Continent
                {...continent}
                showClimat={this.state.climat}
                showName={this.state.continents}
                showPop={this.state.population}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default WorldPageBackGround;
