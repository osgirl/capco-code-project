import React from 'react';
import URL from '../../variables';
import axios from 'axios';
import Rows from '../Rows';
import style from './Grid.css';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons1: [],
      icons2: [],
      active1: 'amazon',
      active2: 'npm'
    };
  }
  

  clickHandler = (e, name, index) => {
    const {icons1, icons2} = this.state;
    let icons;
    if (icons1.includes(name)) icons = icons1;
    else icons = icons2; 

    const minus8 = index - 8;
    
    if (minus8 > 0) {
      let newIndex = minus8 + 1;
      let temp = icons[index];
      icons[index] = icons[newIndex];
      icons[newIndex] = temp;
    }
      if (icons1.includes(name)) this.setState({icons1: icons, active1: icon[0]})
      if (icons2.includes(name)) this.setState({icons2: icons, active2: icon[0]})
    }

  setIcons = (icons) => {
    this.setState({ icons1: icons.slice(0, 15), icons2: icons.slice(16, 31) })
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
        <Rows clickHandler={this.clickHandler} tiles={icons1} active={active1} />
        <Rows clickHandler={this.clickHandler} tiles={icons2} active={active2}/>
      </div>
    );
  }
}
