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
  name: 'xxx.jpg',
  status: 'done',
  url: 'http://www.google.com/xxx.jpg',
}, {
  uid: -2,
  name: 'yyy.png',
  status: 'done',
  url: 'http://www.google.com/yyy.png',
}, {
  uid: -3,
  name: 'zzz.png',
  status: 'error',
  response: 'Server Error 500',
  url: 'http://www.google.com/zzz.png',
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
  beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
      Message.error('您只能上传 JPG或PNG 文件!');
    }
    const isLt1M = file.size / 1024 / 1024 < 1;
    if (!isLt1M) {
      Message.error('上传图片文件必须小于 1024KB!');
    }
    return isJPG && isLt1M;
  }
};


export default class PhotoUpload extends React.Component {
  render () {
    return (
      <Upload {...props} multiple showUploadList={false} fileList={commonFileList} onPreview={onPreview} onRemove={onRemove}>
        <Button type='primary' icon='cloud-upload'>上传</Button>
        <p>支持上传jpg/png文件格式，且不超过1024kb</p>
      </Upload>
    )
  }
}
