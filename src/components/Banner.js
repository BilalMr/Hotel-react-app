import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ title, subtitle, link, linkText }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {/* we passing the button dynamically in the children because we will use diffrent links
      and different text */}
      {/* {children} */}
      <Link className="btn-primary" to={link}>
        {linkText}
      </Link>
    </div>
  );
}
