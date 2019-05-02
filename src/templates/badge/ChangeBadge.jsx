import React from 'react';
import {Badge, Icon, Button, Switch} from 'components';
const ButtonGroup = Button.Group;

export default class BasicBadge extends React.Component {
  state = {
    show: true,
    count: 5,
  }
  decline = () => {
    const count = this.state.count - 1;
    if (count < 0) {
      this.setState({ count: 0 })
    } else {
      this.setState({count})
    }
  }
  increase = () => {
    const count = this.state.count + 1;
    this.setState({count})
  }
  onChange = (show) => {
    this.setState({show})
  }
  render() {
    const content = {
      width: 64,
      height: 64,
      borderRadius: 3,
      background: '#E2E2E2',
      display: 'inline-block',
    }
    return (
      <div>
        <div style={{ marginBottom: '10px' }}>
          <Badge offset={[32, 22]} showZero count={this.state.count}>
            <a href='javascript:;' style={content} />
          </Badge>
          <ButtonGroup>
            <Button onClick={this.decline}>
              <Icon type='remove' />
            </Button>
            <Button onClick={this.increase}>
              <Icon type='plus' />
            </Button>
          </ButtonGroup>
          <br />
        </div>
        <div>
          <Badge dot={this.state.show}>
            <a href='javascript:;' style={content} />
          </Badge>
          <Switch checked={this.state.show} onChange={this.onChange} />
        </div>
      </div>
    )
  }
}
