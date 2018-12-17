import React from 'react';
import {Col, Row} from '../grid';
import './style';


class Typography extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row >
          <Col span={24}>
            <h2>字体</h2>
            <p>字体是产品界面设计中感知性设计模式的要素之一，是设计模式可视化的内容和完成工作的主要方式，
              科学有序的字体系统可以有效提升产品的阅读体验。因此我们在进行大量的尝试和研究对比主流设计体系之后，
              制定出一套（以下）系统字体来处理 DBox 产品中所有标准字体，以确保使用 DBox 设计体系产出的产品或系统具有阅读清晰、
              层次分明和性能良好的特点。
            </p>
          </Col>
        </Row>
        <Row >
          <Col span={24}>
            <h2>字体</h2>
            <p>字体是产品界面设计中感知性设计模式的要素之一，是设计模式可视化的内容和完成工作的主要方式，
              科学有序的字体系统可以有效提升产品的阅读体验。因此我们在进行大量的尝试和研究对比主流设计体系之后，
              制定出一套（以下）系统字体来处理 DBox 产品中所有标准字体，以确保使用 DBox 设计体系产出的产品或系统具有阅读清晰、
              层次分明和性能良好的特点。
            </p>
          </Col>
        </Row>
      </React.Fragment>

    )
  }
}
export default Typography;
