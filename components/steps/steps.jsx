import React from 'react';
import PropTypes from 'prop-types';
import RcSteps from 'rc-steps';
import './style/index';
import Icon from '../icon';

export default class Steps extends React.Component {
  static Step = RcSteps.Step;
  static defaultProps = {
    prefixCls: 'idoll-steps',
    iconPrefix: 'idoll',
    current: 0
  };
  static propTypes = {
    prefixCls: PropTypes.string,
    iconPrefix: PropTypes.string,
    current: PropTypes.number
  };
  render() {
    const {prefixCls} = this.props;
    const iconType = {
      finish: <Icon type='done' className={`${prefixCls}-finish-icon`} />,
      error: <Icon type='close' className={`${prefixCls}-error-icon`} />
    }
    return (
      <RcSteps icons={iconType} {...this.props} />
    )
  }
}
