
#### **概述**

安全使用Flex布局，该组件有两个部分，一个是Row，一个是Col，采用Row包裹Col的方法来实现栅格布局，并且栅格布局遵从Boostrap3的标准。

####  **基本栅格布局**
```jsx
const {Row, Col} = require('../grid');
const RowDemoStyle = {
  backgroundColor: '#13B886',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const evenColor = {
  backgroundColor: ' #3CCB69',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
class GridView extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <div style={RowDemoStyle} >col-12</div>
          </Col>
          <Col span={12}>
            <div style={evenColor} >col-12</div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div style={RowDemoStyle} >col-8</div>
          </Col>
          <Col span={8}>
            <div style={evenColor} >col-8</div>
          </Col>
          <Col span={8}>
            <div style={RowDemoStyle} >col-8</div>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={6}>
            <div style={evenColor} >col-6</div>
          </Col>
          <Col span={6}>
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={6}>
            <div style={evenColor} >col-6</div>
          </Col>
        </Row>
      </div>
    )
  }
}
<GridView />
```
#### **拥有间隔的栅格**
```jsx
const {Row, Col} = require('../grid');
const RowDemoStyle = {
  backgroundColor: '#13B886',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const evenColor = {
  backgroundColor: ' #3CCB69',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
class GridView extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={6}>
            <div style={evenColor} >col-6</div>
          </Col>
          <Col span={6}>
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={6}>
            <div style={evenColor} >col-6</div>
          </Col>
        </Row>
      </div>
    )
  }
}
<GridView />
```
#### **可以左右偏移的栅格**
```jsx
const {Row, Col} = require('../grid');
const RowDemoStyle = {
  backgroundColor: '#13B886',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const evenColor = {
  backgroundColor: ' #3CCB69',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
class GridView extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={6} offset={6}>
            <div style={RowDemoStyle}>col-6 col-offset-6</div>
          </Col>
          <Col span={6} offset={6}>
            <div style={evenColor} >col-6 col-offset-6</div>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={4}>
            <div style={RowDemoStyle}>col-8 col-offset-4</div>
          </Col>
          <Col span={8} offset={4}>
            <div style={evenColor} >col-8 col-offset-4</div>
          </Col>
        </Row>
      </div>
    )
  }
}
<GridView />
```
#### **可排序的栅格**
```jsx
const {Row, Col} = require('../grid');
const RowDemoStyle = {
  backgroundColor: '#13B886',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const evenColor = {
  backgroundColor: ' #3CCB69',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}

class GridView extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={16} push={8}>
            <div style={RowDemoStyle}>col-6 col-push-8</div>
          </Col>
          <Col span={8} pull={16}>
            <div style={evenColor} >col-6 col-pull-16</div>
          </Col>
        </Row>
      </div>
    )
  }
}
<GridView />
```
#### **Flex布局水平对齐**
```jsx
const {Row, Col} = require('../grid');
const RowDemoStyle = {
  backgroundColor: '#13B886',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const evenColor = {
  backgroundColor: ' #3CCB69',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const headDemo = {
  margin: '30px 0 10px 0'
}
const alignDemo = {
      height: '80px',
      backgroundColor: '#f5f5f5'
    }
class GridView extends React.Component {
  render() {
    return (
      <div>
        <h5 style={headDemo}>左对齐</h5>
        <Row type='flex' justify='start' align='middle' style={alignDemo}>
          <Col span={4} >
            <div style={RowDemoStyle}>col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
        </Row>
        <h5 style={headDemo}>右对齐</h5>
        <Row type='flex' justify='end' align='middle' style={alignDemo}>
          <Col span={4} >
            <div style={RowDemoStyle}>col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
        </Row>
        <h5 style={headDemo}>居中对齐</h5>
        <Row type='flex' justify='center' align='middle' style={alignDemo}>
          <Col span={4} >
            <div style={RowDemoStyle}>col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
        </Row>
        <h5 style={headDemo}>两端对齐</h5>
        <Row type='flex' justify='space-between' align='middle' style={alignDemo}>
          <Col span={4} >
            <div style={RowDemoStyle}>col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
        </Row>
        <h5 style={headDemo}>每个项目两端间隔相等</h5>
        <Row type='flex' justify='space-around' align='middle' style={alignDemo}>
          <Col span={4} >
            <div style={RowDemoStyle}>col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
        </Row>
      </div>
    )
  }
}
<GridView />
```
#### **Flex布局垂直对齐**
```jsx
const {Row, Col} = require('../grid');
const RowDemoStyle = {
  backgroundColor: '#13B886',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const evenColor = {
  backgroundColor: ' #3CCB69',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const headDemo = {
  margin: '30px 0 10px 0'
}
const alignDemo = {
      height: '80px',
      backgroundColor: '#f5f5f5'
    }
class GridView extends React.Component {
  render() {
    return (
      <div>
        <h5 style={headDemo}>垂直分布在顶部</h5>
        <Row type='flex' justify='center' align='top' style={alignDemo}>
          <Col span={4} >
            <div style={RowDemoStyle}>col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
        </Row>
        <h5 style={headDemo}>垂直分布在中间</h5>
        <Row type='flex' justify='center' align='middle' style={alignDemo}>
          <Col span={4} >
            <div style={RowDemoStyle}>col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
        </Row>
        <h5 style={headDemo}>垂直分布在低部</h5>
        <Row type='flex' justify='center' align='bottom' style={alignDemo}>
          <Col span={4} >
            <div style={RowDemoStyle}>col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={RowDemoStyle} >col-6</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-6</div>
          </Col>
        </Row>
      </div>
    )
  }
}
<GridView />
```
#### **Flex排序**
```jsx
const {Row, Col} = require('../grid');
const RowDemoStyle = {
  backgroundColor: '#13B886',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const evenColor = {
  backgroundColor: ' #3CCB69',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
 const alignDemo = {
  height: '80px',
  backgroundColor: '#f5f5f5'
}
class GridView extends React.Component {
  render() {
    return (
      <div>
        <Row type='flex' justify='space-around' align='middle' style={alignDemo}>
          <Col span={4} order={4}>
            <div style={RowDemoStyle} >col-order1</div>
          </Col>
          <Col span={4} order={3}>
            <div style={evenColor} >col-order2</div>
          </Col>
          <Col span={4} order={2}>
            <div style={RowDemoStyle} >col-order3</div>
          </Col>
          <Col span={4} order={1}>
            <div style={evenColor} >col-order4</div>
          </Col>
        </Row>
      </div>
    )
  }
}
<GridView />
```

