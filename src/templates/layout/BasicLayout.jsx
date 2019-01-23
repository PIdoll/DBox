import React from 'react';
import {Layout} from 'components';
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const Sider = Layout.Sider;
export default class BasicLayout extends React.Component {
  render () {
    return (
      <div className='layout_temp'>
        <Layout className='LAYOUT'>
          <Header className='HEADER'>头部</Header>
          <Content className='CONTENT'>内容</Content>
          <Footer className='FOOTER'>底部</Footer>
        </Layout>
        <br />
        <Layout>
          <Header>头部</Header>
          <Layout >
            <Sider style={{ lineHight: '20vh', width: '10vh' }}>侧边栏</Sider>
            <Content>内容</Content>
          </Layout>
          <Footer>底部</Footer>
        </Layout>
        <br />
        <Layout>
          <Sider style={{ width: '10vh' }}>侧边栏</Sider>
          <Layout>
            <Header>头部</Header>
            <Content style={{ height: '100%' }}>内容</Content>
            <Footer>底部</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
