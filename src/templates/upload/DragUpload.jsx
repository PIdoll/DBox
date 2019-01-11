import React from 'react';
import {Upload, Message, Icon} from 'components';


function onPreview () {
  console.log('onPreview点击文件链接时的回调')
};
function onRemove () {
  console.log('onRemove点击文件链接时的回调')
}
const Dragger = Upload.Dragger;
const commonFileList = [{
  uid: -1,
  name: 'xxx.jpg',
  status: 'done',
  url: 'http://www.baidu.com/xxx.jpg',
}, {
  uid: -2,
  name: 'yyy.png',
  status: 'done',
  url: 'http://www.baidu.com/yyy.png',
}, {
  uid: -3,
  name: 'zzz.png',
  status: 'error',
  response: 'Server Error 500',
  url: 'http://www.baidu.com/zzz.png',
}];
const props = {
  name: 'file',
  multiple: true,
  action: 'https://jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      Message.success(`${info.file.name}文件上传成功.`);
    } else if (status === 'error') {
      Message.error(`${info.file.name}文件上传失败.`);
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


export default class DragUpload extends React.Component {
  render () {
    return (
      <Dragger {...props} defaultFileList={commonFileList} onPreview={onPreview} onRemove={onRemove}>
        <p className='idoll-upload-icon'><Icon type='cloud-upload' /></p>
        <p className='idoll-upload-text'>将文件拖到此处，或者点击上传</p>
        <p className='idoll-upload-limit'>支持上传jpg/png文件格式，且不超过1024kb</p>
      </Dragger>
    )
  }
}
