
import React, {Component} from 'react';
import RcSlider from 'rc-slider';
// import Tooltip from '../tooltip';
import './style/index';



export default class Slider extends Component {
  static defaultProps = {
    prefixCls: 'idoll-slider',
    tipTransitionName: 'zoom-down'
  }

  render() {
    const { isIncluded, marks, index, defaultIndex, ...rest } = this.props;
    if (isIncluded !== undefined) {
      rest.included = isIncluded;
    }
    if (Array.isArray(marks)) {
      rest.min = 0;
      rest.max = marks.length - 1;
      rest.step = 1;
      if (index !== undefined) {
        rest.value = index;
      }
      if (defaultIndex !== undefined) {
        rest.defaultValue = defaultIndex;
      }
      rest.marks = {};
      marks.forEach((val, idx) => {
        rest.marks[idx] = val;
      });
    } else {
      rest.marks = marks;
    }

    return (
      <RcSlider {...rest} />
    )
  }
}


