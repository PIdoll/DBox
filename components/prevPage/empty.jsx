import React from 'react';
import {Row, Col} from '../grid/index';
import Icon from '../icon';
import './style';

class PageView extends React.Component {
  render () {
    return (
      <Row type='flex' justify='space-between' align='middle' className='prevNextNav'>
        <Col>
          <a className='prevPage' href='/doc.html#/Components/DataDisplay/Collapse'>
            <Icon type='left' className='prevIcon' />
            <span>折叠面板</span>
          </a>
        </Col>
        <Col>
          <a className='prevPage' href='/doc.html#/Components/DataDisplay/Popover'>
            <span>气泡卡片</span>
            <Icon type='right' className='prevIcon prevNext' />
          </a>
        </Col>
      </Row>
    )
  }
}
export default PageView;
