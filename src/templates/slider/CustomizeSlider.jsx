import React from 'react';
import Slider from 'components/slider';

export default class BasicSlider extends React.Component {
  render() {
    return (
      <div>
        <Slider tipFormatter={(value) => `${value}%`} defaultValue={20} step={10} />
        <Slider tipFormatter={null} defaultValue={10} />
      </div>
    )
  }
}
