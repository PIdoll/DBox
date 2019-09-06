空状态时的展示占位图。
##### **简单展示**

```jsx
import {Empty} from 'dbox-ui';

<Empty />

```

##### **自定义**
自定义图片链接、图片大小、描述、附属内容

```jsx
import {Empty, Button} from 'dbox-ui';
<Empty
            image='https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original'
            imageStyle={{
              height: 60,
            }}
            description={
              <span>
                自定义 <a href='#API'>描述</a>
              </span>
            }
          >
            <Button type='primary'>创建</Button>
          </Empty>
```

##### **全局化配置**
自定义全局组件的 Empty 样式
```jsx

import {ConfigProvider, Switch, Divider, Icon,
    TreeSelect, Select} from 'dbox-ui';
const style = { width: 200 };

function customizeRenderEmpty () {
return (
    <div style={{ textAlign: 'center' }}>
        <Icon type='smile' style={{ fontSize: 20 }} />
        <p>暂无数据</p>
    </div>
)
};

class GlobalConfig extends React.Component {
    
      constructor(props) {
        super(props);
        this.state = {
        customize: false,
      };
      }
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

<GlobalConfig/>
```
##### **API**



```jsx
import {BackTop} from 'dbox-ui';
import EmptyView from '../prevPage/empty';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <EmptyView />
</div>

```