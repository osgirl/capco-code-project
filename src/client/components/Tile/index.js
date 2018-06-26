import React from 'react';
import './Tile.css';
import Svg from '../Svg';

const Tile = props => (
  <div>
    <Svg src={props.src} />
  </div>
);

export default Tile;
