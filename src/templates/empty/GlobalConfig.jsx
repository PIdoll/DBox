import React from 'react';
import {
    ConfigProvider, Switch, Divider, Icon,
    TreeSelect, Select
  } from 'components';
  const style = { width: 200 };

  const customizeRenderEmpty = () => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div style={{ textAlign: 'center' }}>
      <Icon type='smile' style={{ fontSize: 20 }} />
      <p>暂无数据</p>
    </div>
  );

  export default class GlobalConfig extends React.Component {
    state = {
        customize: false,
      };
      render() {
        const { customize } = this.state;
          return (
            <div>
              <Switch
                unCheckedChildren='default'
                checkedChildren='customize'
                checked={customize}
                onChange={(val) => {
            this.setState({ customize: val });
          }}
        />
              <Divider />
              <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
                <div className='config-provider'>
                  <h3>Select</h3>
                  <Select style={style} />
                  <h3>TreeSelect</h3>
                  <TreeSelect style={style} treeData={[]} />
                </div>
              </ConfigProvider>
            </div>
          )
      }
  }
