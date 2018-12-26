import React from 'react';
import colorImg from '../../assets/images/Color.png';
import './style';

import PrimaryColor from './primaryColor';
import FunctionColor from './functionColor';
import NeutralColor from './neutralColor';
import OtherColor from './otherColor';
import ShadowColor from './shadowColor';
/**
 *
 * @visibleName Color颜色
 */
class Color extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src={colorImg} className='idoll-color-img' />
        <PrimaryColor />
        <FunctionColor />
        <NeutralColor />
        <OtherColor />
        <ShadowColor />
      </React.Fragment >
    )
  }
}
export default Color;
