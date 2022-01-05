import React, { useState } from "react";

function Input(props) {
  const [input, setInput] = useState("");
  const { title, name, type, styling, inputHandle, errmsg, must } = props;
  const handleChange = (e) => {
    setInput(e.target.value);
    inputHandle(e);
  };
  return (
    <div className="m-3 p-2">
      <label htmlFor={type} className="form-label float-start ">
        {title}
      </label>
      <input
        className={"form-control " + styling}
        type={type}
        placeholder={title}
        name={name}
        value={input}
        onChange={(e) => handleChange(e)}
        required={must && true}
      />
      <span className="float-start text-danger">{errmsg}</span>
    </div>
  );
}

export default Input;
