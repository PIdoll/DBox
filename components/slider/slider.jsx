import React from 'react';
import PropTypes from 'prop-types';
import RcSlider from 'rc-slider/lib/Slider';
import RcRange from 'rc-slider/lib/Range';
import RcHandle from 'rc-slider/lib/Handle';
import Tooltip from '../tooltip';

import './style'

class Slider extends React.Component {
  static propTypes = {
    /** 最小值 */
    min: PropTypes.number,
    /** 最大值 */
    max: PropTypes.number,
    /** 刻度标记 */
    marks: PropTypes.object
  }
  static defaultProps = {
    prefixCls: 'idoll-slider',
    tooltipPrefixCls: 'idoll-tooltip',
    tipFormatter(value) {
      return value.toString();
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      visibles: {},
    }
  }
  toggleTooltipVisible = (index, visible) => {
    this.setState(({visibles}) => ({
      visibles: {
        ...visibles,
        [index]: visible
      }
    }));
  }
  handleWithTooltip = ({value, dragging, index, ...restProps}) => {
    const { tooltipPrefixCls, tipFormatter } = this.props;
    const { visibles } = this.state;
    const visible = tipFormatter ? (visibles[index] || dragging) : false;
    return (
      <Tooltip
        prefixCls={tooltipPrefixCls}
        title={tipFormatter ? tipFormatter(value) : ''}
        visible={visible}
        placement='top'
        key={index}
      >
        <RcHandle
          {...restProps}
          value={value}
          onMouseEnter={() => this.toggleTooltipVisible(index, true)}
          onMouseLeave={() => this.toggleTooltipVisible(index, false)}
        />
      </Tooltip>
    );
  }
  focus() {
    this.rcSlider.focus();
  }

  blur() {
    this.rcSlider.focus();
  }

  saveSlider = (node) => {
    this.rcSlider = node;
  }

  render() {
    const { range, ...restProps } = this.props;
    if (range) {
      return <RcRange {...restProps} ref={this.saveSlider} handle={this.handleWithTooltip} />
    }
    return <RcSlider {...restProps} ref={this.saveSlider} handle={this.handleWithTooltip} />
  }
}
export default Slider;
