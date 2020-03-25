import React from 'react';
import {Icon} from 'components';

const icons = ['arrows-alt', 'backspace', 'backward', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'caret-right-circle', 'caret-left-circle', 'caret-up-circle', 'caret-down-circle', 'demolitions', 'down', 'forward', 'fullscreen-exit', 'fullscreen', 'insertion', 'left', 'left-circle-o', 'menu-fold', 'menu-unfold', 'redo', 'reply-all', 'reply', 'right', 'right-circle-o', 'shrink', 'swap-horiz', 'swap-vert', 'undo', 'up', 'zoom-out'];
export default class DirectionalIcon extends React.Component {
  render() {
    return (
      icons.map(function(val, index) {
      return <li key={val} className='iconList'><Icon type={val} /><span>{val}</span></li>
      })
    )
  }
}

