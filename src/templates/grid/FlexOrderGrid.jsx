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
export default class FlexOrderGrid extends React.Component {
  render() {
    return (
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
    )
  }
}
