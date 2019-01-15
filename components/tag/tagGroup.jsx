
import React from 'react';
import Tag from '../tag/tag';
import Input from '../input/input';
import Icon from '../icon/index';
import PropTypes from 'prop-types';

export default class TagGroup extends React.Component {
  state = {
    tags: this.props.tags || ['电影', '书籍', '音乐'],
    inputVisible: false,
    inputValue: '',
    id: this.props.id || 0,
    text: this.props.text || '添加',
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
    const {color} = this.props;
    return (
      <div className='group'>
        {tags.map((tag, index) => {
           return <Tag color={color || ''} key={tag} closable={index !== this.state.id} afterClose={() => this.handleClose(tag)}>{tag}</Tag>
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
            className='sdfsf'
            style={{borderStyle: 'dashed'}}
            onClick={this.showInput}
            color={color || ''}
          >
            <Icon style={{color: color || ''}} type={this.state.iconType} /><div style={{ marginLeft: '4px' }}>{this.state.text}</div>
          </Tag>
        )}
      </div>
    );
  }
}
