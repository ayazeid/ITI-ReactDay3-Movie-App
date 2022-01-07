import React from "react";
import { Card } from "react-bootstrap";
import InfoField from "./InfoField";

function Description(props) {
  const { movie } = props;
  return (
    <Card style={{ padding: 0, border: "none" }} className="bg-dark">
      <Card.Body className="text-start">
        <InfoField name="Title" info={movie.title} />
        <InfoField name="Overview" info={movie.overview} />
        <InfoField name="Release Date" info={movie.release_date} />
        <InfoField name="Original Language" info={movie.original_language} />
        <InfoField name="Genres" info={movie.genres} />

        <InfoField
          name="Production Companies"
          info={movie.production_companies}
        />
        <InfoField
          name="Production Countries"
          info={movie.production_countries}
        />
      </Card.Body>
    </Card>
  );
}

export default Description;
