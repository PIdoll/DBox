import React from 'react';
import Transfer from 'components/transfer/index';
import Switch from '../../components/switch/index';

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
    disabled: false,
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
    return (
      <div id='main-container'>
        <h1 className='h1'>基本使用</h1>
        <div style={{marginBottom: 15}}>
          <Switch
            unCheckedChildren='开启'
            checkedChildren='禁用'
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
          disabled={disabled}
          />
      </div>
    )
  }
}
