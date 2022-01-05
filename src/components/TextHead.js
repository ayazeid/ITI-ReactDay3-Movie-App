import React from "react";

function TextHead(props) {
  const { title, color } = props;
  return (
    <div className="p-2">
      <h1 className={"display-5  m-4 " + color}>{title}</h1>
    </div>
  );
}

export default TextHead;
