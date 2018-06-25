import React from "react";
import Tile from "../Tile";
import URL from '../../variables'

import "./Grid.css";


export default class Grid extends React.Component {
  state = {
    icons: []
  };

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(iconPaths => {
      this.setState({icons: Object.entries(iconPaths)})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        {this.state.icons.map(data => {
          return <Tile name={data[0]} data={data[1]} key={data[0]} />
        })}
      </div>
    )
  }
}
