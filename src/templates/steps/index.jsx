import React from 'react';
import ChangeIconSteps from './ChangeIconSteps';
import ChangeSteps from './ChangeSteps';
import CustomizeSteps from './CustomizeSteps';
import DottedSteps from './DottedSteps';
import ErrorSteps from './ErrorSteps';
import GeneralSteps from './GeneralSteps';
import SmallSteps from './SmallSteps';
import VerticalSteps from './VerticalSteps';
import VerticalSmallSteps from './VerticalSmallSteps';

export default class Steps extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <h2 className='h2'>
          测试场景: <br />
        </h2>
        <GeneralSteps />

        <h1 className='h1'>小尺寸</h1>
        <h2 className='h2'>
          测试场景: <br />
        </h2>
        <SmallSteps />

        <h1 className='h1'>点状步骤条</h1>
        <h2 className='h2'>
          测试场景: <br />
        </h2>
        <DottedSteps />

        <h1 className='h1'>带popover点状步骤条</h1>
        <h2 className='h2'>
          测试场景: <br />
        </h2>
        <CustomizeSteps />

        <h1 className='h1'>步骤运行出错</h1>
        <h2 className='h2'>
          测试场景: <br />
        </h2>
        <ErrorSteps />

        <h1 className='h1'>步骤切换</h1>
        <h2 className='h2'>
          测试场景: <br />
        </h2>
        <ChangeSteps />

        <h1 className='h1'>竖直方向</h1>
        <h2 className='h2'>
          测试场景: <br />
        </h2>
        <VerticalSteps />

        <h1 className='h1'>竖直方向小尺寸</h1>
        <h2 className='h2'>
          测试场景: <br />
        </h2>
        <VerticalSmallSteps />

        <h1 className='h1'>自定义图标的步骤条</h1>
        <h2 className='h2'>
          测试场景: <br />
        </h2>
        <ChangeIconSteps />
      </div>
    )
  }
};

