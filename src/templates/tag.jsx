import React from 'react';
import Tag from '../../components/tag';
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
        <h1>基本使用</h1>
        <p>基本标签展示</p>
        <Tag>标签</Tag>
        <Tag href='www.google.com'>链接</Tag>
        <h1>多彩标签</h1>
        <p style={{marginBottom: '10px'}}>同时支持16进制／rgb／英文颜色通过color属性自定义设置</p>
        <Tag color='peru'>peru</Tag>
        <Tag color='coral'>coral</Tag>
        <Tag color='hotpink'>hotpink</Tag>
        <Tag color='orange'>orang</Tag>
        <Tag color='limegreen'>limegreen</Tag>
        <Tag checked color='deepskyblue'>deepskyblue</Tag>
        <Tag color='mediumslateblue'>mediumslateblue</Tag>
        <Tag color='turquoise'>turquoise</Tag>
        <h1>可移除标签</h1>
        <p style={{marginBottom: '10px'}}>标签添加closable属性可移除</p>
        <Tag closable>可移除标签</Tag>
        <h1>热门标签</h1>
        <p style={{marginBottom: '10px'}}>通过添加属性hot选择你感兴趣的话题</p>
        <span>热门话题:</span>
        <Tag hot>电影</Tag>
        <Tag hot checked>书籍</Tag>
        <Tag hot>音乐</Tag>
        <Tag hot>运动</Tag>
        <h1>动态添加和删除标签</h1>
        <p style={{marginBottom: '10px'}}>用数组生成一组标签，可以动态添加和删除</p>
        <TagGroup />
      </div>
    )
  }
}
