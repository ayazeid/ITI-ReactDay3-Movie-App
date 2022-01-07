import React from "react";
import Category from "../components/Category";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
function Search(props) {
  return (
    <>
      <NavBar />
      <Category name="Search" type={props.state} />
    </>
  );
}

export default connect(({ search }) => {
  return { state: search };
})(Search);
