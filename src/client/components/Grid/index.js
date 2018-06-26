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
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ icons: data.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container" >
        {this.state.icons.map(data => <Tile name={data.name} data={data.src} onClick="handleClick" key={data.name} />)}
      </div>
    );
  }
}
