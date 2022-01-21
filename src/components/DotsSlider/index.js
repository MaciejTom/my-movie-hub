import React from "react";

import { Dots, Dot } from "./DotsSlider.style";

const DotsSlider = ({ setIndex, length, index }) => {

  const array = [];

  const loopOfLength = () => {
    for (let i = 0; i < length; i++) {
      array.push(<Dot onClick={() => setIndex(i)} i={i} index={index}></Dot>);
    }
  };

  loopOfLength();

  return <Dots>{array.map((el) => el)}</Dots>;
};

export default DotsSlider;
