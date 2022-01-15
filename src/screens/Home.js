import React from "react";
import { connect } from "react-redux";
import Category from "../components/Category";
import NavBar from "../components/NavBar";

function Home(props) {
  return (
    <>
      <NavBar />
      <Category name="Popular" type="popular" />
      <Category name="Top Tated" type="top_rated" />
      <Category name="Coming Soon" type="upcoming" />
    </>
  );
}

export default connect()(Home);
