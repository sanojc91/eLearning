import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../resources/logo-1.png";

const Logo = () => (
  <Link to="/">
    {/*<img src={logoImage} alt="brand logo" style={{ height: 30 }} />*/}
    <h4
      style={{
        fontSize: "20px",
        color: "white",
        paddingLeft: "20px",
        paddingTop: "10px",
      }}
    >
      Study with Panda
    </h4>
  </Link>
);

export default Logo;
