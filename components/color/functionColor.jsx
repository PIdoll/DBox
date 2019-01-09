import React from 'react';
import { Row, Col } from '../grid';
import './style';

const functionColor = [
  { title: 'Success', value: '#3CCB69', description: '用于成功状态和信息提示和反馈。', color: '#ffffff' },
  { title: 'Warning', value: '#F9AA29', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', color: '#ffffff' },
  { title: 'Error', value: '#F44336', description: '用于字体颜色、卡片背景等不需要有色彩进行区分的场景，支持以不透明度进行层级区分。', color: '#ffffff' },
]
class FunctionColor extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className='idoll-color-h3'>功能色（Functional Colors）</h2>
        <p className='idoll-color-p'>DBox 的功能色由绿色、黄色、红色组成，每种颜色都是有目的性的选择，以便在产品中提供有意义的反馈，且遵从用户对颜色的基本了解和认知习惯。</p>
        <Row gutter={16}>
          {functionColor.map((item, index) => {
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
export default FunctionColor;
