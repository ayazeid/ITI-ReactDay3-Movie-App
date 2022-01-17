import React from "react";

function Note(props) {
  const { note, styling } = props;
  return (
    <div
      className={"container shadow rounded-pill  " + styling}
      style={{
        width: 600,
        height: 100,
        margin: "auto",
        marginTop: "10rem",
        padding: "2rem",
      }}
    >
      <p className={"text-center bg-transparent fs-3 "} style={{}}>
        {note}
      </p>
    </div>
  );
}

export default Note;
