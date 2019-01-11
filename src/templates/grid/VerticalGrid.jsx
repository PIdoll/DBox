import React from 'react';
import {Row, Col} from 'components/grid';

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
export default class VerticalGrid extends React.Component {
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
