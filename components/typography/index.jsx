import React from 'react';
import { Col, Row } from '../grid';
import './style';
import typographyImg from '../../styleguide/assets/img/Font.png';
import typographyData from './typography.jsx';


class Typography extends React.Component {
  handelRender(item) {
    item.map((listItem, index) => {
      console.log('1' + listItem.name);
      return (
        <div>{listItem.name}</div>
         /* <dl key={index}>
          <dt>{listItem.name}</dt>
          <dd>{listItem.fontSize}</dd>
          <dd>{listItem.fontWeight}</dd>
          <dd>{listItem.color}</dd>
          <dd>{listItem.opacity}</dd>
        </dl> */
        )
      })
  }
  handleRenderUi(item) {
    item.map((listUi, index) => {
      // console.log(listUi.name);
      return (
        <dl>
          <dt>{listUi.name}</dt>
          <dd>{listUi.lineHeight}</dd>
          <dd>{listUi.marginTop}</dd>
        </dl>
      )
    })
  }
  render() {
    return (
      <React.Fragment>
        <img className='idoll-typography-img' src={typographyImg} />
        <div className='idoll-typography-title'>
          <h3>字体代码</h3>
          <p>font-family: -apple-system, BlinkMacSystemFont, "PingFang SC" , "Hiragino Sans GB" , "Microsoft YaHei" , "Helvetica Neue" , Helvetica , Arial , sans-serif ;</p>
        </div>
        <div className='idoll-typography-title'>
          <h3>推荐用法</h3>
          <p>DBox 提供了一套完整的标准字体，并提供建议用法，以帮助使用者更好的理解和使用本套系统。</p>
        </div>
        {typographyData.map((item, index) => {
          console.log(item.basic[index].name);
          return (
            <Row key={index}>
              <Col span={8}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </Col>
              <Col span={8}>
                {this.handelRender(item.basic)}
              </Col>
              <Col span={8}>
                {/* {this.handleRenderUi(item.ui)} */}
              </Col>
            </Row>
          )
        })}
      </React.Fragment>
    )
  }
}
export default Typography;
