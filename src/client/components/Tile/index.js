import React from "react";
import "./Tile.css";
import Svg from "../Svg";

const Tile = props => {
  return (
    <div onClick={props.handleClick}>
      <Svg src={props.data} />
    </div>
  );
};

export default Tile;
