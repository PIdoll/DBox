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
                Customize <a href='#API'>Description</a>
              </span>
            }
          >
            <Button type='primary'>Create Now</Button>
          </Empty>
        )
    }
}
