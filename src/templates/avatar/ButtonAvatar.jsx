import React from 'react';

import {Avatar, Button} from 'components';

const UserList = ['Z', 'Alvin', 'Idoll', 'DBox'];
export default class ButtonAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0]
    };
  }
  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0]
    });
  }
  render() {
    return (
      <div>
        <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }}>
          {this.state.user}
        </Avatar>
        <Button type='primary' style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={this.changeUser}>
        Change
        </Button>
      </div>
    )
  }
}
