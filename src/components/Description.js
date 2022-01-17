import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../translatation/translation";
import InfoField from "./InfoField";

function Description(props) {
  const { movie } = props;
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <Card
      style={{ padding: 0, border: "none" }}
      className="bg-dark"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Card.Body className={lang === "ar" ? "text-end" : "text-start"}>
        <InfoField name={content[lang].title} info={movie.title} />
        <InfoField name={content[lang].overview} info={movie.overview} />
        <InfoField
          name={content[lang].release_date}
          info={movie.release_date}
        />
        <InfoField
          name={content[lang].original_lang}
          info={movie.original_language}
        />
        <InfoField name={content[lang].genres} info={movie.genres} />

        <InfoField
          name={content[lang].production_companies}
          info={movie.production_companies}
        />
        <InfoField
          name={content[lang].production_countries}
          info={movie.production_countries}
        />
      </Card.Body>
    </Card>
  );
}

export default Description;
