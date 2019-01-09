import React from 'react';
import Transfer from 'components/transfer/index';

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


export default class CustomTransferStyle extends React.Component {
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
    const listStyle = {
      width: 300
    }
    return (
      <div style={{ marginTop: 40 }}>
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
      </div>
    )
  }
}