#### **自定义栅格布局**
```jsx
const {Row, Col} = require('../grid');
const RowDemoStyle = {
  backgroundColor: '#13B886',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const evenColor = {
  backgroundColor: ' #3CCB69',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff'
}
const alignDemo = {
  height: '80px',
  backgroundColor: '#f5f5f5'
}
class GridView extends React.Component {
  render() {
    return (
      <div>
        <Row style={alignDemo} type='flex' align='middle'>
          <Col xs={4} sm={12} md={14} lg={2} xl={12}>
            <div style={RowDemoStyle}>col-12 </div>
          </Col>
          <Col xs={20} sm={12} md={4} lg={22} xl={12}>
            <div style={evenColor} >col-12</div>
          </Col>
        </Row>
      </div>
    )
  }
}
<GridView />
```

#### **Row**
| 参数       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| gutter    | 栅格间隔   | number | 0        |
| type      | 布局模式，可选 `flex`，现代浏览器下有效 | string |         |
| align     | flex 布局下的垂直对齐方式：`top` `middle` `bottom`  | string | `top` |
| justify   | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between`   | string | `start`  |

#### **Col**

| 参数      | 说明             | 类型               | 默认值       |
|----------|-----------------|--------------------|-------------|
| span     | 栅格占位格数，为 0 时相当于 `display: none`   | number | -        |
| order    | 栅格顺序，`flex` 布局模式下有效   | number | 0        |
| offset   | 栅格左侧的间隔格数，间隔内不可以有栅格  | number | 0        |
| push     | 栅格向右移动格数   | number | 0        |
| pull     | 栅格向左移动格数   | number | 0        |
| xs       | `<768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - |
| sm       | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - |
| md       | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - |
| lg       | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object|-|

<!-- <style>.idoll-row{margin-bottom:10px;}</style> -->
