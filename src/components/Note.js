import React from "react";

function Note(props) {
  const { note, styling } = props;
  return (
    <div
      className={"container shadow rounded-pill  " + styling}
      style={{
        width: 600,
        height: 200,
        margin: "auto",
        marginTop: "10rem",
        padding: "4rem",
      }}
    >
      <p className={"text-center bg-transparent fs-2 "} style={{}}>
        {note}
      </p>
    </div>
  );
}

export default Note;
