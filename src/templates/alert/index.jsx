import React from 'react';
import BasicDemo from './BasicDemo';
import UninstallDemo from './UninstallDemo';
import BannerDemo from './BannerDemo';
import CloseDemo from './CloseDemo';
import CustomCloseDemo from './CustomCloseDemo';
import AssistTextDemo from './AssistTextDemo';
import CustomIconDemo from './CustomIconDemo';
import DifferentStyleDemo from './DifferentStyleDemo';
import IconInfoDemo from './IconInfoDemo';
import CloseTriggerDemo from './CloseTriggerDemo';

export default class Alert extends React.Component {
  render() {
    const styleObj = {
      marginBottom: 40
    }
    return (
      <div id='main-container'>
        <div style={styleObj}>
          <h1 className='h1'>基本用法</h1>
          <h2 className='h2'>一、最简单的用法，适用于简短的警告提示</h2>

          <BasicDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>平滑的卸载</h1>
          <h2 className='h2'>二、如果在关闭提示后需要做些什么</h2>

          <UninstallDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>顶部公告</h1>
          <h2 className='h2'>三、页面顶部公告形式，默认有图表且type为'warning'</h2>

          <BannerDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>可关闭的提示框</h1>
          <h2 className='h2'>四、默认是不会显示关闭的图标，如果你需要，可添加</h2>

          <CloseDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>自定义关闭按钮</h1>
          <h2 className='h2'>四、默认关闭按钮时 x 按钮，支持自定义关闭按钮</h2>

          <CustomCloseDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>含有辅助性文字介绍</h1>
          <h2 className='h2'>五、含有辅助性文字介绍的警告提示。</h2>

          <AssistTextDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>自定义图标</h1>
          <h2 className='h2'>六、默认显示的图标若是不满足你的UI，你可以自定义图标</h2>

          <CustomIconDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>四种样式</h1>
          <h2 className='h2'>七、共有四种样式 success、info、warning、error</h2>

          <DifferentStyleDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>带图标的提示</h1>
          <h2 className='h2'>八、可口的图标让信息类型更加醒目。</h2>

          <IconInfoDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>关闭提示时触发的函数</h1>
          <h2 className='h2'>九、当提示信息关闭时触发。</h2>

          <CloseTriggerDemo />
        </div>
      </div>
    )
  }
}
