#### **概述**
上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

#### **基础上传**
基本的上传操作
```jsx
import {Upload, Message, Button} from 'components';
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
      Message.success(`${info.file.name} 上传成功。`);
      return false;
    } else if (info.file.status === 'error') {
    	Message.error(`${info.file.name} 上传失败。`);
      return false;
    }
  }
};
<Upload {...props1} defaultFileList={commonFileList}>
  <Button type='primary' icon='cloud-upload'>上传</Button>
  <p>支持上传网页、文字、图片、视频等文件格式，不限大小</p>
</Upload>

```

#### **图片上传**
仅限图片上传操作
```jsx
import {Upload, Message, Button} from 'components';
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
<Upload {...props1} defaultFileList={commonFileList}>
  <Button type='primary' icon='cloud-upload'>上传</Button>
  <p>支持上传jpg/png文件格式，且不超过1024kb</p>
</Upload>
```

#### **拖拽上传**
将文件拖拽到制定区域或者点击制定区域上传
```jsx
import {Upload, Message, Icon} from 'components';
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
<Dragger {...props2} defaultFileList={commonFileList}>
  <p className='idoll-upload-icon'><Icon type='cloud-upload' /></p>
  <p className='idoll-upload-text'>将文件拖到此处，或者点击上传</p>
  <p className='idoll-upload-limit'>支持上传jpg/png文件格式，且不超过1024kb</p>
</Dragger>
```

#### **照片墙上传**
将图片上传后展示为照片墙的上传模式
```jsx
import {Upload, Message, Modal, Icon} from 'components';
class PicturesWall extends React.Component {
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
  this.handleCancel =this.handleCancel.bind(this)
  this.handlePreview =this.handlePreview.bind(this)
  this.beforeUpload =this.beforeUpload.bind(this)
  this.handleChange =this.handleChange.bind(this)
}
  handleCancel () {this.setState({ previewVisible: false })}

  handlePreview (file) {
    console.log('1')
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
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
  handleChange ({ fileList }) {this.setState({ fileList })}

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
<PicturesWall />
```

#### **图片列表上传**
将上传后的图片展示为列表样式的上传模式
```jsx
import {Upload, Message, Icon, Button} from 'components';
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

const props3 = {
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
<Upload {...props3}>
  <Button type='primary'><Icon type='cloud-upload' />上传</Button>
  <p>支持上传jpg/png文件格式，且不超过1024kb</p>
</Upload>
```

#### **手动上传**
将上传操作拆分为选中文件和手动上传操作，确保上传文件的准确性
```jsx
import reqwest from 'reqwest';
import {Upload, Message, Button, Icon} from 'components';
class Demo extends React.Component {
	constructor(props) {
	super(props)
      this.state = {
      fileList: [{
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
    });

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
  render() {
    const { uploading, fileList } = this.state;
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
    return (
        <div className='manual'>
          <Upload {...props4}>
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
<Demo />
```



#### **upload**

| 参数   |   说明   |     类型        | 默认值 |
|------------|------------| ----------- |-------|
| name   | 可选参数, 上传的文件   | String      | file  |
| defaultFileList | 可选参数，默认已经上传的文件列表                           | Array[Object] | 无  |
| fileList   | 可选参数，已经上传的文件列表                                   | Array[Object] | 无 |
| action     | 必选参数, 上传的地址                                         | String      | 无    |
| data       | 可选参数, 上传所需参数或返回上传参数的方法                   | Object or function(file) | 无    |
| headers    | 可选参数, 设置上传的请求头部，IE10 以上有效                    | Object      | 无    |
| showUploadList | 可选参数, 是否展示 uploadList, 默认开启                  | Boolean     | true  |
| multiple   | 可选参数, 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件。  | Boolean     | false |
| accept     | 可选参数, 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)    | String      | 无    |
| beforeUpload | 可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 `false` 或者 Promise 则停止上传。**注意：该方法不支持老 IE**。 | Function    | 无    |
| onChange   | 可选参数, 上传文件改变时的状态，详见 onChange                | Function    | 无    |
| listType   | 上传列表的内建样式，支持两种基本样式 `text` or `picture`     | String      | 'text'|
| onPreview  | 点击文件链接时的回调                                       | Function(file) | 无    |
| onRemove   | 点击移除文件时的回调                                       | Function(file) | 无    |
| supportServerRender | 服务端渲染时需要打开这个                           | Boolean | false    |
| disabled | 是否禁用                           | Boolean | false    |

#### **onChange**
上传中、完成、失败都会调用这个函数。

文件状态改变的回调，返回为：

```html
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1. `file` 当前操作的文件对象。

   ```html
   {
      uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
      name: 'xx.png'   // 文件名
      status: 'done',  // 状态有：uploading done error removed
      response: '{"status": "success"}',  // 服务端响应内容
   }
   ```

2. `fileList` 当前的文件列表。
3. `event` 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。

#### **显示下载链接**

请使用 fileList 属性设置数组项的 url 属性进行展示控制。

#### **IE note**

- [https://github.com/react-component/upload#ie89-note](https://github.com/react-component/upload#ie89-note)


```jsx noeditor
import {PrevPage, BackTop} from 'components';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
