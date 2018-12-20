import React from 'react';
import Animate from 'rc-animate';
import Icon from '../icon';
import Progress from '../progress';
import classNames from 'classnames';

const prefixCls = 'idoll-upload';

const previewFile = (file, callback) => {
  const reader = new FileReader();
  reader.onloadend = () => callback(reader.result);
  reader.readAsDataURL(file);
};

export default class UploadList extends React.Component {
  static defaultProps = {
    listType: 'text',
    items: [],
    progressAttr: {
      strokeWidth: 3,
    },
  };

  handleClose = (file) => {
    this.props.onRemove(file);
  }

  handlePreview = (file, e) => {
    if (this.props.onPreview) {
      e.preventDefault();
      return this.props.onPreview(file);
    }
  }

  componentDidUpdate() {
    if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
      return;
    }
    this.props.items.forEach(file => {
      if (typeof document === 'undefined' ||
          typeof window === 'undefined' ||
          !window.FileReader || !window.File ||
          !(file.originFileObj instanceof File) ||
          file.thumbUrl !== undefined) {
        return;
      }
      /* eslint-disable */
      file.thumbUrl = '';
      /* eslint-enable */
      previewFile(file.originFileObj, (previewDataUrl) => {
        /*eslint-disable */
        file.thumbUrl = previewDataUrl;
        /* eslint-enable */
        this.forceUpdate();
      });
    });
  }

  render() {
    let list = this.props.items.map(file => {
      let progress;
      let icon = <Icon type='paper-clip' />;
      // 图片列表
      if (this.props.listType === 'picture' || this.props.listType === 'picture-card') {
          icon = (
            <a
              className={`${prefixCls}-list-item-thumbnail`}
              onClick={e => this.handlePreview(file, e)}
              href={file.url}
              target='_blank'
            >
              <img src={file.thumbUrl || file.url} alt={file.name} />
            </a>
          )
      }
      // 头像上传
      if (this.props.listType === 'picture-card' && file.status === 'uploading') {
          icon = <Icon className={`${prefixCls}-list-item-thumbnail`} type='picture' />;
      }

      // 进度条
      if (file.status === 'uploading') {
        progress = (
          <div className={`${prefixCls}-list-item-progress`}>
            <Progress type={this.props.listType === 'picture-card' ? 'circle' : 'line'} width={this.props.listType === 'picture-card' ? 80 : null} {...this.props.progressAttr} percent={Math.floor(file.percent)} status={file.status === 'error' ? 'exception' : 'active'} />
          </div>
        );
      }
      const infoUploadingClass = classNames({
        [`${prefixCls}-list-item`]: true,
        [`${prefixCls}-list-item-${file.status}`]: true,
      });
      return (
        <div className={infoUploadingClass} key={file.uid}>
          <div className={`${prefixCls}-list-item-info`}>
            {icon}
            {
              file.url
              ? (
                <a
                  href={file.url}
                  target='_blank'
                  className={`${prefixCls}-list-item-name`}
                  onClick={e => this.handlePreview(file, e)}
                >
                  <Icon type={this.props.listType === 'picture' ? null : 'pro2-clip'} /><span>{file.name}</span><Icon type={file.status === 'done' ? 'check' : ''} />
                </a>
              ) : (
                <span
                  className={`${prefixCls}-list-item-name`}
                  onClick={e => this.handlePreview(file, e)}
                >
                  <Icon type={this.props.listType === 'picture' ? null : 'pro2-clip'} /><span>{file.name}</span><Icon type={file.status === 'done' ? 'check' : ''} />
                </span>
              )
            }
          </div>
          {
              this.props.listType === 'picture-card' && file.status !== 'uploading'
              ? (
                <span>
                  <a
                    href={file.url}
                    target='_blank'
                    style={{ pointerEvents: file.url ? '' : 'none' }}
                    onClick={e => this.handlePreview(file, e)}
                  >
                    <Icon type='pro2-eye' />
                  </a>
                  <Icon type='delete' onClick={() => this.handleClose(file)} />
                </span>
              ) : <Icon type='close' onClick={() => this.handleClose(file)} />
            }
          {progress}
        </div>
      );
    });
    const listClassNames = classNames({
      [`${prefixCls}-list`]: true,
      [`${prefixCls}-list-${this.props.listType}`]: true,
    });
    return (
      <div className={listClassNames}>
        <Animate transitionName={`${prefixCls}-margin-top`}>
          {list}
        </Animate>
      </div>
    );
  }
}
