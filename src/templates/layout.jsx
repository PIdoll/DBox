import React, { Component } from 'react'
import Layout, { Sider, Footer, Header, Content } from 'components/layout'
import Button from 'components/button'


class MainLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collpased: false
    }
  }

  onCollapse = () => {
    console.log('toggle sider')
  }

  toggle = () => {
    this.setState({
      collpased: !this.state.collpased
    })
  }

  render () {
    const { collpased } = this.state
    return (
      <div id='main-container'>
        <h1 className='h1'>排版1</h1>
        <div className='layout_temp' style={{ width: '900px', height: '100vh' }}>
          <Layout>
            <Sider style={{ background: '#eee' }} />
            <Layout>
              <Header style={{ background: '#eee' }} />
              <Content />
              <Footer style={{ background: '#eee' }} />
            </Layout>
          </Layout>
        </div>
        <br />
        <h1 className='h1'>排版2</h1>
        <div className='layout_temp' style={{ width: '900px', height: '100vh' }}>
          <Layout>
            <Header style={{ background: '#eee' }} />
            <Content />
            <Footer style={{ background: '#eee' }} />
          </Layout>
        </div>
        <br />
        <h1 className='h1'>排版3 左菜单栏可缩进</h1>
        <h1 className='h1'><Button type='normal' onClick={this.toggle}>toggle Sider</Button></h1>
        <div className='layout_temp' style={{ width: '900px', height: '100vh' }} >
          <Layout>
            <Sider span={{ fold: '1', unfold: '12' }} collapsed={collpased} onCollapse={this.onCollapse} style={{ background: '#eee' }} />
            <Layout>
              <Header span={2} style={{ background: '#eee' }} />
              <Content />
              <Footer style={{ background: '#eee' }} />
            </Layout>
          </Layout>
        </div>
      </div>
    )
  }
}

export default MainLayout;
