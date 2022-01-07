import React from "react";
import { Card } from "react-bootstrap";

function InfoField(props) {
  const { name, info } = props;
  return (
    <Card.Text className="d-flex flex-row text-light fs-6">
      <span className="" style={{ marginRight: "1rem", minWidth: 100 }}>
        {name}
      </span>
      {Array.isArray(info) ? (
        info.map((i, index) => (
          <span
            key={index}
            className="text-info text-justify text-wrap "
            style={{ marginRight: 15 }}
          >
            {i.name}
          </span>
        ))
      ) : (
        <span className="text-light text-justify text-wrap">{info}</span>
      )}
    </Card.Text>
  );
}

export default InfoField;
