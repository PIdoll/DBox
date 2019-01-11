import React from 'react';
import {Popover, Button} from 'components';
const clickContent = (
  <div>
    这是点击内容
  </div>
);
const hoverContent = (
  <div>
    这是悬停内容
  </div>
);
export default class ClickPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		visible: false
    }
    this.hide = this.hide.bind(this);
    this.hidele = this.hidele.bind(this);
    this.handleHoveredChange = this.handleHoveredChange.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
  };
	hide () {
		this.setState({
		  visible: false,
		  hovered: false,
		  clicked: false
		});
	};
	hidele () {
	    this.setState({
	      clicked: false,
	      hovered: false
	    });
	  };
	handleHoveredChange (visible) {
		this.setState({ clicked: false, hovered: visible });
	};
	handleClickChange (visible) {
		this.setState({ clicked: visible, hovered: false });
	};
  render() {
	  return (
  <Popover
    trigger='hover'
    title='悬停标题'
    content={hoverContent}
    visible={this.state.hovered}
    onVisibleChange={this.handleHoveredChange}
>
    <Popover
      content={(
        <div>
          {clickContent}
          <a onClick={this.hidele}>关闭</a>
        </div>
    )}
      title='点击标题'
      trigger='click'
      visible={this.state.clicked}
      onVisibleChange={this.handleClickChange}
  >
      <Button>悬停并点击</Button>
    </Popover>
  </Popover>
	  )
	}
}
