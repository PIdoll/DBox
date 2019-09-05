import React from 'react';
import RcUpload from 'rc-upload';
import UploadList from './uploadList';
import defaultLocale from '../locale-provider/default';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import getFileItem from './getFileItem';
import classNames from 'classnames';
const prefixCls = 'idoll-upload';

function noop() {
}

function T() {
  return true;
}

// Fix IE file.status problem
// via coping a new Object
function fileToObject(file) {
  return {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.filename || file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    response: file.response,
    error: file.error,
    percent: 0,
    originFileObj: file,
  };
}

/**
 * 生成Progress percent: 0.1 -> 0.98
 *   - for ie
 */
function genPercentAdd() {
  let k = 0.1;
  const i = 0.01;
  const end = 0.98;
  return function (s) {
    let start = s;
    if (start >= end) {
      return start;
    }

    start += k;
    k = k - i;
    if (k < 0.001) {
      k = 0.001;
    }
    return start * 100;
  };
}

function UploadDragger(props) {
  return <Upload {...props} type='drag' style={{ height: props.height, width: props.width }} />;
}

export default class Upload extends React.Component {
  static Dragger = UploadDragger;

  static defaultProps = {
    prefixCls: prefixCls,
    type: 'select',
    // do not set
    // name: '',
    multiple: false,
    action: '',
    data: {},
    accept: '',
    onChange: noop,
    beforeUpload: T,
    showUploadList: true,
    listType: 'text', // or pictrue
    className: '',
    disabled: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      fileList: this.props.fileList || this.props.defaultFileList || [],
      dragState: 'drop',
    };
  }

  componentWillUnmount() {
    this.clearProgressTimer();
  }

  onStart = (file) => {
    let targetItem;
    let nextFileList = this.state.fileList.concat();
    targetItem = fileToObject(file);
    targetItem.status = 'uploading';
    nextFileList.push(targetItem);
    this.onChange({
      file: targetItem,
      fileList: nextFileList,
    });
    // fix ie progress
    if (!(window).FormData) {
      this.autoUpdateProgress(0, targetItem);
    }
  }

  autoUpdateProgress(percent, file) {
    const getPercent = genPercentAdd();
    let curPercent = 0;
    this.clearProgressTimer();
    this.progressTimer = setInterval(() => {
      curPercent = getPercent(curPercent);
      this.onProgress({
        percent: curPercent,
      }, file);
    }, 200);
  }

  removeFile(file) {
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    let index = fileList.indexOf(targetItem);
    if (index !== -1) {
      fileList.splice(index, 1);
      return fileList;
    }
    return null;
  }

  onSuccess = (response, file) => {
    this.clearProgressTimer();
    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) { /* do nothing */ }
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    // removed
    if (!targetItem) {
      return;
    }
    targetItem.status = 'done';
    targetItem.response = response;
    this.onChange({
      file: { ...targetItem },
      fileList,
    });
  }

  onProgress = (e, file) => {
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    // removed
    if (!targetItem) {
      return;
    }
    targetItem.percent = e.percent;
    this.onChange({
      event: e,
      file: { ...targetItem },
      fileList: this.state.fileList,
    });
  }

  onError = (error, response, file) => {
    this.clearProgressTimer();
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    // removed
    if (!targetItem) {
      return;
    }
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';
    this.onChange({
      file: { ...targetItem },
      fileList,
    });
  }

  handleRemove(file) {
    let fileList = this.removeFile(file);
    if (fileList) {
      this.onChange({
        file,
        fileList,
      });
    }
  }

  handleManualRemove = (file) => {
    // this.refs.upload.abort(file);
    this.upload.abort(file);
    /* eslint-disable */
    file.status = 'removed';
    /* eslint-enable */
    if ('onRemove' in this.props) {
      this.props.onRemove(file);
      if (this.props.onRemove(file) === false) {
        return false
      }
      this.handleRemove(file);
    }
  }

  onChange = (info, updateState = true) => {
    if (!('fileList' in this.props) && updateState) {
      this.setState({ fileList: info.fileList });
    }
    const { onChange } = this.props;
    if (onChange) {
      onChange(info);
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('fileList' in nextProps) {
      this.setState({
        fileList: nextProps.fileList || [],
      });
    }
  }

  onFileDrop = (e) => {
    this.setState({
      dragState: e.type,
    });
  }

  beforeUpload = (file, fileList) => {
    if (!this.props.beforeUpload) {
      return true;
    }
    const result = this.props.beforeUpload(file, fileList);
    if (result === false) {
      return false;
    } else if (result && (result).then) {
      return result;
    }
    return true;
  }

  clearProgressTimer() {
    clearInterval(this.progressTimer);
  }

  saveUpload = (node) => {
    this.upload = node;
  }

  renderUploadList = (locale) => {
    const { showUploadList, listType, onPreview } = this.props;
    const { showRemoveIcon, showPreviewIcon } = showUploadList;
    return (
      <UploadList
        listType={listType}
        items={this.state.fileList}
        onPreview={onPreview}
        onRemove={this.handleManualRemove}
        showRemoveIcon={showRemoveIcon}
        showPreviewIcon={showPreviewIcon}
        locale={{ ...locale, ...this.props.locale }}
      />
    );
  }

  render() {
    const {
      prefixCls = '',
      className,
      showUploadList,
      listType,
      type,
      disabled,
      children,
    } = this.props;

    const rcUploadProps = {
      onStart: this.onStart,
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      ...this.props,
      beforeUpload: this.beforeUpload,
    };

    delete rcUploadProps.className;

    const uploadList = showUploadList ? (
      <LocaleReceiver
        componentName='Upload'
        defaultLocale={defaultLocale.Upload}
      >
        {this.renderUploadList}
      </LocaleReceiver>
    ) : null;

    if (type === 'drag') {
      const dragCls = classNames(prefixCls, {
        [`${prefixCls}-drag`]: true,
        [`${prefixCls}-drag-uploading`]: this.state.fileList.some(file => file.status === 'uploading'),
        [`${prefixCls}-drag-hover`]: this.state.dragState === 'dragover',
        [`${prefixCls}-disabled`]: disabled,
      });
      return (
        <span className={className}>
          <div
            className={dragCls}
            onDrop={this.onFileDrop}
            onDragOver={this.onFileDrop}
            onDragLeave={this.onFileDrop}
          >
            <RcUpload {...rcUploadProps} ref={this.saveUpload} className={`${prefixCls}-btn`}>
              <div className={`${prefixCls}-drag-container`}>
                {children}
              </div>
            </RcUpload>
          </div>
          {uploadList}
        </span>
      );
    }

    const uploadButtonCls = classNames(prefixCls, {
      [`${prefixCls}-select`]: true,
      [`${prefixCls}-select-${listType}`]: true,
      [`${prefixCls}-disabled`]: disabled,
    });

    const uploadButton = (
      <div className={uploadButtonCls} style={{ display: children ? '' : 'none' }}>
        <RcUpload {...rcUploadProps} ref={this.saveUpload} />
      </div>
    );

    if (listType === 'picture-card') {
      return (
        <span className={className}>
          {uploadList}
          {uploadButton}
        </span>
      );
    }
    return (
      <span className={className}>
        {uploadButton}
        {uploadList}
      </span>
    );
  }
}
