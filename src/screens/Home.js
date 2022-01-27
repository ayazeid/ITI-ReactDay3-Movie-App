import React from "react";
import { connect } from "react-redux";
import Category from "../components/Category";

function Home(props) {
  return (
    <>
      <Category name="Popular" type="popular" />
      <Category name="Top Tated" type="top_rated" />
      <Category name="Coming Soon" type="upcoming" />
    </>
  );
}

export default connect()(Home);
