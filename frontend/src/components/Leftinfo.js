import React from "react";
import "../scss/Main.scss";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
const Leftinfo = (props) => {
  return (
    <div className="leftinfo mt-5 mb-5">
      <div className="container">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={3}>
              <ListGroup variant="flush" className="links">
                <ListGroup.Item action className="font-weight-bold">
                  {props.firstlink}
                </ListGroup.Item>
                <ListGroup.Item action href="#link1">
                  {props.secondlink}
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  {props.thirdlink}
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  {props.fourthlink}
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  {props.fivelink}
                </ListGroup.Item>
                <ListGroup.Item action href="#link5">
                  {props.sixlink}
                </ListGroup.Item>
                <ListGroup.Item action href="#link6">
                  {props.sevenlink}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">{props.first}</Tab.Pane>
                <Tab.Pane eventKey="#link2">{props.second}</Tab.Pane>
                <Tab.Pane eventKey="#link3">{props.third}</Tab.Pane>
                <Tab.Pane eventKey="#link4">{props.four}</Tab.Pane>
                <Tab.Pane eventKey="#link5">{props.five}</Tab.Pane>
                <Tab.Pane eventKey="#link6">{props.six}</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Leftinfo;
