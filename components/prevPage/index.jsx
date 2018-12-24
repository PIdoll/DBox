import React from 'react';
import {Row, Col} from '../grid/index';
import Icon from '../icon';
import './style';

class PageView extends React.Component {
  render () {
    return (
      <Row type='flex' justify='space-between' align='middle' className='prevNextNav'>
        <Col>
          <a className='prevPage' href='javascript:;'>
            <Icon type='pro-left' className='prevIcon' />
            <span>上一页</span>
          </a>
        </Col>
        <Col>
          <a className='prevPage'>
            <span>下一页</span>
            <Icon type='pro-right' className='prevIcon prevNext' />
          </a>
        </Col>
      </Row>
    )
  }
}
export default PageView;

