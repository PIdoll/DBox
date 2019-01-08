import React from 'react';
import {Row, Col} from '../grid/index';
import Icon from '../icon';
import './style';

class PageView extends React.Component {
  render () {
    return (
      <Row type='flex' justify='space-between' align='middle' className='prevNextNav'>
        <Col>
          <a className='prevPage' href='/doc.html#/Components/DataDisplay/Timeline'>
            <Icon type='left' className='prevIcon' />
            <span>时间线</span>
          </a>
        </Col>
        <Col>
          <a className='prevPage' href='/doc.html#/Components/Feedback/Alert'>
            <span>警告提示</span>
            <Icon type='right' className='prevIcon prevNext' />
          </a>
        </Col>
      </Row>
    )
  }
}
export default PageView;
