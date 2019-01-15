import React from 'react';
import {Upload, Message, Modal, Icon} from 'components';
export default class WallUpload extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg',
    }],
  };
  this.handleCancel = this.handleCancel.bind(this)
  this.handlePreview = this.handlePreview.bind(this)
  this.beforeUpload = this.beforeUpload.bind(this)
  this.handleChange = this.handleChange.bind(this)
}
  handleCancel () { this.setState({ previewVisible: false }) }

  handlePreview (file) {
    console.log('1')
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  onRemove () {
    console.log('onRemove点击移除文件时的回调')
  }
  beforeUpload (file) {
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
  handleChange ({ fileList }) { this.setState({ fileList }) }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    console.log('previewVisible', previewVisible)
    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='idoll-upload-text'>上传</div>
      </div>
    );
    return (
      <div className='clearfix'>
        <Upload
          action='//jsonplaceholder.typicode.com/posts/'
          listType='picture-card'
          fileList={fileList}
          onRemove={this.onRemove}
          beforeUpload={this.beforeUpload}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
