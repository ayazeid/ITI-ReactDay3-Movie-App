import React from "react";
import Category from "../components/Category";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <Category name="Popular" type="popular" />
      <Category name="Top Tated" type="top_rated" />
      <Category name="Coming Soon" type="upcoming" />
    </>
  );
}

export default Home;
