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
export default class HorizontalGrid extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}
