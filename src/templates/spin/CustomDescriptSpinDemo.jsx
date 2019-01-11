import React from 'react';
import Spin from 'components/spin/index';
import Alert from 'components/alert/index';

export default class CustomDescriptSpinDemo extends React.Component {
  render() {
    return (
      <div>
        <Spin tip='加载中...'>
          <Alert
            message='Alert信息标题'
            description='关于此警报上下文的详细信息.'
            type='info'
          />
        </Spin>
      </div>
    )
  }
}
