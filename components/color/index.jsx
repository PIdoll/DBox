import React from 'react';
import colorImg from '../../assets/images/Color.png';

import PrimaryColor from './primaryColor';
import FunctionColor from './functionColor';
import NeutralColor from './neutralColor';
import OtherColor from './otherColor';
import ShadowColor from './shadowColor';
import './style';
/**
 *
 * @visibleName 色彩
 */
class Color extends React.Component {
  render() {
    return (
      <div>
        <p className='idoll-typography-p'>颜色同字体一样也是构成设计体系的感知性设计模式要素，而清晰有效的感知性设计模式是构筑品牌差异化的重要手段。</p>
        <img src={colorImg} className='idoll-color-img' />
        <PrimaryColor />
        <FunctionColor />
        <NeutralColor />
        <OtherColor />
        <ShadowColor />
      </div >
    )
  }
}
export default Color;
