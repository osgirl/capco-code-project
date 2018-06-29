import React from "react";
import "./Tile.css";
import Svg from "../Svg";


export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    function rand() {
      return Math.floor(Math.random() * 256);
    }
    
    function rbg() {
      return `rgb(${rand()}, ${rand()}, ${rand()})`;
    }
    const { isActive, handleClick, src, name, index } = this.props;
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
  }
} 