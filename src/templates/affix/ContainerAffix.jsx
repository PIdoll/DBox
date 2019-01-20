import React from 'react'
import Affix from 'components/affix';
import Button from 'components/button';

export default class ContainerAffix extends React.Component {
  render() {
    return (
      <div ref={(node) => { this.container = node; }} style={{height: '100px', overflowY: 'scroll'}}>
        <div style={{backgroundColor: '#dedede', height: '200px', paddingTop: '60px'}}>
          <Affix target={() => this.container} >
            <Button type='primary'>
                固定在容器的顶部
            </Button>
          </Affix>
        </div>
      </div>
    )
  };
}
