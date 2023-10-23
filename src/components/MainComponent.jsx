import React from "react";
import { Body } from "./body/Body";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export let MainCompenent = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};
