import React from 'react'
import Slider from 'components/slider';

class SliderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }
  handleDisabledChange = (disabled) => {
    this.setState({disabled});
  }
  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Slider defaultValue={30} disabled={disabled} />
      </div>
    )
  }
}
export default SliderView
