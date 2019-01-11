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
export default class OffsetGrid extends React.Component {
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
