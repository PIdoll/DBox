
import React, {Component} from 'react';
import Slider from '../../components/slider';
import Switch from '../../components/switch';

export default class SliderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    }
  }
  handleDisabledChange = (disabled) => {
    this.setState({disabled})
  }
  render() {
    return (
      <div id='main-container'>
        <h1>基本用法</h1>
        <Slider defaultValue={30} disabled={this.state.disabled} />
        Disabled: <Switch size='small' checked={this.state.disabled} onClick={this.handleDisabledChange} />
        <h1>交互样式说明</h1>
      </div>

    )
  }
}
