import React from 'react';
import DirectionalIcon from './DirectionalIcon';
import GeneralityIcon from './GeneralityIcon';
import SuggestiveIcon from './SuggestiveIcon';

export default class Icon extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>方向性图标</h1>
        <ul className='ul'>
          <DirectionalIcon />
        </ul>
        <br />
        <h1 className='h1'>提示建议性图标</h1>
        <ul className='ul'>
          <SuggestiveIcon />
        </ul>
        <br />
        <h1 className='h1'>网站通用图标</h1>
        <ul className='ul'>
          <GeneralityIcon />
        </ul>
      </div>
    )
  }
}
