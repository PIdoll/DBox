import React from 'react';
import BasicUpload from './BasicUpload';
import DragUpload from './DragUpload';
import ListUpload from './ListUpload';
import PhotoUpload from './PhotoUpload';
import WallUpload from './WallUpload';
import ManualUpload from './ManualUpload';
import LimitUpload from './LimitUpload';

export default class Uploader extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>限制上传</h1>
        <h2 className='h2'>限制上传列表最大为3条新增一条上传记录会删除最旧的一条记录</h2>
        <LimitUpload />
        <br />
        <h1 className='h1'>基础上传</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API name可选参数, 上传的文件(string)<br />
          1）测试API defaultFileList可选参数，默认已经上传的文件列表(array)<br />
          1）测试API action必选参数, 上传的地址(string)<br />
          1）测试API headers可选参数, 设置上传的请求头部，IE10 以上有效(string)<br />
          1）测试API multiple可选参数, 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。(bool)<br />
          1）测试API accept可选参数, 接受上传的文件类型(string)<br />
          1）测试API onChange可选参数, 上传文件改变时的状态(function)<br />
          1）测试API onPreview点击文件链接时的回调(function)<br />
          1）测试API onRemove点击移除文件时的回调(function)<br />
        </h2>
        <BasicUpload />
        <br />
        <h1 className='h1'>图片上传</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API name可选参数, 上传的文件(string)<br />
          1）测试API fileList可选参数，已经上传的文件列表(array)<br />
          1）测试API action必选参数, 上传的地址(string)<br />
          1）测试API headers可选参数, 设置上传的请求头部，IE10 以上有效(string)<br />
          1）测试API multiple可选参数, 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。(bool)<br />
          1）测试API accept可选参数, 接受上传的文件类型(string)<br />
          1）测试API showUploadList可选参数, 是否展示 uploadList, 默认开启(bool)<br />
          1）测试API beforeUpload可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。注意：该方法不支持老 IE。(function)<br />
          1）测试API onChange可选参数, 上传文件改变时的状态(function)<br />
          1）测试API onPreview点击文件链接时的回调(function)<br />
          1）测试API onRemove点击移除文件时的回调(function)<br />
        </h2>
        <PhotoUpload />
        <br />
        <h1 className='h1'>拖拽上传</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API name可选参数, 上传的文件(string)<br />
          1）测试API defaultFileList可选参数，已经上传的文件列表(array)<br />
          1）测试API action必选参数, 上传的地址(string)<br />
          1）测试API headers可选参数, 设置上传的请求头部，IE10 以上有效(string)<br />
          1）测试API multiple可选参数, 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。(bool)<br />
          1）测试API accept可选参数, 接受上传的文件类型(string)<br />
          1）测试API beforeUpload可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。注意：该方法不支持老 IE。(function)<br />
          1）测试API onChange可选参数, 上传文件改变时的状态(function)<br />
          1）测试API onPreview点击文件链接时的回调(function)<br />
          1）测试API onRemove点击移除文件时的回调(function)<br />
        </h2>
        <DragUpload />
        <br />
        <h1 className='h1'>照片墙上传</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API name可选参数, 上传的文件(string)<br />
          1）测试API fileList可选参数，已经上传的文件列表(array)<br />
          1）测试API action必选参数, 上传的地址(string)<br />
          1）测试API listType上传列表的内建样式，支持三种种基本样式 text/picture/picture-card(string)<br />
          1）测试API headers可选参数, 设置上传的请求头部，IE10 以上有效(string)<br />
          1）测试API accept可选参数, 接受上传的文件类型(string)<br />
          1）测试API beforeUpload可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。注意：该方法不支持老 IE。(function)<br />
          1）测试API onChange可选参数, 上传文件改变时的状态(function)<br />
          1）测试API onPreview点击文件链接时的回调(function)<br />
          1）测试API onRemove点击移除文件时的回调(function)<br />
        </h2>
        <WallUpload />
        <br />
        <h1 className='h1'>图片列表上传</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API name可选参数, 上传的文件(string)<br />
          1）测试API defaultFileList可选参数，默认已经上传的文件列表(array)<br />
          1）测试API action必选参数, 上传的地址(string)<br />
          1）测试API listType上传列表的内建样式，支持三种种基本样式 text/picture/picture-card(string)<br />
          1）测试API headers可选参数, 设置上传的请求头部，IE10 以上有效(string)<br />
          1）测试API accept可选参数, 接受上传的文件类型(string)<br />
          1）测试API beforeUpload可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。注意：该方法不支持老 IE。(function)<br />
          1）测试API onChange可选参数, 上传文件改变时的状态(function)<br />
          1）测试API onPreview点击文件链接时的回调(function)<br />
          1）测试API onRemove点击移除文件时的回调(function)<br />
        </h2>
        <ListUpload />
        <br />
        <h1 className='h1'>手动上传</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API name可选参数, 上传的文件(string)<br />
          1）测试API fileList可选参数，已经上传的文件列表(array)<br />
          1）测试API action必选参数, 上传的地址(string)<br />
          1）测试API data可选参数, 上传所需参数或返回上传参数的方法(object/function)<br />
          1）测试API listType上传列表的内建样式，支持三种种基本样式 text/picture/picture-card(string)<br />
          1）测试API headers可选参数, 设置上传的请求头部，IE10 以上有效(string)<br />
          1）测试API accept可选参数, 接受上传的文件类型(string)<br />
          1）测试API beforeUpload可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。注意：该方法不支持老 IE。(function)<br />
          1）测试API onChange可选参数, 上传文件改变时的状态(function)<br />
          1）测试API onPreview点击文件链接时的回调(function)<br />
          1）测试API onRemove点击移除文件时的回调(function)<br />
        </h2>
        <ManualUpload />
        <br />
      </div>
    )
  }
}
