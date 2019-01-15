import React from 'react';
import {Upload, Message, Button} from 'components';
function onPreview (e) {
  console.log('onPreview点击文件链接时的回调')
  console.log(e.url)
  return e.url
};
function onRemove () {
  console.log('onRemove点击文件链接时的回调')
}
const props = {
  name: 'file',
  action: 'https://jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      Message.success(`${info.file.name} 上传成功。`);
      return false;
    } else if (info.file.status === 'error') {
    	Message.error(`${info.file.name} 上传失败。`);
      return false;
    }
  },
};


export default class LimitUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commonFileList: [{
        uid: -1,
        name: 'zzz.png',
        status: 'done',
        url: 'http://www.baidu.com/zzz.png',
      }, {
        uid: -2,
        name: 'yyy.video',
        status: 'done',
      }, {
        uid: -3,
        name: 'zzz.ppt',
        status: 'error',
        response: 'Server Error 500',
      }]
    }
    this.onFileChange = this.onFileChange.bind(this)
  }
  onFileChange (info) {
    this.setState({commonFileList: info.fileList.slice(-3)})
  }
  render () {
    return (
      <Upload {...props} onChange={this.onFileChange} multipe fileList={this.state.commonFileList} onPreview={onPreview} onRemove={onRemove}>
        <Button type='primary' icon='cloud-upload'>上传</Button>
        <p>支持上传网页、文字、图片、视频等文件格式，不限大小</p>
      </Upload>
    )
  }
}
