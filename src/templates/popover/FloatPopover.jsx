import React from 'react';
import {Popover, Button} from 'components';


export default class FloatPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		visible: false
    }
    this.hide = this.hide.bind(this);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
  };
	hide () {
		this.setState({
		  visible: false
		});
	};
	handleVisibleChange (visible) {
		this.setState({ visible });
	};
  render() {
  return (
    <Popover
      content={<a onClick={this.hide}>关闭</a>}
      title='标题'
      trigger='click'
      visible={this.state.visible}
      onVisibleChange={this.handleVisibleChange}
    >
      <Button>单击鼠标</Button>
    </Popover>
  )
}
}
