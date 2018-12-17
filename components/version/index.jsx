import React from 'react';
import { PropTypes } from 'prop-types';
import Timeline from '../timeline';
import './style';
import classNames from 'classnames';

class Version extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-version',
  }
  static propTypes = {
    className: PropTypes.string,
  }

  constructor (props) {
    super(props);
    this.state = {
      reverse: true,
    }
  }
  render() {
    const { prefixCls, className } = this.props;
    const classString = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div >
        <Timeline pending='上线...' className={classString}>
          <Timeline.Item >
            <h2>1.0.0</h2>
            <p >2018-10-12</p>
            
          </Timeline.Item>
          <Timeline.Item>开发 2018-12-01</Timeline.Item>
          <Timeline.Item>测试 2018-12-15</Timeline.Item>
        </Timeline>
      </div>
    )
  }
}
export default Version;
