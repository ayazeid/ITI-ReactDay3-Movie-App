import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Input(props) {
  const [input, setInput] = useState("");
  const { title, name, type, styling, inputHandle, errmsg, must } = props;
  const { lang, setLand } = useContext(LanguageContext);
  const handleChange = (e) => {
    setInput(e.target.value);
    inputHandle(e);
  };
  return (
    <div className="" dir={lang === "ar" ? "rtl" : "ltr"}>
      <label
        htmlFor={type}
        className={
          lang === "ar" ? "form-label float-end " : "form-label float-start"
        }
      >
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
