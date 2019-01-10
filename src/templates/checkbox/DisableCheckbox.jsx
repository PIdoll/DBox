import React from 'react';
import {Checkbox} from 'components';

export default class DisableCheckbox extends React.Component {
  render() {
    return (
      <div>
        <Checkbox defaultChecked={false} disabled >不可操作</Checkbox>
        <Checkbox defaultChecked disabled >不允许操作</Checkbox>
      </div>
    )
  }
}
