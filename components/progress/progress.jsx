import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';
import { Circle } from 'rc-progress';
import classNames from 'classnames';
import './style';

const statusColorMap = {
  normal: '#13B886',
  exception: '#F44336',
  success: '#3CCB69',
  active: '#42c69e',
}

const validProgress = (progress) => {
  if (!progress || progress < 0) {
    return 0;
  } else if (progress > 100) {
    return 100;
  }
  return progress;
}
export default class Progress extends React.Component {
  static defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f5f5f5',
    prefixCls: 'idoll-progress',
    size: 'default'
  };

  static propTypes = {
    /** 状态，可选：normal、success、exception、active */
    status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    /** 类型 可选：line circle */
    type: PropTypes.oneOf(['line', 'circle']),
    /** 是否展示进度信息 */
    showInfo: PropTypes.bool,
    /** 百分比展示 */
    percent: PropTypes.number,
    /** 圆形进度条画布宽度，单位 px */
    width: PropTypes.number,
    /** 圆形进度条的宽度，单位是进度条画布宽度的百分比 */
    strokeWidth: PropTypes.number,
    /** 内容的模版函数 */
    strokeLinecap: PropTypes.oneOf(['round', 'square']),
    /** 自定义内容的模版函数 */
    format: PropTypes.func,
    /** 进度条的大小 */
    default: PropTypes.oneOf(['default', 'small'])
  };
  render() {
    const props = this.props;
    const {
      prefixCls, className, percent = 0, status, format, trailColor, size, successPercent,
      type, strokeWidth, width, showInfo, strokeColor, strokeLinecap = 'round',
      ...restProps
    } = props;
    const progressStatus = parseInt((successPercent ? successPercent.toString() : percent.toString()), 10) >= 100 &&
      !('status' in props) ? 'success' : (status || 'normal');
    let progressInfo;
    let progress;
    const textFormatter = format || (percentNumber => `${percentNumber}%`);

    if (showInfo) {
      let text;
      const iconType = (type === 'circle') ? '' : '-circle';
      if (format || (progressStatus !== 'exception' && progressStatus !== 'success')) {
        text = textFormatter(validProgress(percent), validProgress(successPercent));
      } else if (progressStatus === 'exception') {
        text = <Icon className='idoll-progress-error-icon' type={`close${iconType}`} theme={type === 'line' ? 'filled' : 'outlined'} />;
      } else if (progressStatus === 'success') {
        text = <Icon className='idoll-progress-success-icon' type={`check${iconType}`} theme={type === 'line' ? 'filled' : 'outlined'} />;
      }
      progressInfo = (
        <span
          className={`${prefixCls}-text`}
          title={typeof text === 'string' ? text : undefined}
        >
          {text}
        </span>
      );
    }

    if (type === 'line') {
      const percentStyle = {
        width: `${validProgress(percent)}%`,
        height: strokeWidth || (size === 'small' ? 4 : 8),
        background: strokeColor,
        borderRadius: strokeLinecap === 'square' ? 0 : '100px'
      };
      const successPercentStyle = {
        width: `${validProgress(successPercent)}%`,
        height: strokeWidth || (size === 'small' ? 4 : 8),
        borderRadius: strokeLinecap === 'square' ? 0 : '100px'
      };
      const successSegment = successPercent !== undefined
        ? <div className={`$(prefixCls)-success-bg`} style={successPercentStyle} />
        : null;
      progress = (
        <div>
          <div className={`${prefixCls}-outer`}>
            <div className={`${prefixCls}-inner`}>
              <div className={`${prefixCls}-bg`} style={percentStyle} />
              {successSegment}
            </div>
          </div>
          {progressInfo}
        </div>
      )
    } else if (type === 'circle') {
      const circleSize = width || 120;
      const circleStyle = {
        width: circleSize,
        height: circleSize,
        fontSize: circleSize * 0.15 + 6
      }
      const circleWidth = strokeWidth || 6;
      progress = (
        <div className={`${prefixCls}-inner`} style={circleStyle}>
          <Circle
            percent={validProgress(percent)}
            strokeWidth={circleWidth}
            trailWidth={circleWidth}
            strokeColor={strokeColor || statusColorMap[progressStatus]}
            strokeLinecap={strokeLinecap}
            trailColor={trailColor}
            prefixCls={prefixCls}
          />
          {progressInfo}
        </div>
      );
    }

    const classString = classNames(prefixCls, {
      [`${prefixCls}-${(type === 'dashboard' && 'circle') || type}`]: true,
      [`${prefixCls}-status-${progressStatus}`]: true,
      [`${prefixCls}-show-info`]: showInfo,
      [`${prefixCls}-${size}`]: size
    }, className);

    return (
      <div {...restProps} className={classString}>
        {progress}
      </div>
    )
  }
}










