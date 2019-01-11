import React from 'react';
import BasicCalendarDemo from './BasicCalendarDemo';
import DisabledCalendarDemo from './DisabledCalendarDemo';
import ChangeCalendarDemo from './ChangeCalendarDemo';
import ConfigDefaultTimeDemo from './ConfigDefaultTimeDemo';
import BackgroundCalendarDemo from './BackgroundCalendarDemo';

export default class Calendar extends React.Component {
  render() {
    const styleObj = {
      marginTop: 40,
    }
    return (
      <div id='main-container'>
        <div style={styleObj}>
          <h1 className='h1'>一、基本用法</h1>
          <h2 className='h2'>可以通过选择相应的年份月份展示日历面板,且可为其设置value值</h2>

          <BasicCalendarDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>二、禁用</h1>
          <h2 className='h2'>可根据需要，选择禁用部分日期时间不可选择</h2>

          <DisabledCalendarDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>三、提供年份月份以及日历面板改变的回调</h1>

          <ChangeCalendarDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>四、可根据需要设置年份选择框内的的可展示的时间</h1>

          <ConfigDefaultTimeDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>五、通过mold='backdrop'可选择头部带有背景色的日历面板</h1>

          <BackgroundCalendarDemo />
        </div>
      </div>
    )
  }
}
