import React from 'react'
import message from 'components/message';
import Button from 'components/button';
import Upload from 'components/upload';
import Icon from 'components/icon';

const Dragger = Upload.Dragger;
// 基础上传
const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功。`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败。`);
    }
  },
};

// 已上传列表
const props1 = {
  action: '/upload.do',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file);
      console.log(info.fileList);
    }
  },
  defaultFileList: [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }],
};

// 拖拽上传
const props2 = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

// 照片墙上传
class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='idoll-upload-text'>Upload</div>
      </div>
    );
    return (
      <div className='clearfix'>
        <Upload
          action='//jsonplaceholder.typicode.com/posts/'
          listType='picture-card'
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
      </div>
    );
  }
}

// 照片列表
const fileList = [{
  uid: -1,
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
  uid: -2,
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props3 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
};


const Uploader = () => (
  <div id='main-container'>
    <h1 className='h1'>基础上传</h1>
    <Upload {...props}>
      <Button type='ghost' icon='plus'>
        点击上传
      </Button>
    </Upload>
    <br />
    <h1 className='h1'>传入已上传的文件</h1>
    <Upload {...props1}>
      <Button type='ghost' icon='plus'>
        点击上传
      </Button>
    </Upload>
    <br />
    <h1 className='h1'>拖拽上传</h1>
    <Dragger {...props2}>
      <p className='idoll-upload-text'>点击或拖拽到此区域上传</p>
    </Dragger>
    <h1 className='h1'>用户头像上传</h1>
    <PicturesWall />
    <h1 className='h1'>图片列表形式上</h1>
    <Upload {...props3}>
      <Button>
        <Icon type='plus' /> upload
      </Button>
    </Upload>
  </div>
)

export default Uploader;
