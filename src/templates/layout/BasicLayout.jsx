import React from 'react';
import {Layout} from 'components';
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const Sider = Layout.Sider;
export default class BasicLayout extends React.Component {
  render () {
    return (
      <div>
        <Layout className='LAYOUT' style={{textAlign: 'center', height: '50vh', color: '#fff'}} >
          <Header className='HEADER' style={{textAlign: 'center', height: '10vh'}}>头部</Header>
          <Content className='CONTENT'>内容</Content>
          <Footer className='FOOTER' style={{textAlign: 'center', height: '10vh'}}>底部</Footer>
        </Layout>
        <br />
        <Layout style={{textAlign: 'center', height: '50vh', color: '#fff'}}>
          <Header style={{textAlign: 'center', height: '10vh'}}>头部</Header>
          <Layout>
            <Sider style={{width: '10vh'}}>侧边栏</Sider>
            <Content>内容</Content>
          </Layout>
          <Footer style={{textAlign: 'center', height: '10vh'}}>底部</Footer>
        </Layout>
        <br />
        <Layout style={{textAlign: 'center', height: '50vh', color: '#fff'}}>
          <Sider style={{ width: '10vh' }}>侧边栏</Sider>
          <Layout style={{height: '50vh'}}>
            <Header style={{textAlign: 'center', height: '10vh'}}>头部</Header>
            <Content>内容</Content>
            <Footer style={{textAlign: 'center', height: '10vh'}}>底部</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
