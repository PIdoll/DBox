import React from 'react';
import Slider from 'components/slider';
import Switch from 'components/switch';

export default class BasicSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    }
    this.handleDisabledChange = this.handleDisabledChange.bind(this);
  }
  handleDisabledChange(disabled) {
    this.setState({disabled})
  }
  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Slider defaultValue={20} disabled={disabled} />
        Disabled: <Switch size='small' checked={disabled} onClick={this.handleDisabledChange} />
      </div>
    )
  }
}
