<!-- # [Button](http://naotu.baidu.com/file/111809d1ee65fd61593e3afc13e79839?token=6b90e3ea029b1c7d) -->
### 代码演示
##### **按钮类型(type)**

按钮有以下几种类型：默认按钮、主按钮、次按钮、失效按钮、虚线按钮、危险按钮。

通过设置 `type` 为 `default`、 `primary`、 `secondary`、 `disabled`、 `dashed`、 `danger`可分别创建默认按钮、主按钮、次按钮、失效按钮、虚线按钮、危险按钮。需要强引导用主按钮，主按钮在同一个操作区域最好只出现一次。

```jsx
<Button type='default'>默认</Button>
<Button type='primary'>主要</Button>
<Button type='secondary'>次要</Button>
<Button disabled>禁止</Button>
<Button type='dashed'>虚线</Button>
<Button type='danger'>危险</Button>
```

##### **文字按钮(icon)**
添加 `text` 属性即可让按钮变成文字按钮，同时按钮样式也会改变。
```jsx
<Button type='default' text>默认</Button>
<Button type='secondary' text>主要</Button>
```

##### **按钮尺寸(size)**
按钮有大、中、小三种尺寸。
通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

```jsx
<Button type='primary' size='small'>按钮</Button>
<Button type='primary'>按钮</Button>
<Button type='primary' size='large'>按钮</Button>
```

##### **跳转按钮(size)**
通过设置 `href` 属性可把按钮设为跳转按钮，同 `a` 标签类似。
```jsx
<Button type='secondary' href='http://www.baidu.com' target='_blank'>新页面</Button>
<Button type='secondary' href='http://www.baidu.com' target='_self'>本页面</Button>
```

##### **图标按钮(icon)**
当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。
如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
```jsx
<Button icon='delete' size='small'>图标</Button>
<Button icon='delete'>图标</Button>
<Button icon='delete' size='large'>图标</Button>
<br /><br />
<Button icon='down' size='small'>图标</Button>
<Button icon='down' >图标</Button>
<Button icon='down' size='large'>图标</Button>
<br /><br />

<Button icon='delete' size='small' shape='circle' />
<Button icon='delete' shape='circle' />
<Button icon='delete' size='large' shape='circle' />
<br /><br />

<Button icon='delete' shape='square' size='small' />
<Button icon='delete' shape='square' />
<Button icon='delete' shape='square' size='large' />
```

##### **幽灵按钮(ghost)**
通过设置 `ghost` 可将按钮设置为幽灵按钮，幽灵按钮将按钮的内容反色，背景透明。
```jsx
<div style={{ background: '#2F323B',height: '50px',paddingTop: '10px',paddingLeft: '10px'}}>
  <Button ghost>默认</Button>
  <Button type='primary' ghost>重要</Button>
  <Button type='dashed' ghost>虚线</Button>
  <Button type='danger' ghost>危险</Button>
  <Button disabled ghost>禁用</Button>
</div>
```
##### **block按钮(block)**
`block` 按钮会使按钮适合其父宽度。
```jsx
<div style={{ width: '600px' }}>
  <Button type='primary' block>主要</Button>
  <br />
  <br />
  <Button block>默认</Button>
</div>
```
##### **组合按钮(ButtonGroup)**
可使用 `Button.Group` 将个按钮组合在一起。演示代码中的 `ButtonGroup=Button.Group`
```jsx
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

### Api
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

<style> .idoll-btn{margin-left: 10px}</style>
