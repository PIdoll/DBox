import React from 'react';
import { Row, Col } from '../grid';
import './style';


const otherColor = [
  { title: 'Disabled', value: '#F8F9FC', description: '用于不可用状态组件的颜色（白底）。', color: '#000000' },
  { title: 'Navbar', value: '#2F323B', description: '用于导航栏的默认背景色。', color: '#ffffff' },
]
class OthersColor extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className='idoll-color-h3'>其他颜色（Other Colors）</h2>
        <p className='idoll-color-p'>DBox 的其他颜色是除主色和中性色之外有色彩的颜色，目前包括禁用色和导航条背景。</p>
        <Row gutter={16}>
          {otherColor.map((item, index) => {
            return (
              <Col span={6} key={index}>
                <dl className='idoll-color-item '>
                  <dt className='idoll-color-item-title' style={{backgroundColor: item.value, color: item.color}}>
                    {item.title}
                    <span className='idoll-color-item-title-value'>{item.value}</span>
                  </dt>
                  <dd className='idoll-color-item-desc'>
                    {item.description}
                  </dd>
                </dl>
              </Col>
            )
          })}
        </Row>
      </React.Fragment >
    )
  }
}
export default OthersColor;
