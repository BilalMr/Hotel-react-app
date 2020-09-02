import React, { Component } from "react";
import { RoomContext } from "../context";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

// Styled components
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room)
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Return Home
          </Link>
        </div>
      );
    const {
      name,
      description,
      capacity,
      size,
      pets,
      price,
      breakfast,
      extras,
      images,
    } = room;
    const [mainImg, ...defaultImgs] = images;
    return (
      <>
        <StyledHero image={mainImg || this.state.defaultBcg}>
          <Banner
            title={`${name} room`}
            link="/rooms"
            linkText="back to rooms"
          />
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImgs.map((image, index) => {
              return <img src={image} key={index} alt={image} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                Max capacity :
                {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
              </h6>
              <h6>{pets ? "Pets Allowed" : "No pets allowed"}</h6>
              <h6>{breakfast && "Free Breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
