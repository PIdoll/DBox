import React from 'react';
import PropTypes from 'prop-types';
import RcSteps from 'rc-steps';
import './style/index.jsx'

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
    return (
      <RcSteps {...this.props} />
    )
  }
}
