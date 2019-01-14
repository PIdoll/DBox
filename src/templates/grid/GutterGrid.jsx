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
export default class GutterGrid extends React.Component {
  render() {
    return (
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
    )
  }
}
