import React from 'react';
import {Upload, Message, Button} from 'components';
function onPreview () {
  console.log('onPreview点击文件链接时的回调')
};
function onRemove () {
  console.log('onRemove点击文件链接时的回调')
}
const commonFileList = [{
  uid: -1,
  name: 'xxx.html',
  status: 'done',
}, {
  uid: -2,
  name: 'yyy.video',
  status: 'done',
}, {
  uid: -3,
  name: 'zzz.ppt',
  status: 'error',
  response: 'Server Error 500',
}];
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


export default class BasicUpload extends React.Component {
  render () {
    return (
      <Upload disabled {...props} multipe defaultFileList={commonFileList} onPreview={onPreview} onRemove={onRemove}>
        <Button type='primary' icon='cloud-upload'>上传</Button>
        <p>支持上传网页、文字、图片、视频等文件格式，不限大小</p>
      </Upload>
    )
  }
}
