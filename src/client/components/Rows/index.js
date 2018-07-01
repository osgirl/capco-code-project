import React from "react";
import Tile from "../Tile";
import style from "./Rows.css";
import { PropTypes } from 'prop-types';

const Rows = ({action, tiles, active}) => {

  return (
    <div className="rows">
      {tiles.map((icon, index) => (
        <Tile
          className={active === icon[0] ? 'active tile' : 'tile'}
          name={icon[0]}
          isActive={active === icon[0] ? true : false}
          handleClick={(e) => action(icon[0], index)}
          src={icon}
          key={icon[0]}
        />
      ))}
    </div>
  );
};
export default Rows;
