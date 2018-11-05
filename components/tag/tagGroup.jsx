import React from 'react';
import Tag from '../tag/tag';
import Input from '../input/input';
import Icon from '../icon/index';
import PropTypes from 'prop-types';

export default class TagGroup extends React.Component {
  state = {
    tags: this.props.tags || ['Movies', 'Books', 'Music'],
    inputVisible: false,
    inputValue: '',
    id: this.props.id || 0,
    text: this.props.text || 'New Tag',
    iconType: this.props.iconType || 'plus'
  };
  static propTypes = {
    id: PropTypes.number,
    tags: PropTypes.array,
    text: PropTypes.string,
    iconType: PropTypes.string
}

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleInputConfirm = () => {
    const inputValue = this.state.inputValue;
    let tags = this.state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }
  saveInputRef = (input) => {
      this.input = input
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div className='tagGroup'>
        {tags.map((tag, index) => {
           return <Tag key={index} closable={index !== this.state.id} checked={index === this.state.id} afterClose={() => this.handleClose(tag)}>{tag}</Tag>
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type='text'
            size='small'
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{ background: '#fff', borderStyle: 'dashed' }}
          >
            <Icon type={this.state.iconType} /> {this.state.text}
          </Tag>
        )}
      </div>
    );
  }
}
