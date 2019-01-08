import React from 'react';
import {Row, Col} from '../grid/index';
import Icon from '../icon';
import './style';

class PageView extends React.Component {
  render () {
    return (
      <Row type='flex' justify='space-between' align='middle' className='prevNextNav'>
        <Col>
          <a className='prevPage' href='/doc.html#/Components/DataEntry/Radio'>
            <Icon type='left' className='prevIcon' />
            <span>单选框</span>
          </a>
        </Col>
        <Col>
          <a className='prevPage' href='/doc.html#/Components/DataEntry/Switch'>
            <span>开关</span>
            <Icon type='right' className='prevIcon prevNext' />
          </a>
        </Col>
      </Row>
    )
  }
}
export default PageView;
