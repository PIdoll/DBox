import React from 'react';
import { Empty, Button } from 'components';

export default class ChooseImage extends React.Component {
    render () {
        return (
          <Empty
            image='https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original'
            imageStyle={{
              height: 60,
            }}
            description={
              <span>
                自定义 <a href='#API'>描述</a>
              </span>
            }
          >
            <Button type='primary'>创建</Button>
          </Empty>
        )
    }
}
