import React from "react";

function Button(props) {
  const { name, type, styling, onPress } = props;
  return (
    <div>
      <button
        className={"btn btn-primary " + styling}
        type={type}
        onClick={onPress}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
