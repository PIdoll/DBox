import React from 'react';
import {Row, Col} from '../grid/index';
import Icon from '../icon';
import './style';

class PageView extends React.Component {
  render () {
    return (
      <Row type='flex' justify='space-between' align='middle' className='prevNextNav'>
        <Col>
          <a className='prevPage' href='/doc.html#/GetStarted'>
            <Icon type='left' className='prevIcon' />
            <span>快速上手</span>
          </a>
        </Col>
        <Col>
          <a className='prevPage' href='/doc.html#/Color'>
            <span>色彩</span>
            <Icon type='right' className='prevIcon prevNext' />
          </a>
        </Col>
      </Row>
    )
  }
}
export default PageView;
