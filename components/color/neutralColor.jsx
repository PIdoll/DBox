import React from 'react';
import { Row, Col } from '../grid';
import './style';

const neutralColor = [
  {title: 'TableHeader', value: '#FAFAFA', description: '用于表格的标题行背景。', bgColor: '#FAFAFA', color: '#000000', rightColor: 'rgba(0,0,0,0.6)'},
  {title: 'Background', value: '#F8F8F8', description: '用于页面级的背景。', bgColor: '#F8F8F8', color: '#000000', rightColor: 'rgba(0,0,0,0.6)'},
  {title: 'Divider', value: '#F5F5F5', description: '用于分割线。', bgColor: '#F5F5F5', color: '#000000', rightColor: 'rgba(0,0,0,0.6)'},
  {title: 'Border', value: '#E2E2E2', description: '用于边框，含实线和虚线。', bgColor: '#E2E2E2', color: '#000000', rightColor: 'rgba(0,0,0,0.6)'},
  {title: 'Disable_Text', value: '#000 20%', description: '用于禁用文字的颜色，图标置灰。', bgColor: 'rgba(0,0,0,.2)', color: '#ffffff'},
  {title: 'Secondary_Text', value: '#000 40%', description: '用于次要文字颜色，图标默认颜色。（注：图标默认颜色比文字默认颜色低一个层级，弱化装饰元素）', bgColor: 'rgba(0,0,0,.4)', color: '#ffffff'},
  {title: 'Body_Text', value: '#000 60%', description: '用于默认文字颜色，图标Hover颜色。', bgColor: 'rgba(0,0,0,.6)', color: '#ffffff'},
  {title: 'Title_Text', value: '#000 80%', description: '用于标题文字的颜色，图标Pressed颜色。', bgColor: 'rgba(0,0,0,.8)', color: '#ffffff'},
  {title: 'DisableText', value: '#FFF 40%', description: '用于禁用文字颜色，图标置灰。', bgColor: 'rgba(255,255,255,.4)', color: '#000000', rightColor: 'rgba(0,0,0,0.6)'},
  {title: 'Secondary', value: '#FFF 60%', description: '用于次要文字颜色，图标默认颜色。', bgColor: 'rgba(255,255,255,.6)', color: '#000000', rightColor: 'rgba(0,0,0,0.6)'},
  {title: 'Body', value: '#FFF 80%', description: '用于主要（默认）文字颜色，图标Hover颜色。', bgColor: 'rgba(255,255,255,.8)', color: '#000000', rightColor: 'rgba(0,0,0,0.6)'},
  {title: 'Title', value: '#FFFFFF', description: '用于标题文字颜色，图标Pressed颜色。', bgColor: 'rgba(255,255,255,1)', color: '#000000', rightColor: 'rgba(0,0,0,0.6)'}
]


class FunctionColor extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className='idoll-color-h3'>中性色（Neutral Colors）</h2>
        <p className='idoll-color-p'>DBox 的中性色是具有不同程度的饱和度和透明度的无色彩组成，通常用于文本界面和不需要用户过多关注的特定信息的展示。</p>
        <Row gutter={16}>
          {neutralColor.map((item, index) => {
            return (
              <Col span={6} key={index}>
                <dl className='idoll-color-item '>
                  <dt className='idoll-color-item-title' style={{backgroundColor: item.bgColor, color: item.color}}>
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
export default FunctionColor;
