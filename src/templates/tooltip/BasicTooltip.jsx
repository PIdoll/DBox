import React from 'react';

import Tooltip from 'components/tooltip';
import Input from 'components/input';

export default class BasicInput extends React.Component {
    handleChange = (visible) => {
        console.log('tooltip', visible);
    }
    render() {
        return (
          <div>
            <Tooltip title='提示文字'>
              <span>当鼠标移入时会出现文字提示</span>
            </Tooltip>
            <br />
            <br />
            <Tooltip title='提示文字' mouseEnterDelay={1} mouseLeaveDelay={1}>
              <span>当鼠标移入1秒后出现文字提示,移出后1秒隐藏</span>
            </Tooltip>

            <br />
            <br />
            <Tooltip title='提示文字' trigger={'focus'}>
              <Input style={{width: '100px'}} defaultValue='focus时显示' />
            </Tooltip>

            <br />
            <br />
            <Tooltip title='提示文字' trigger={'click'}>
              <span>当鼠标click时显示</span>
            </Tooltip>
            <br />
            <br />
            <Tooltip title='提示文字' onVisibleChange={this.handleChange}>
              <span>当鼠标移入时会出现文字提示,同时调用onVisibleChange函数</span>
            </Tooltip>

          </div>
        )
  }
}
