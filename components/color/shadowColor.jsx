import React from 'react';
import { Row, Col } from '../grid';
import './style';

const shadowColor = [
  { title: 'Small', value: '0 8px 16px 0', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', bgColor: '#ffffff', color: '#000000', shadow: '0px 2px 8px 0px rgba(0,0,0,0.1)', rightColor: 'rgba(0,0,0,0.6)' },
  { title: 'Large', value: '0 8px 16px 0', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', bgColor: '#ffffff', color: '#000000', shadow: '0px 8px 16px 0px rgba(0,0,0,0.1)', rightColor: 'rgba(0,0,0,0.6)' },
  { title: 'Button', value: '0 2px 8px 0', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', bgColor: '#13B886', color: '#ffffff', shadow: '0px 2px 8px 0px rgba(19,184,134,0.2)' },
]
class ShadowColor extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className='idoll-color-h3'>阴影（Shadows）</h2>
        <p className='idoll-color-p'>DBox 的投影规范了 3 种场景，Small、Large、Button，根据实际情况分别取用，基本能满足所有场景。为减少样式冗余，没有按方向细分。</p>
        <Row gutter={16}>
          {shadowColor.map((item, index) => {
            return (
              <Col span={6} key={index}>
                <dl className='idoll-color-item '>
                  <dt className='idoll-color-item-title-shadow' style={{backgroundColor: item.bgColor, color: item.color, boxShadow: item.shadow}}>
                    {item.title}
                    <span className='idoll-color-item-title-value' style={{color: item.rightColor}}>{item.value}</span>
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
export default ShadowColor;
