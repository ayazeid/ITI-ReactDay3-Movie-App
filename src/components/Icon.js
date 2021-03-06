import React from "react";
import { Star, StarBorder, DeleteForeverSharp } from "@mui/icons-material";
function Icon(props) {
  const { styling, color, name, toggle } = props;
  return (
    <span
      className={"  bg-none p-1 " + styling}
      style={{
        width: 60,
        height: 70,
        margin: "auto",
        marginTop: 0,
        marginRight: 3,
      }}
    >
      {name === "unstar" ? (
        <StarBorder
          name="unstar"
          style={{
            color: color,
            textShadow: "4px 6px",
            fontSize: "40px",
          }}
          onClick={toggle}
        />
      ) : name === "star" ? (
        <Star
          name="star"
          style={{
            color: color,
            textShadow: "4px 6px gold",
            fontSize: "40px",
          }}
          onClick={toggle}
        />
      ) : (
        name === "delete" && (
          <DeleteForeverSharp
            color="error"
            name="delete"
            style={{
              textShadow: "4px 6px gold",
              fontSize: "40px",
            }}
            onClick={toggle}
          />
        )
      )}
    </span>
  );
}

export default Icon;
