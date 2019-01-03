import React from 'react';
import {Row, Col} from '../grid/index';
import Icon from '../icon';
import './style';

class PageView extends React.Component {
  render () {
    return (
      <Row type='flex' justify='space-between' align='middle' className='prevNextNav'>
        <Col>
          <a className='prevPage' href='/doc.html#/Components/Others/BackTop'>
            <Icon type='left' className='prevIcon' />
            <span>返回顶部</span>
          </a>
        </Col>
      </Row>
    )
  }
}
export default PageView;
