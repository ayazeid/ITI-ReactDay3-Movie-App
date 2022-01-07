import React from "react";

function TextHead(props) {
  const { title, color } = props;
  return (
    <div className="p-2">
      <h1 className={"  m-5 " + color}>{title}</h1>
    </div>
  );
}

export default TextHead;
