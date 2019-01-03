用来触发操作和链接。

##### **基本用法**
通过 `type` 属性来控制按钮样式；
按钮中的文字要尽可能短，并且清晰的表示按钮被激活时会发生什么。一个屏幕上应该只出现一个主按钮，主按钮需谨慎使用。

```jsx
import { Button } from 'dbox-ui';
const buttonStyle = {
  marginLeft: '10px'
};
<div>
  <Button style={buttonStyle}>默认</Button>
  <Button type='primary' style={buttonStyle}>主要</Button>
  <Button type='secondary' style={buttonStyle}>次要</Button>
  <Button disabled style={buttonStyle}>禁用</Button>
  <Button type='dashed' style={buttonStyle}>虚线</Button>
  <Button type='danger' style={buttonStyle}>危险</Button>
</div>
```

##### **图标按钮**
通过 `icon` 属性在按钮中嵌入图标，设置 iconLocation 可以控制图标的位置，对于没有文字的图标按钮可以通过设置 `shape` 属性控制按钮的形状为圆形或方形。 在按钮中使用图标可以吸引更多注意力或帮助传达更多意义。
```jsx
import { Button } from 'dbox-ui';
const buttonStyle = {
  marginLeft: '10px'
};
<div>
  <Button icon='delete' size='small' style={buttonStyle}>图标</Button>
  <Button icon='delete' style={buttonStyle}>图标</Button>
  <Button icon='delete' size='large' style={buttonStyle}>图标</Button>
  <br /><br />
  <Button icon='down' iconLocation='right' size='small' style={buttonStyle}>图标</Button>
  <Button icon='down' iconLocation='right' style={buttonStyle}>图标</Button>
  <Button icon='down' iconLocation='right' size='large' style={buttonStyle}>图标</Button>
  <br /><br />

  <Button icon='down' loading iconLocation='right' size='small' style={buttonStyle}>加载中</Button>
  <Button icon='down' loading iconLocation='right' style={buttonStyle}>加载中</Button>
  <Button icon='down' loading iconLocation='right' size='large' style={buttonStyle}>加载中</Button>
  <br /><br />

  <Button icon='delete' size='small' shape='circle' style={buttonStyle}/>
  <Button icon='delete' shape='circle' style={buttonStyle}/>
  <Button icon='delete' size='large' shape='circle' style={buttonStyle}/>
  <br /><br />

  <Button icon='delete' shape='square' size='small' style={buttonStyle}/>
  <Button icon='delete' shape='square' style={buttonStyle}/>
  <Button icon='delete' shape='square' size='large' style={buttonStyle}/>
</div>
```

##### **文字按钮**
通过添加 `text` 属性可以设置文字按钮，文字按钮常用于链接跳转。
```jsx
import { Button } from 'dbox-ui';
const buttonStyle = {
  marginLeft: '10px'
};
<div>
  <Button text style={buttonStyle}>默认</Button>
  <Button type='secondary' text style={buttonStyle}>主要</Button>
</div>
```

##### **按钮尺寸**
通过 `size` 属性来控制按钮的大、小尺寸，默认尺寸为中。

```jsx
import { Button } from 'dbox-ui';
const buttonStyle = {
  marginLeft: '10px'
};
<div>
  <Button type='primary' size='small' style={buttonStyle}>按钮</Button>
  <Button type='primary' style={buttonStyle}>按钮</Button>
  <Button type='primary' size='large' style={buttonStyle}>按钮</Button>
</div>
```

##### **跳转按钮**
通过 `href` 属性来设置跳转按钮，并且可以通过 `target` 属性控制打开方式。
```jsx
import { Button } from 'dbox-ui';
const buttonStyle = {
  marginLeft: '10px'
};
<div>
  <Button type='secondary' href='http://www.baidu.com' target='_blank' style={buttonStyle}>新页面</Button>
  <Button type='secondary' href='http://www.baidu.com' target='_self' style={buttonStyle}>本页面</Button>
</div>
```

##### **幽灵按钮**
通过添加 `ghost` 属性来设置幽灵按钮
```jsx
import { Button } from 'dbox-ui';
const buttonStyle = {
  marginLeft: '10px'
};
<div style={{ background: '#2F323B',height: '50px',paddingTop: '10px',paddingLeft: '10px'}}>
  <Button ghost style={buttonStyle}>默认</Button>
  <Button type='primary' ghost style={buttonStyle}>重要</Button>
  <Button type='dashed' ghost style={buttonStyle}>虚线</Button>
  <Button type='danger' ghost style={buttonStyle}>危险</Button>
  <Button disabled ghost style={buttonStyle}>禁用</Button>
</div>
```
##### **block按钮**
通过 `block` 属性将按钮宽度撑满父容器。
```jsx
import { Button } from 'dbox-ui';
<div style={{ width: '600px' }}>
  <Button type='primary' block>主要</Button>
  <br />
  <br />
  <Button block>默认</Button>
</div>
```
##### **组合按钮**
通过 `ButtonGroup` 将按钮组合在一起，可通过设置 `size` 属性控制组合按钮的尺寸，默认为中。
```jsx
import { Button,Icon } from 'dbox-ui';
const ButtonGroup = Button.Group;
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
```

##### **Api**
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | `false` |
| disabled | 按钮失效状态 | boolean | `false` |
| ghost | 幽灵属性，使按钮背景透明| boolean | `false` |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| icon | 设置按钮的图标类型 | string | - |
| shape | 设置按钮形状，可选值为 `circle` 、`square` 或者不设 | string | - |
| size | 设置按钮大小，可选值为 `small`、`large` 或者不设 | string | `default` |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |
| text | 设置按钮为文字按钮 | boolean | `false` |
| type | 设置按钮类型，可选值为 `default`、 `primary`、 `secondary`、 `disabled`、 `dashed`、 `danger`或者不设 | string | - |
| onClick | `click` 事件的 handler | function | - |


```jsx noeditor
import {BackTop} from 'dbox-ui';
import ButtonView from '../prevPage/button';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <ButtonView />
</div>
```
