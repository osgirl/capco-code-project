import React from "react";
import Tile from "../Tile";
import style from "./Rows.css";
import FlipMove from 'react-flip-move'

const Rows = props => {

  const handleClick = (e, name, index,  cb) => {
    e.preventDefault();
    props.action(name, index);
  };

  const { active } = props;

  return (
    <div className="rows">
      {props.tiles.map(([name, data, order], index) => (
        <Tile
          className={active === name ? 'active' : 'tile'}
          name={name}
          order={order}
          index={props.index}
          isActive={active === name ? true : false}
          handleClick={e => handleClick(e, name, index, props.action)}
          src={data}
          key={name}
        />
      ))}
    </div>
  );
};
export default Rows;