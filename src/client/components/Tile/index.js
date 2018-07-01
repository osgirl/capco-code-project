import React from "react";
import "./Tile.css";
import Svg from "../Svg";

function rand() {
  return Math.floor(Math.random() * 256);
}

function rbg() {
  return `rgb(${rand()}, ${rand()}, ${rand()})`;
}

export default class Tile extends React.Component {

  render() {
    const { isActive, handleClick, src, name} = this.props;

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
}
