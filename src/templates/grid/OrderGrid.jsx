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
export default class OrderGrid extends React.Component {
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
