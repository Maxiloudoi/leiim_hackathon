import React from "react";
import { Container, Row, Col } from "reactstrap";
import NA from "./img/NA.png";
import EU from "./img/EU.png";
import Asia from "./img/Asia.png";
import SA from "./img/SA.png";
import Africa from "./img/Africa.png";
import Oceania from "./img/Oceania.png";

class WorldPageBackGround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }
  render() {
    return (
      <Container style={{width:"100%", padding:0}}>
        <Row style={{width:"100%"}}>
          <Col xs="4">
            <img
              src={NA}
              alt="Amérique du Nord"
              class="rounded"
              width="100%"
            />
          </Col>
          <Col xs="4">
            <img
              src={EU}
              alt="Europe"
              class="rounded"
              width="100%"
            />
          </Col>
          <Col xs="4" className="text-left">
            <img
              src={Asia}
              alt="Europe"
              class="rounded"
              width="100%"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="4" className="text-right">
            <img
              src={SA}
              alt="Europe"
              class="rounded"
              height="300"
            />
          </Col>
          <Col xs="5" className="text-left">
            {" "}
            <img
              src={Africa}
              alt="Europe"
              class="rounded"
              height="300"
            />
          </Col>
          <Col xs="3">
            {" "}
            <img
              src={Oceania}
              alt="Europe"
              class="rounded"
              height="300"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WorldPageBackGround;
