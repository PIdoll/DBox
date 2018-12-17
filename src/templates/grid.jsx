import React from 'react';
import { Row, Col } from '../../components/grid/'

class GridView extends React.Component {
  render() {
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
      backgroundColor: '#dedede'
    }
    const headDemo = {
      margin: '30px 0 10px 0'
    }
    return (
      <div id='main-container'>
        <h1 style={{margin: '20px 0'}}>基本用法</h1>
        <Row>
          <Col span={12}>
            <div style={RowDemoStyle} >col-12</div>
          </Col>
          <Col span={12}>
            <div style={evenColor} >col-12</div>
          </Col>
        </Row>
        <br />
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
        <br />
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
        <br />

        <h1 style={{margin: '20px 0'}}>拥有间隔的栅格</h1>
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
        <br />

        <h1 style={{margin: '20px 0'}}>可以左右偏移的栅格</h1>
        <Row>
          <Col span={6} offset={6}>
            <div style={RowDemoStyle}>col-6 col-offset-6</div>
          </Col>
          <Col span={6} offset={6}>
            <div style={evenColor} >col-6 col-offset-6</div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={8} offset={4}>
            <div style={RowDemoStyle}>col-8 col-offset-4</div>
          </Col>
          <Col span={8} offset={4}>
            <div style={evenColor} >col-8 col-offset-4</div>
          </Col>
        </Row>

        <h1 style={{margin: '20px 0'}}>可排序的栅格</h1>
        <Row>
          <Col span={16} push={8}>
            <div style={RowDemoStyle}>col-6 col-push-8</div>
          </Col>
          <Col span={8} pull={16}>
            <div style={evenColor} >col-6 col-pull-16</div>
          </Col>
        </Row>
        <br />

        <h1 style={{margin: '20px 0'}}>Flex布局</h1>
        <h5 style={headDemo}>左对齐</h5>
        <Row type='flex' justify='start' style={alignDemo}>
          <Col span={4} >
            <div style={RowDemoStyle}>col-4</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-4</div>
          </Col>
          <Col span={4} >
            <div style={RowDemoStyle} >col-4</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-4</div>
          </Col>
        </Row>
        <br />
        <h5 style={headDemo}>右对齐</h5>
        <Row type='flex' justify='end' style={alignDemo}>
          <Col span={4} >
            <div style={RowDemoStyle}>col-4</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-4</div>
          </Col>
          <Col span={4} >
            <div style={RowDemoStyle} >col-4</div>
          </Col>
          <Col span={4} >
            <div style={evenColor} >col-4</div>
          </Col>
        </Row>
        <br />
        <h5 style={headDemo}>居中对齐</h5>
        <Row type='flex' justify='center' style={alignDemo}>
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
        <br />
        <h5 style={headDemo}>两端对齐</h5>
        <Row type='flex' justify='space-between' style={alignDemo}>
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
        <br />
        <h5 style={headDemo}>每个项目两端间隔相等</h5>
        <Row type='flex' justify='space-around' style={alignDemo}>
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
        <h5 style={headDemo}>Flex排序</h5>
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
        <br />
        <h1 style={{margin: '20px 0'}}>自适应栅格布局</h1>
        <Row style={alignDemo}>
          <Col xs={4} sm={12} md={14} lg={2} xl={12}>
            <div style={RowDemoStyle}>col-12 </div>
          </Col>
          <Col xs={20} sm={12} md={4} lg={22} xl={12}>
            <div style={evenColor} >col-12</div>
          </Col>
        </Row>
        <br />
      </div>
    )
  }
}
 export default GridView;
