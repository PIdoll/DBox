import React from 'react';
import {Button, Row, Drawer, Col, Divider} from 'components';
const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};
const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);
export default class InfoDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: false
    }
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
  };
  showDrawer () {
    this.setState({
      visible: true,
    });
  }
  onClose () {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
    <div>
      <Button type='primary' href='javascript:;' onClick={this.showDrawer}>查看个人信息</Button>
      <Drawer
        width={620}
        placement='right'
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
    >
        <p style={{ ...pStyle, marginBottom: 24 }}>个人信息</p>
        <p style={pStyle}>私人信息</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title='名称' content='小明' />{' '}
          </Col>
          <Col span={12}>
            <DescriptionItem title='账户' content='Idoll@example.com' />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title='城市' content='上海' />
          </Col>
          <Col span={12}>
            <DescriptionItem title='国家' content='中国' />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title='生日' content='2018-8-8' />
          </Col>
          <Col span={12}>
            <DescriptionItem title='个人博客' content={<a target='_black' href='http://github.com'>http://github.com</a>} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title='座右铭'
              content='不忘初心,方得始终'
          />
          </Col>
        </Row>
        <Divider />
        <p style={pStyle}>公司信息</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title='职业' content='程序猿' />
          </Col>
          <Col span={12}>
            <DescriptionItem title='特长' content='码代码' />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title='部门' content='开发部' />
          </Col>
          <Col span={12}>
            <DescriptionItem title='业务组' content='贷款组' />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title='技能'
              content='C / C + +, Javascript, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.'
          />
          </Col>
        </Row>
        <Divider />
        <p style={pStyle}>🔗地址</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title='📮邮箱' content='Dbox@example.com' />
          </Col>
          <Col span={12}>
            <DescriptionItem title='📱手机' content='+86 188 8888 6666' />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title='Github'
              content={(
                <a href='http://github.com'>Github</a>
            )}
          />
          </Col>
        </Row>
      </Drawer>
    </div>
    )
  }
}
