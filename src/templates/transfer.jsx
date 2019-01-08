import React from 'react';
import Transfer from 'components/transfer/index';
import Switch from '../../components/switch/index';

import './transfer.less';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `内容${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key);


export default class TransferView extends React.Component {
  state = {
    targetKeys: oriTargetKeys,
    selectedKeys: [],
    disabled: true,
  }

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  }

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  }

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  }

  handleDisable = (disabled) => {
    this.setState({ disabled });
  };
  render() {
    const { targetKeys, selectedKeys, disabled } = this.state;
    const lazy = {height: 80, offset: 900};
    const listStyle = {
      width: 300
    }
    return (
      <div id='main-container'>
        <h1 className='h1'>基本使用</h1>
        <h2 className='h2'>最基本的用法，展示了disabled、titles、 dataSource、targetKeys、每行的渲染函数 render 以及回调函数 onChange onSelectChange onScroll 的用法。</h2>
        <div style={{marginBottom: 15}}>
          <Switch
            checked={disabled}
            onChange={this.handleDisable}
          />
        </div>
        <Transfer
          titles={['显示字段', '隐藏字段']}
          dataSource={mockData}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
          disabled={!disabled}
          />
        <h1 className='h1'>自定义类</h1>
        <h2 className='h2'>可自定义类，控制容器的样式</h2>
        <Transfer
          className='container-style'
          titles={['显示字段', '隐藏字段']}
          dataSource={mockData}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
          disabled={!disabled}
          />
        <h1 className='h1'>懒加载</h1>
        <h2 className='h2'>Transfer 使用了 react-lazy-load 优化性能，这里可以设置相关参数。设为 false 可以关闭懒加载。</h2>
        <Transfer
          titles={['显示字段', '隐藏字段']}
          dataSource={mockData}
          lazy={lazy}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
          disabled={!disabled}
          />
        <h1 className='h1'>自定义两个穿梭框的样式</h1>
        <h2 className='h2'>如果默认的穿梭框的样式不能满足UI，则通过listStyle配置</h2>
        <Transfer
          titles={['显示字段', '隐藏字段']}
          dataSource={mockData}
          targetKeys={targetKeys}
          listStyle={listStyle}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
          disabled={!disabled}
          />
        <h1 className='h1'>自定义操作按钮文字</h1>
        <h2 className='h2'>默认组件的操作按钮时左右箭头，如果需要，可通过operations自定义内容，顺序从上而下</h2>
        <Transfer
          titles={['显示字段', '隐藏字段']}
          operations={['右', '左']}
          dataSource={mockData}
          targetKeys={targetKeys}
          listStyle={listStyle}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
          disabled={!disabled}
          />
      </div>
    )
  }
}
