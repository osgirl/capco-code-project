import React from 'react';
import URL from '../../variables';
import axios from 'axios';
import Rows from '../Rows';
import style from './Grid.css';
import PropTypes from 'prop-types';
import { FlipMove } from 'react-flip-move';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons1: [],
      icons2: [],
      names: [],
      active1: 'amazon',
      active2: 'npm'
    };
  }
  
  changeActive1 = (name, index) => {
    this.setState({ active1: name })
  }

  changeActive2 = (name, index) => {
    this.setState({ active2: name })
  }

  setIcons = (icons) => {
    this.setState({ icons1: icons.slice(0, 15), icons2: icons.slice(16, 31)})
  }

  componentDidMount() {
    axios(URL)
      .then(resp => this.setIcons(resp.data))
      .catch(err => console.log(err));
  }

  render() {
    const {icons1, icons2, active1, active2} = this.state;

    return (
      <div className="container" >
        <Rows action={this.changeActive1} tiles={icons1} active={active1} />
        <Rows action={this.changeActive2} tiles={icons2} active={active2}/>
      </div>
    );
  }
}

Grid.propTypes = {
  icons1: PropTypes.array,
  icons2: PropTypes.array,
  names: PropTypes.arrayOf(PropTypes.string),
  active1: PropTypes.string,
  active2: PropTypes.string
}