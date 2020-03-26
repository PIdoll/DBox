import React from 'react';
import { Col, Row } from '../grid';
import './style';
import typographyImg from 'assets/images/Font.png';
import typographyData from './typography';

/**
 *
 * @visibleName 字体
 */
class Typography extends React.Component {
  handelRender(item) {
    const children = [];
    item.map((listItem, index) => {
      children.push(
        <dl key={index} className='idoll-typography-props'>
          <dt >{listItem.name}</dt>
          <dd>{listItem.fontSize}</dd>
          <dd>{listItem.fontWeight}</dd>
          <dd>{listItem.color}</dd>
          <dd>{listItem.opacity}</dd>
        </dl>
      )
    })
    return children;
  }
  handleRenderUi(item) {
    const children = [];
    item.map((listUi, index) => {
      children.push(
        <dl key={index} className='idoll-typography-props'>
          <dt className='idoll-typography-subtitle'>{listUi.name}</dt>
          <dd>{listUi.lineHeight}</dd>
          <dd>{listUi.MarginTop}</dd>
        </dl>
      )
    })
    return children;
  }
  render() {
    return (
      <div>
        <p className='idoll-typography-p'>字体是产品界面设计中感知性设计模式的要素之一，是设计模式可视化的内容和完成工作的主要方式，科学有序的字体系统可以有效提升产品的阅读体验。因此我们在进行大量的尝试和研究对比主流设计体系之后，制定出一套（以下）系统字体来处理 DBox 产品中所有标准字体，以确保使用 DBox 设计体系产出的产品或系统具有阅读清晰、层次分明和性能良好的特点。</p>
        <img className='idoll-typography-img' src={typographyImg} />
        <div className='idoll-typography-title'>
          <h4 >字体代码</h4>
          <p className='idoll-typography-p'>font-family: -apple-system, BlinkMacSystemFont, "PingFang SC" , "Hiragino Sans GB" , "Microsoft YaHei" , "Helvetica Neue" , Helvetica , Arial , sans-serif ;</p>
        </div>
        <div className='idoll-typography-title'>
          <h4>推荐用法</h4>
          <p className='idoll-typography-p'>DBox 提供了一套完整的标准字体，并提供建议用法，以帮助使用者更好的理解和使用本套系统。</p>
        </div>
        {typographyData.map((item, index) => {
          return (
            <Row key={index} className='idoll-typography-wrap' gutter={32}>
              <Col span={10}>
                <h5 style={{fontSize: item.size}} className='idoll-typography-h5'>{item.title}</h5>
                <p className='idoll-typography-des'>{item.description}</p>
              </Col>
              <Col span={8}>
                {this.handelRender(item.basic)}
              </Col>
              <Col span={6}>
                {this.handleRenderUi(item.ui)}
              </Col>
            </Row>
          )
        })}
      </div>
    )
  }
}
export default Typography;
