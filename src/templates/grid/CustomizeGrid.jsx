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
export default class CustomizeGrid extends React.Component {
  render() {
    return (
      <Row style={alignDemo}>
        <Col xs={4} sm={12} md={14} lg={2} xl={12}>
          <div style={RowDemoStyle}>col-12 </div>
        </Col>
        <Col xs={20} sm={12} md={4} lg={22} xl={12}>
          <div style={evenColor} >col-12</div>
        </Col>
      </Row>

    )
  }
}
