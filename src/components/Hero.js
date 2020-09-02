import React from "react";

export default function Hero({ children, hero }) {
  // We are using jsx to pass dynamic values because
  // hero will receive className already declared in App.css
  return <header className={hero}>{children}</header>;
}

// set defaut props: in case we forget to pass props to the component
Hero.defaultProps = {
  hero: "defaultHero",
};
