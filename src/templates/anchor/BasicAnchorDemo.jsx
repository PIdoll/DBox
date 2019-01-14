import React from 'react';
import Anchor from 'components/anchor/index';

const { Link } = Anchor;

export default class BasicAnchorDemo extends React.Component {
  handleClick = (e, link) => {
    e.preventDefault();
    console.log(link);
  };
  render() {
    const styleObj = {
      width: 400,
      height: 300,
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px solid #E2E2E2',
    }
    const anchorContainer = {
      height: '100%',
      width: '30',
    }
    const testContainer = {
      height: '100%',
      width: '70%',
      overflow: 'auto',
      textAlign: 'right',
    }
    return (
      <div style={styleObj}>
        <div style={anchorContainer}>
          <Anchor
            getContainer={() => document.getElementById('test')}
            onClick={this.handleClick}
            offsetBottom={10}>
            <Link href='#components-anchor-demo-basic' title='Basic demo' />
            <Link href='#components-anchor-demo-static' title='Static demo' />
            <Link href='#API' title='API'>
              <Link href='#Anchor-Props' title='Anchor Props' />
              <Link href='#Link-Props' title='Link Props' />
            </Link>
          </Anchor>
        </div>
        <div id='test' style={testContainer}>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span id='Link-Props' style={{color: 'red'}}>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <span>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
        </div>
      </div>
    )
  }
}
