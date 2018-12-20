import React from 'react'
import message from 'components/message';
import Button from 'components/button';
import Upload from 'components/upload';
import Modal from 'components/modal';
import Icon from 'components/icon';
import reqwest from 'reqwest';

const Dragger = Upload.Dragger;

const commonFileList = [{
  uid: -1,
  name: 'xxx.png',
  status: 'done',
  url: 'http://www.baidu.com/xxx.png',
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
// 基础上传
const props1 = {
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
      message.success(`${info.file.name} 上传成功。`);
      return false;
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败。`);
      return false;
    }
  },
  beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
      message.error('您只能上传 JPG或PNG 文件!');
    }
    const isLt1M = file.size / 1024 / 1024 < 1;
    if (!isLt1M) {
      message.error('上传图片文件必须小于 1024KB!');
    }
  }
};

// 拖拽上传
const props2 = {
  name: 'file',
  multiple: true,
  action: 'https://jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name}文件上传成功.`);
    } else if (status === 'error') {
      const formData = [];
      this.state.fileList.forEach((file) => {
        formData.push(info.file);
        console.log(info.file)
      });
      this.setState({
        fileList: formData
      });
      console.log(this.state.fileList)
      message.error(`${info.file.name}文件上传失败.`);
    }
  },
};

// 照片墙上传
class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
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
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='idoll-upload-text'>Upload</div>
      </div>
    );
    return (
      <div className='clearfix'>
        <Upload
          action='https://jsonplaceholder.typicode.com/posts/'
          listType='picture-card'
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
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
  status: 'error',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props3 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name}文件上传成功.`);
    } else if (status === 'error') {
      message.error(`${info.file.name}文件上传失败.`);
    }
  },
};

class Uploader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
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
      }],
      uploading: false,
    }
  }
  handleUpload = () => {
    const { fileList } = this.state;
    const formData = [];
    fileList.forEach((file) => {
      formData.push(file);
      console.log(file)
    });
    this.setState({
      uploading: true,
      fileList: formData
    });

    // You can use any AJAX library you like
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
        message.success('文件上传成功.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('文件上传失败.');
      },
    });
  }
  render() {
    const { fileList } = this.state;
    const props4 = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = this.state.fileList.indexOf(file);
          const newFileList = this.state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(state => ({
          fileList: [...this.state.fileList, file],
        }));
        // console.log(this.state.fileList)
        return false;
      },
      fileList,
    };
    return (
      <div id='main-container'>
        <h1 className='h1'>基础上传</h1>
        <Upload {...props1} defaultFileList={commonFileList}>
          <Button type='primary' icon='pro2-upload'>上传</Button>
          <p>支持上传jpg/png文件格式，且不超过1024kb</p>
        </Upload>
        <br />
        <h1 className='h1'>拖拽上传</h1>
        <Dragger {...props2} defaultFileList={commonFileList}>
          <p className='idoll-upload-icon'><Icon type='pro2-upload' /></p>
          <p className='idoll-upload-text'>将文件拖到此处，或者点击上传</p>
          <p className='idoll-upload-limit'>支持上传jpg/png文件格式，且不超过1024kb</p>
        </Dragger>
        <h1 className='h1'>照片墙上传</h1>
        <PicturesWall />
        <h1 className='h1'>图片列表上传</h1>
        <Upload {...props3}>
          <Button type='primary'><Icon type='pro2-upload' />上传</Button>
        </Upload>
        <h1 className='h1'>手动上传</h1>
        <div>
          <Upload {...props4}>
            <Button type='secondary'><Icon type='pro2-file' />选择文件</Button>
          </Upload>
          <Button
            type='primary'
            className='beginUpload'
            onClick={this.handleUpload}
            loading={this.state.uploading}
            style={{ marginTop: 16 }}
          >
            {!this.state.uploading ? <Icon type='pro2-upload' /> : null}{this.state.uploading ? '正在上传' : '开始上传' }
          </Button>
        </div>
      </div>
    )
  }
}

export default Uploader;
