import React from 'react';
import Anchor from 'components/anchor/index';

const { Link } = Anchor;
export default class SkewingAnchorDemo extends React.Component {
  render() {
    return (
      <div>
        <Anchor offsetTop={100} offsetBottom={100} bounds={10}>
          <Link href='#components-anchor-demo-excursion' title='Basic demo' />
          <Link href='#components-anchor-demo' title='Static demo' />
          <Link href='#API' title='API'>
            <Link href='#Anchor-excursion' title='Anchor Props' />
            <Link href='#Link-excursion' title='Link Props' />
          </Link>
        </Anchor>
      </div>
    )
  }
}
