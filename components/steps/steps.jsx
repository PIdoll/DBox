import React from 'react';
import PropTypes from 'prop-types';
import RcSteps from 'rc-steps';
import './style/index.jsx';
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
    const icons = {
      finish: <Icon type='check-circle' className={`${prefixCls}-finish-icon`} />,
      error: <Icon type='check-circle' className={`${prefixCls}-error-icon`} />
    }
    return (
      <RcSteps icons={icons} {...this.props} />
    )
  }
}
