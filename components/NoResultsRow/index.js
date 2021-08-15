import React from "react";
import Icon from "../Icon";
import { Col, ListGroup, Row } from "react-bootstrap";
import { emptyIconLight } from "../../constants/icon";

const NoResultsRow = ({ message = "None.", rowClassName = "" }) => (
  <ListGroup.Item className="list-group-item text-muter">
    <Row className={`flex-nowrap ${rowClassName}`}>
      <Col className="col-auto">
        <Icon icon={emptyIconLight} fixedWidth={true} />
      </Col>
      <Col className="p-0">{message}</Col>
    </Row>
  </ListGroup.Item>
);

export default NoResultsRow;
