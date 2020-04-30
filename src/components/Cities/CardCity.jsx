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

function CardCity({id, image, title, wiki, player}) {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
            <Card>
              <CardImg top width="100%" src={image} alt={title} />
              <CardBody>
                <CardTitle>{title}</CardTitle>
                <p>{wiki}</p>
                <iframe id={id} src={player} title={title}></iframe>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardCity;
