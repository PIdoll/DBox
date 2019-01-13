import React from 'react'
import Affix from 'components/affix';
import Button from 'components/button';

export default class TopAffix extends React.Component {
  render() {
    return (
      <Affix>
        <Button type='primary'>固定在顶部</Button>
      </Affix>
    )
  };
}
