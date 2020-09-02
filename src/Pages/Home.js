import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
          link="/rooms"
          linkText="Explore our rooms"
        />
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
