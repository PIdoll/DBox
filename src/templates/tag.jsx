import React from 'react';
import Tag from '../../components/tag';
import Button from '../../components/button/button';
import TagGroup from '../../components/tag/tagGroup';


export default class TagView extends React.Component {
  state = {
    visible: true,
  }
  getValue = () => {
    this.setState({visible: !this.state.visible})
  }

  render () {
    return (
      <div id='main-container'>
        <h1>色彩功能标签</h1>
        <p style={{marginBottom: '10px'}}>基础色彩展示，同时支持16进制／rgb／英文颜色自定义设置</p>
        <Tag hover color='primary'>primary</Tag>
        <Tag color='success'>success</Tag>
        <Tag color='error'>error</Tag>
        <Tag color='warning'>warning</Tag>
        <br />
        <Tag color='pink'>pink</Tag>
        <Tag color='#7FFF00'>#7FFF00</Tag>
        <Tag color='#871F78'>#871F78</Tag>
        <Tag color='rgb(255,255,0)'>rgb(255,255,0)</Tag>
        <h1>带有选择功能的标签</h1>
        <p style={{marginBottom: '10px'}}>可选择是否初始化默认被选择</p>
        <Tag checked>伯牙</Tag>
        <Tag checked={false}>子期</Tag>
        <h1>可移除标签</h1>
        <p style={{marginBottom: '10px'}}>标签可移除</p>
        <Tag closable size='small'>性别:男</Tag>
        <Tag size='small' closable>性别:女</Tag>
        <h1>按钮可移除标签</h1>
        <p style={{marginBottom: '10px'}}>通过按钮标签可移除</p>
        <Tag closable size='small' visible={this.state.visible}>Tag</Tag>
        <br />
        <Button type='primary' onClick={this.getValue}>Toggle</Button>
        <h1>热门标签</h1>
        <p style={{marginBottom: '10px'}}>选择你感兴趣的话题</p>
        <span>热门话题:</span>
        <Tag hot>Movies</Tag>
        <Tag hot>Books</Tag>
        <Tag hot>Music</Tag>
        <Tag hot>Sports</Tag>
        <h1>动态添加和删除</h1>
        <p style={{marginBottom: '10px'}}>用数组生成一组标签，可以动态添加和删除</p>
        <TagGroup />
      </div>
    )
  }
}

