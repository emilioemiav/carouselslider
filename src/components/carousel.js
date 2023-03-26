import React from "react";
import Carousel from "react-material-ui-carousel";
import slider from "../helper/slider.json";
import Item from "./item";
import "./carousel.css";

function Example(props) {
  return (
    <Carousel>
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
export default Example;
