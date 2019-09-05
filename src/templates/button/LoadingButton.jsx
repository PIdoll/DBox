import React from 'react';

import Button from 'components/button';

export default class LoadingButton extends React.Component {
    handleClick = () => {
      console.log('加载中')
    }
    render() {
      return (
        <div>
          <Button type='parmily' loading onClick={this.handleClick}>加载中</Button>
        </div>
      )
    }
  };
