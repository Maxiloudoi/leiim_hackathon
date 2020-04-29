import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function CardCity({ id, title }) {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
            <Card>
              <CardImg top width="100%" src={id} alt={title} />
              <CardBody>
                <CardTitle>{title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardCity;
