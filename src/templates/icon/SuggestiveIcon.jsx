import React from 'react';
import {Icon} from 'components';

const icons = ['bars', 'block', 'check', 'check-circle-o', 'check-circle', 'checkbox-blank-o', 'checkbox-checked', 'checkbox-indeterminate', 'close-circle', 'close-circle-o', 'close', 'delete', 'done', 'error-circle-o', 'error-circle', 'filter', 'help-circle-o', 'help-circle', 'history', 'info-circle-o', 'info-circle', 'list', 'loading', 'menu', 'more', 'plus_box', 'plus-circle-o',
'plus-circle', 'plus', 'radio-checked', 'radio-unchecked', 'refresh', 'remove-circle-o', 'remove-circle', 'remove', 'search', 'warning-o', 'warning'];
export default class SuggestiveIcon extends React.Component {
  render() {
    return (
      icons.map(function(val, index) {
      return <li key={val} className='iconList'><Icon type={val} /><span>{val}</span></li>
      })
    )
  }
}

