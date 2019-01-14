import React from 'react';

import Tooltip from 'components/tooltip';
import Button from 'components/button';
const text = <span>提示文字</span>;
export default class BasicInput extends React.Component {
  render() {
    return (
      <div className='arrow'>
        <Tooltip placement='topLeft' title={text} >
          <Button>边缘对齐</Button>
        </Tooltip>
        <br />
        <br />
        <Tooltip placement='topLeft' title={text} arrowPointAtCenter>
          <Button>箭头指向中心 </Button>
        </Tooltip>
      </div>
    )
  }
}
