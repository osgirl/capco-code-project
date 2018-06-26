import React from "react";
import Tile from "../Tile";
import style from "./Rows.css";

const Rows = props => {

  const handleClick = (e, name, index,  cb) => {
    e.preventDefault();
    props.action(name, index);
  };

  const { active } = props;

  return (
    <div className="rows">
      {props.tiles.map(([name, data], index) => (
        <Tile
          className={"tile "}
          name={name}
          index={props.index}
          isActive={active === name ? true : false}
          handleClick={e => handleClick(e, name, index, props.clickHandler)}
          src={data}
          key={name}
        />
      ))}
    </div>
  );
};
export default Rows;