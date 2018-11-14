import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Icon from '../icon'
import { Circle } from 'rc-progress'
import classNames from 'classnames'
import './style/index.jsx'

const statusColorMap = {
  normal: '#108ee9',
  exception: '#ff5500',
  success: '#87d068'
}

export default class Progress extends Component {
  static defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'idoll-progress',
    size: 'small'
  };

  static propTypes = {
    /** 状态，可选： success exception active */
    status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    /** 类型 可选：line circle dashboard */
    type: PropTypes.oneOf(['line', 'circle', 'dashboard']),
    /** 是否展示进度信息 */
    showInfo: PropTypes.bool,
    /** 百分比 */
    percent: PropTypes.number,
    /** 圆形进度条画布宽度，单位 px */
    width: PropTypes.number,
    /** 圆形进度条的宽度，单位是进度条画布宽度的百分比 */
    strokeWidth: PropTypes.number,
    /**  */
    trailColor: PropTypes.string,
    /** 内容的模版函数 */
    format: PropTypes.func,
    /** 圆形进度条缺口角度，可取值0 ～ 360 */
    gapDegree: PropTypes.number,
    /** 圆形进度条缺口位置 */
    gapPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /** 进度条的大小 */
    default: PropTypes.oneOf(['default', 'small'])
  };
  render() {
    const props = this.props;
    const { prefixCls, className, percent = 0, status, format, trailColor, size, type, strokeWidth, width, showInfo,
      gapDegree = 0, gapPosition, ...restProps } = props;
    const progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : (status || 'normal');
    let text;
    let progress;
    const textFormatter = format || (percentNumber => `${percentNumber}%`);
    if (showInfo) {
      const iconType = (type === 'circle' || type === 'dashboard') ? '' : '-circle';
      if (progressStatus === 'exception') {
        if (type !== 'line') {
          text = format ? textFormatter(percent) : <Icon type={`cross${iconType}`} />
        } else {
          text = textFormatter(percent)
        }
      } else if (progressStatus === 'success') {
        if (type !== 'line') {
          text = format ? textFormatter(percent) : <Icon type={`check${iconType}`} />
        } else {
          text = textFormatter(percent);
        }
      } else {
        text = textFormatter(percent);
      }
    }
    if (type === 'line') {
      const percentStyle = {
        width: `${percent}%`,
        height: strokeWidth || (size === 'small' ? 8 : 4)
      };
      const innerStyle = {
        height: percentStyle.height,
      };
      const importStyle = {
        top: -innerStyle.height - 5
      }
      const textStyle = {
        top: innerStyle.height
      }
      let importProgress;
      if (progressStatus === 'exception' || progressStatus === 'success') {
        importProgress = null
      } else {
        importProgress = <span className={`${prefixCls}-import`} style={importStyle} />
      }
      progress = (<div>
        <div className={`${prefixCls}-outer`}>
          <div className={`${prefixCls}-inner`} style={innerStyle}>
            <div className={`${prefixCls}-bg`} style={percentStyle} />
            <span className={`${prefixCls}-text`} style={textStyle} >{text}</span>
          </div>
          {importProgress}
        </div>
      </div>)
    } else if (type === 'circle' || type === 'dashboard') {
      const circleSize = width || 120;
      const circleStyle = {
        width: circleSize,
        height: circleSize,
        fontSize: circleSize * 0.15 + 6
      }
      const circleWidth = strokeWidth || 6;
      const gapPos = gapPosition || (type === 'dashboard' && ('bottom' || 'top'));
      const gapDeg = gapDegree || (type === 'dashboard' && 75);
      progress = (<div className={`${prefixCls}-inner`} style={circleStyle}>
        <Circle percent={percent} strokeWidth={circleWidth} trailWidth={circleWidth} strokeColor={statusColorMap[progressStatus]} trailColor={trailColor} prefixCls={prefixCls} gapDegree={gapDeg} gapPosition={gapPos} />
        <span className={`${prefixCls}-text`}>{text}</span>
      </div>);
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










