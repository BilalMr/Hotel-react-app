import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms" link="/" linkText="return home" />
      </Hero>
      <RoomsContainer />
    </>
  );
}
