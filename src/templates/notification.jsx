import React from 'react'
import Notification from '../../components/notification'
import Button from 'components/button';

export default class NotificationView extends React.Component {
    render () {
        return (
          <div id='main-container'>
            <Notification>
              <Button>123</Button>
            </Notification>
          </div>
        )
    }
}
