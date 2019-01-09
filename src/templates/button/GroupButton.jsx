import React from 'react';

import Button from 'components/button';
import Icon from 'components/icon';
const ButtonGroup = Button.Group;

export default class GroupButton extends React.Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button>取消</Button>
          <Button>确定</Button>
        </ButtonGroup>
        <br />
        <br />

        <ButtonGroup>
          <Button >选择1</Button>
          <Button >选择2</Button>
          <Button >选择3</Button>
        </ButtonGroup>
        <br />
        <br />

        <ButtonGroup>
          <Button>
            <Icon type='left-circle-o' />向后
          </Button>
          <Button>
            向前<Icon type='right-circle-o' />
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}
