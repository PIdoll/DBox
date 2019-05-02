import React from 'react'
import Affix from 'components/affix';
import Button from 'components/button';

export default class Demo extends React.Component {
  render() {
    return (
      <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>在距离顶部120px的地方固定住</Button>
      </Affix>
    )
  };
}
