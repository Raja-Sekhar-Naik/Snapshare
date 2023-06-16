import React from "react";
import "../../App.css";
import "../Pages/Services.css";
import "../Pages/Container1";
import Container1 from "../Pages/Container1";
import Container2 from "../Pages/Container2";
import Container3 from "./Container3";
import Loader from 'react-loaders';


export default function Services() {
  return (
    <>
      <div class="title">
        <h1>App Features</h1>
        <h2>
          Introducing our revamped app with its new design and added features,
          making it a beautiful and fun way
          <br />
          to share your precious moments with friends and family.
        </h2>
      </div>
      {/* <h1 className="services">FEATURES</h1> */}
      <div class="container list-items">
      <Container1/>
      <Container2/>
      <Container3/>
      </div>
      <Loader type="pacman" />
    </>
    
  );
}
