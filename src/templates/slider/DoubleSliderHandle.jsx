import React from 'react';
import Slider from 'components/slider';

export default class BasicSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: true
    }
  }
  render() {
    return (
      <Slider defaultValue={[10, 30]} range dots={this.state.dots} />
    )
  }
}
