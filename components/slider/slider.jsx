
import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import RcSlider, {Range} from 'rc-slider';
// import Tooltip from '../tooltip';
import './style/index';



export default class Slider extends Component {
  static defaultProps = {
    prefixCls: 'idoll-slider',
    toolPrefixCls: 'idoll-tooltip',
  }
  constructor(props) {
    super(props);
    this.state = {
      visible: {},
      defaultValue: 12
    }
  }
  render() {
    const {defaultValue} = this.state;
    return (
      <div>
        <RcSlider defaultValue={defaultValue} />
        <Range />
      </div>
    )
  }
}


