import React from 'react'
import message from 'components/message';
import Button from 'components/button';
import Upload from 'components/upload';
import Icon from 'components/icon';
import reqwest from 'reqwest';

const Dragger = Upload.Dragger;
// 基础上传
const props = {
  name: 'file',
  action: '／/jsonplaceholder.typicode.com/posts/',
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
        <div className='idoll-upload-text'>上传</div>
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

// 手动上传
// const { uploading, fileList } = this.state;
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
    this.setState(state => ({
      fileList: [...state.fileList, file],
    }));
    return false;
  },
  fileList,
};


class Uploader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: [],
      uploading: false,
    }
  }
  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: '//jsonplaceholder.typicode.com/posts/',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>基础上传</h1>
        <Upload {...props}>
          <Button type='primary' icon='pro2-upload'>上传</Button>
        </Upload>
        <br />
        <h1 className='h1'>传入已上传的文件</h1>
        <Upload {...props1}>
          <Button type='primary' icon='pro2-upload'>
          上传
          </Button>
        </Upload>
        <br />
        <h1 className='h1'>拖拽上传</h1>
        <Dragger {...props2}>
          <p lassName='idoll-upload-icon'><Icon type='pro2-upload' /></p>
          <p className='idoll-upload-text'>将文件拖到此处，或者点击上传</p>
          <p lassName='idoll-upload-limit'>支持上传jpg/png文件格式，且不超过1024kb</p>
        </Dragger>
        <h1 className='h1'>用户头像上传</h1>
        <PicturesWall />
        <h1 className='h1'>图片列表形式上</h1>
        <Upload {...props3}>
          <Button>
            <Icon type='plus' /> upload
          </Button>
        </Upload>
        <h1 className='h1'>手动上传</h1>
        <div>
          <Upload {...props4}>
            <Button type='primary'><Icon type='pro2-file' />选择文件</Button>
          </Upload>
          <Button
            type='primary'
            onClick={this.handleUpload}
            disabled={this.state.fileList.length === 0}
            loading={this.state.uploading}
            style={{ marginTop: 16 }}
          >
            {!this.state.uploading ? <Icon type='pro2-upload' /> : null}{this.state.uploading ? '上传' : '开始上传' }
          </Button>
        </div>
      </div>
    )
  }
}

export default Uploader;
