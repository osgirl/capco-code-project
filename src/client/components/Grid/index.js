import React from 'react';
import Tile from '../Tile';
import URL from '../../variables';
import axios from 'axios';

import './Grid.css';


export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: []
    };
  }

  handleClick = (e) => {
     e.preventDefault();
  }

  componentDidMount() {
    axios(URL)
      .then(resp => resp.data)
      .then((data) => {
        this.setState({ icons: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container" >
        {this.state.icons.map(data => <Tile name={data[0]} src={data[1]} onClick="handleClick" key={data[0]} />)}
      </div>
    );
  }
}
