import React from 'react';
import {Upload, Message, Icon, Button} from 'components';


function onPreview (e) {
  console.log('onPreview点击文件链接时的回调')
  console.log(e.url)
  return e.url
};
function onRemove () {
  console.log('onRemove点击文件链接时的回调')
}
const fileList = [{
  uid: -1,
  name: 'xxx.jpg',
  status: 'done',
  url: 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg',
  thumbUrl: 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg',
}, {
  uid: -2,
  name: 'yyy.png',
  status: 'error',
  url: 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg',
  thumbUrl: 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg',
}];
const props = {
  action: 'https://jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  beforeUpload (file) {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
      Message.error('您只能上传 JPG或PNG 文件!')
    }
    const isLt1M = file.size / 1024 / 1024 < 1;
    if (!isLt1M) {
      Message.error('上传图片文件必须小于 1024KB!')
    }
    return isJPG && isLt1M;
  },
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
};


export default class ListUpload extends React.Component {
  render () {
    return (
      <Upload {...props} onPreview={onPreview} onRemove={onRemove}>
        <Button type='primary'><Icon type='cloud-upload' />上传</Button>
        <p>支持上传jpg/png文件格式，且不超过1024kb</p>
      </Upload>
    )
  }
}
