#### **何时使用**


* 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
* 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

#### **基本用法**
```jsx
class DrawerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: false
    }
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
  };
  showDrawer () {
    this.setState({
      visible: true,
    });
  }
  onClose () {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
    <div>
      <Button type='primary' onClick={this.showDrawer}>
        打开基础抽屉
      </Button>
      <Drawer
        title='基础抽屉'
        placement='right'
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
      >
        <p>一些基本内容...</p>
        <p style={{marginTop: 24, marginBottom: 24}}>一些基本内容...</p>
        <p>一些基本内容...</p>
      </Drawer>
    </div>
  )
}
}
<DrawerView />
```
#### **信息预览**
```jsx
const { Row, Col } = require('../../components/grid');
const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};
const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);
class DrawerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: false
    }
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
  };
  showDrawer () {
    this.setState({
      visible: true,
    });
  }
  onClose () {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
        <div>
          <Button type='primary' href='javascript:;' onClick={this.showDrawer}>查看个人信息</Button>
          <Drawer
            width={620}
            placement='right'
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
        >
            <p style={{ ...pStyle, marginBottom: 24 }}>个人信息</p>
            <p style={pStyle}>私人信息</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title='名称' content='小明' />{' '}
              </Col>
              <Col span={12}>
                <DescriptionItem title='账户' content='Idoll@example.com' />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title='城市' content='上海' />
              </Col>
              <Col span={12}>
                <DescriptionItem title='国家' content='中国' />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title='生日' content='2018-8-8' />
              </Col>
              <Col span={12}>
                <DescriptionItem title='个人博客' content={<a target='_black' href='http://www.Dbox.com'>http://www.Dbox.com</a>} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title='座右铭'
                  content='不忘初心,方得始终'
              />
              </Col>
            </Row>
            <Divider />
            <p style={pStyle}>公司信息</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title='职业' content='程序猿' />
              </Col>
              <Col span={12}>
                <DescriptionItem title='特长' content='码代码' />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title='部门' content='开发部' />
              </Col>
              <Col span={12}>
                <DescriptionItem title='业务组' content='贷款组' />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title='技能'
                  content='C / C + +, Javascript, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.'
              />
              </Col>
            </Row>
            <Divider />
            <p style={pStyle}>🔗地址</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title='📮邮箱' content='Dbox@example.com' />
              </Col>
              <Col span={12}>
                <DescriptionItem title='📱手机' content='+86 188 8888 6666' />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title='Github'
                  content={(
                    <a href='http://github.com'>Github</a>
                )}
              />
              </Col>
            </Row>
          </Drawer>
        </div>
    )
}
}
<DrawerView />
```

#### **四种方位**
```jsx
const RadioGroup = Radio.RadioGroup;
class DrawerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: false,
      placement: 'right'
    }
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onChange = this.onChange.bind(this)

  };
  onChange (e) {
    this.setState({
      placement: e.target.value,
    });
  }
  showDrawer () {
    this.setState({
      visible: true,
    });
  }
  onClose () {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
    <div>
      <RadioGroup
        style={{ marginRight: 8 }}
        defaultValue={this.state.placement}
        onChange={this.onChange}
    >
        <Radio value='top'>上</Radio>
        <Radio value='bottom'>下</Radio>
        <Radio value='left'>左</Radio>
        <Radio value='right'>右</Radio>
      </RadioGroup>
      <br />
      <Button type='primary' onClick={this.showDrawer}>
      打开方位抽屉
      </Button>
      <Drawer
        title='基础抽屉'
        placement={this.state.placement}
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
    >
        <p>一些基本内容...</p>
        <p style={{marginTop: 24, marginBottom: 24}}>一些基本内容...</p>
        <p>一些基本内容...</p>
      </Drawer>
    </div>  )
}
}
<DrawerView />
```


#### **Drawer**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closable | 是否显示右上角的关闭按钮 | boolean | true |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false |
| getContainer | 指定 Drawer 挂载的 HTML 节点 | HTMLElement \| `() => HTMLElement` \| selectors  | 'body' |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| mask | 是否展示遮罩 | Boolean | true |
| maskStyle | 遮罩样式 | object | {} |
| style | 可用于设置 Drawer 的样式，调整浮层位置等 | object | - |
| title | 标题 | string \| ReactNode | - |
| visible | Drawer 是否可见 | boolean | - |
| width | 宽度 | string \| number | 256 |
| height | 高度, 在 `placement` 为 `top` 或 `bottom` 时使用 | string \| number | 256 |
| className | 对话框外层容器的类名 | string | - |
| zIndex | 设置 Drawer 的 `z-index` | Number | 1000 |
| placement | 抽屉的方向 | 'top'  \| 'right' \| 'bottom' \| 'left' | 'right'
| onClose | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | 无 |
