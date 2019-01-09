import React from 'react';
import ChangeIconSteps from './ChangeIconSteps';
import ChangeSteps from './ChangeSteps';
import CurrentSteps from './CurrentStatusSteps';
import CurrentStatusSteps from './CurrentStatusSteps';
import CustomizeSteps from './CustomizeSteps';
import DottedSteps from './DottedSteps';
import ErrorSteps from './ErrorSteps';
import GeneralSteps from './GeneralSteps';
import SmallSteps from './SmallSteps';
import VerticalSteps from './VerticalSteps';
import VerticalSmallSteps from './VerticalSmallSteps';

export default class Steps extends React.Components {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）修改type属性为default、primary、secondary、dashed和danger，并且测试hover、pressed、active场景下的样式 <br />
        </h2>
        <GeneralSteps />

        <h1 className='h1'>小尺寸</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）修改type属性为default、primary、secondary、dashed和danger，并且测试hover、pressed、active场景下的样式 <br />
        </h2>
        <SmallSteps />

        <h1 className='h1'>点状步骤条</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）修改type属性为default、primary、secondary、dashed和danger，并且测试hover、pressed、active场景下的样式 <br />
        </h2>
        <DottedSteps />

        <h1 className='h1'>带popover点状步骤条</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）修改type属性为default、primary、secondary、dashed和danger，并且测试hover、pressed、active场景下的样式 <br />
        </h2>
        <CustomizeSteps />

        <h1 className='h1'>可步骤切换</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）修改type属性为default、primary、secondary、dashed和danger，并且测试hover、pressed、active场景下的样式 <br />
        </h2>
        <ChangeSteps />
      </div>
    )
  }
}
