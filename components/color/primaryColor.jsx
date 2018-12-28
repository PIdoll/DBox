import React from 'react';
import { Row, Col } from '../grid';
import './style';

const primaryColor = [
  { title: 'Primary', value: '#13B886', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', bgColor: '#13B886', color: '#ffffff' },
  { title: 'Black', value: '#000000', description: '用于字体颜色、页面背景、等中性色场景，并以不透明度进行层级区分。', bgColor: '#000000', color: '#ffffff' },
  { title: 'White', value: '#ffffff', description: '用于字体颜色、卡片背景等不需要有色彩进行区分的场景，支持以不透明度进行层级区分。', bgColor: '#ffffff', color: '#000000' },
]

class Color extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className='idoll-color-h3'>主色（Primary Colors)</h2>
        <p className='idoll-color-p'>DBox 的主要色板由绿色、黑色和白色组成。这些颜色存在于整个系统的所有页面之中。其中，Emeriald Green（宝石绿） 是我们的品牌色，寓意创新、活力、价值。</p>
        <Row gutter={16}>
          {primaryColor.map((item, index) => {
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
          })
        }
        </Row>
        <Row gutter={36} >
          <h3 className='idoll-color-main-title'>推荐主色</h3>
          <Col span={10}>
            <span className='idoll-color-recommend1'>#FF5F3F</span>
            <span className='idoll-color-recommend2'>#FF9933</span>
            <span className='idoll-color-recommend3'>#666699</span>
            <span className='idoll-color-recommend4'>#549FFF</span>
          </Col>
          <Col span={10}>
            <span className='idoll-color-recommend1'>#FF7457</span>
            <span className='idoll-color-recommend2'>#FF9966</span>
            <span className='idoll-color-recommend3'>#13B886</span>
            <span className='idoll-color-recommend4'>#336699</span>
          </Col>
        </Row>
      </React.Fragment >
    )
  }
}
export default Color;
