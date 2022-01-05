import React from "react";
import { Card } from "react-bootstrap";
import { imageBaseURL } from "../network";

function Image(props) {
  const { poster } = props;
  return (
    <Card style={{ padding: 0, border: "none" }} className="bg-dark">
      <Card.Img
        className="img-fluid"
        variant="top"
        src={imageBaseURL + poster}
        style={{ width: 400 }}
      />
    </Card>
  );
}

export default Image;
