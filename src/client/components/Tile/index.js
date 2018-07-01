import React from "react";
import "./Tile.css";
import Svg from "../Svg";

function rand() {
  return Math.floor(Math.random() * 256);
}

function rbg() {
  return `rgb(${rand()}, ${rand()}, ${rand()})`;
}

const Tile = ({ isActive, handleClick, src, name}) => {
  const active = isActive ? "active" : "tile";
  const color = isActive ? rbg() : "";
  console.log({name, src, isActive, handleClick})
  return (
    <div
      className={active}
      onClick={e => handleClick(e, name)}
      style={{ backgroundColor: color }}
    >
      <Svg alt={src[0]} src={src[1]} />
    </div>
  );
};


export default Tile;