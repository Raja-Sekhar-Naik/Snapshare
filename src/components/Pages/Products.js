import React from "react";
import "../../App.css";
import "./Products.css";
import logo1 from "../assests/img-1.jpg";
import logo2 from "../assests/img-2.jpg";
import logo3 from "../assests/img-3.jpg";
import logo4 from "../assests/img-4.jpg";
import logo5 from "../assests/img-5.jpg";
import logo6 from "../assests/img-10.png";

export default function Products() {
  return (
    <>
    <div class=""></div>
      <div class="title">
        <h1>Screenshots</h1>
        <h2>
          We worked hard to make a product that stands out from the crowd.
          <br />
          Take a look at some of the cool features that makes SnapsShare so
          unique.
        </h2>
      </div>
      <div class="col-md-12">
        <ul class="gallery-item">
          <li class="col-md-2 col-xs-6">
            <img src={logo1} alt="" class="img-responsive" />
          </li>
          <li class="col-md-2 col-xs-6">
            <img src={logo2} alt="" class="img-responsive" />
          </li>
          <li class="col-md-2 col-xs-6">
            <img src={logo3} alt="" class="img-responsive" />
          </li>
          <li class="col-md-2 col-xs-6">
            <img src={logo4} alt="" class="img-responsive" />
          </li>
          <li class="col-md-2 col-xs-6">
            <img src={logo5} alt="" class="img-responsive" />
          </li>
          <li class="col-md-2 col-xs-6">
            <img src={logo6} alt="" class="img-responsive" />
          </li>
        </ul>
      </div>
    </>
  );
}
