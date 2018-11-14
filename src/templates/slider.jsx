import React from 'react'
import Slider from '../../components/slider';

class SliderView extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <h1>1.基本用法</h1>
        <Slider defaultValue={30} />
      </div>
    )
  }
}
export default SliderView;
