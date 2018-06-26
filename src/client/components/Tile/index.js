import React from "react";
import "./Tile.css";
import Svg from "../Svg";

function rand() {
  return Math.floor(Math.random() * 256);
}

function rbg() {
  return `rgb(${rand()}, ${rand()}, ${rand()})`;
}

const Tile = ({ isActive, handleClick, src, name, index }) => {
  const active = isActive ? "tile active" : "tile";
  const color = isActive ? rbg() : "";

  return (
    
    <div className={active} 
      onClick={(e) => handleClick(e, name, index)}
      style={{backgroundColor: color}}
    >
      <Svg alt={name} src={src} />
    </div>
  );
};
export default Tile;
