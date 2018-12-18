import React from 'react';
import {Col, Row} from '../grid';
import './style';

const TypographyText = [
  {id: 1, title1: '超大文字H1', title_des: '建议用法：适用于超大屏幕，Banner文案，适度使用。'}
]



class Typography extends React.Component {
  render() {
    return (
      <React.Fragment>
        Typographytext.map({
          (item) => {
            <Row gutter={8}>
              <Col span={8}>
                <h2>超大字体H1</h2>
                <p>建议用法：适用于超大屏幕，Banner文案，适度使用。</p>
              </Col>
              <Col span={8}>
                <h4>基本属性</h4>
                <p>Font-size: 38px</p>
                <p>Font-weight:500/Medium</p>
                <p>Color: #000</p>
                <p>Opacity: 0.8</p>
          </Col>
          <Col span={8}>
            <h4>UI属性</h4>
            <p>Line-height: 46px</p>
            <p>Margin-top: 56px</p>
          </Col>
        </Row>
          }
        })
      </React.Fragment>
    )
  }
}
export default Typography;
