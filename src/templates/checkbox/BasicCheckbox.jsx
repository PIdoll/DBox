import React from 'react';
import {Checkbox} from 'components';

export default class BasicCheckbox extends React.Component {
  render() {
    return (
      <div>
        <Checkbox autoFocus>
          多选框
        </Checkbox>
        <Checkbox readOnly>
          多选框
        </Checkbox>
        <Checkbox disabled>
          多选框
        </Checkbox>
      </div>
    )
  }
}
