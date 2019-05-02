import React from 'react';
import reqwest from 'reqwest';
import {Upload, Message, Button, Icon} from 'components';
export default class ManualUpload extends React.Component {
	constructor(props) {
	super(props)
      this.state = {
      fileList: [{
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
      }],
      uploading: false,
    }
    this.handleUpload = this.handleUpload.bind(this);
  };
  handleUpload () {
    const { fileList } = this.state;
    const formData = [];
    fileList.forEach((file) => {
      formData.push(file);
    });
    this.setState({
      uploading: true,
      fileList: formData
    })

    // 你可以用AJAX类似这样
    reqwest({
      url: 'https://jsonplaceholder.typicode.com/posts/',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: formData,
          uploading: false,
        });
        Message.success('文件上传成功.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        Message.error('文件上传失败.');
      },
    });
  };
  onPreview () {
    console.log('onPreview点击文件链接时的回调')
  };
  render() {
    const { fileList } = this.state;
    const props4 = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt1M = file.size / 1024 / 1024 < 1;
        if (isJPG || isLt1M) {
          if (!isJPG) {
            Message.error('您只能上传 JPG或PNG 文件!')
        }
          if (!isLt1M) {
            Message.error('上传图片文件必须小于 1024KB!')
         }
         return isJPG && isLt1M;
        } else {
          this.setState(state => ({
            fileList: [...state.fileList, file],
        }));
          return false;
        }
      },
      fileList,
    };
    return (
      <div className='manual'>
        <Upload {...props4} onPreview={this.onPreview}>
          <Button type='secondary'><Icon type='file' />选择文件</Button>
          <p>支持上传jpg/png文件格式，且不超过1024kb</p>
        </Upload>
        <Button
          type='primary'
          className='beginUpload'
          disabled={this.state.fileList.length <= 3}
          onClick={this.handleUpload}
          loading={this.state.uploading}
          style={{ marginTop: 16 }}
            >
          {!this.state.uploading ? <Icon type='cloud-upload' /> : null}{this.state.uploading ? '正在上传' : '开始上传' }
        </Button>
      </div>
    )
  }
};
