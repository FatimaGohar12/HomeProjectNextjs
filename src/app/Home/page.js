"use client";
import React from "react";
import "./home.css";
import Main from "./Main";
import Nav from "./Nav";
import Homebox from "./Homebox3";
const HomeComponenet = () => {
  return (
    <>
      <Nav />
      {/* -main-component */}
      <Main></Main>
      <Homebox></Homebox>
    </>
  );
};

export default HomeComponenet;
