import React from 'react';
import Button from 'components/button';
import Message from 'components/message/index';
import Switch from 'components/switch/index';

export default class EditDelayDemo extends React.Component {
  state = {
    normal: false
  }

  onChange = (checked) => {
    this.setState({ normal: !this.state.normal });
  }
  render() {
    const { normal } = this.state;
    const DelayInfo = () => {
      Message.info('这是基本的信息提示，并且在10s之后会自动关闭', 10, normal);
    };
    return (
      <div>
        <h3>切换message是否以背景颜色来展示</h3>
        <Switch defaultChecked onChange={this.onChange} /><br />
        <Button onClick={DelayInfo}>10s后关闭</Button>
      </div>
    )
  }
}
