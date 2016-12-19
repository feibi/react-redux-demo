import React from 'react';
import Animate from 'rc-animate';
import Icon from '../icon';
//import Progress from '../progress';
import classNames from 'classnames';
//import { UploadListProps } from './interface';

import './index.scss'
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
const previewFile = (file, callback) => {
  const reader = new FileReader();
  reader.onloadend = () => callback(reader.result);
  reader.readAsDataURL(file);
};

export default class UploadList extends React.Component {
  static defaultProps = {
    listType: 'text',  // or picture
    progressAttr: {
      strokeWidth: 3,
      showInfo: false,
    },
    prefixCls: 'ant-upload',
  };

  handleClose = (file) => {
    const onRemove = this.props.onRemove;
    if (onRemove) {
      onRemove(file);
    }
  }

  handlePreview = (file, e) => {
    const { onPreview } = this.props;
    if (!onPreview) {
      return;
    }
    e.preventDefault();
    return onPreview(file);
  }

  componentDidUpdate() {
    if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
      return;
    }
    (this.props.items || []).forEach(file => {
      if (typeof document === 'undefined' ||
          typeof window === 'undefined' ||
          !window.FileReader || !window.File ||
          !(file.originFileObj instanceof File) ||
          file.thumbUrl !== undefined) {
        return;
      }
      /*eslint-disable */
      file.thumbUrl = '';
      /*eslint-enable */
      previewFile(file.originFileObj, (previewDataUrl) => {
        /*eslint-disable */
        file.thumbUrl = previewDataUrl;
        /*eslint-enable */
        this.forceUpdate();
      });
    });
  }

  render() {
    const { prefixCls, items = [], listType } = this.props;
    const list = items.map(file => {
      let progress;
      let icon = <Icon type="paper-clip" />;

      if (listType === 'picture' || listType === 'picture-card') {
        if (file.status === 'uploading' || (!file.thumbUrl && !file.url)) {
          if (listType === 'picture-card') {
            icon = <div className={`${prefixCls}-list-item-uploading-text`}>文件上传中</div>;
          } else {
            icon = <Icon className={`${prefixCls}-list-item-thumbnail`} type="picture" />;
          }
        } else {
          icon = (
            <a
              className={`${prefixCls}-list-item-thumbnail`}
              onClick={e => this.handlePreview(file, e)}
              href={file.url || file.thumbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={file.url || file.thumbUrl} alt={file.name} />
            </a>
          );
        }
      }
      if (file.status === 'uploading') {
        progress = (
          <div className={`${prefixCls}-list-item-progress`}>
            {/*<Progress type="line" {...this.props.progressAttr} percent={file.percent} />*/}
          </div>
        );
      }
      const infoUploadingClass = classNames({
        [`${prefixCls}-list-item`]: true,
        [`${prefixCls}-list-item-${file.status}`]: true,
      });
      const preview = file.url ? (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${prefixCls}-list-item-name`}
          onClick={e => this.handlePreview(file, e)}
        >
          {file.name}
        </a>
      ) : (
        <span
          className={`${prefixCls}-list-item-name`}
          onClick={e => this.handlePreview(file, e)}
        >
          {file.name}
        </span>
      );
      const style = (file.url || file.thumbUrl) ? undefined : {
        pointerEvents: 'none',
        opacity: 0.5,
      };
      const actions = (listType === 'picture-card' && file.status !== 'uploading') ? (
        <span>
          <a
            href={file.url || file.thumbUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={style}
            onClick={e => this.handlePreview(file, e)}
          >
            <Icon type="eye-o" />
          </a>
          <Icon type="delete" title="Remove file" onClick={() => this.handleClose(file)} />
        </span>
      ) : (
        <Icon type="cross" title="Remove file" onClick={() => this.handleClose(file)} />
      );
      return (
        <div className={infoUploadingClass} key={file.uid}>
          <div className={`${prefixCls}-list-item-info`}>
            {icon}
            {preview}
            {actions}
          </div>
          {progress}
        </div>
      );
    });
    const listClassNames = classNames({
      [`${prefixCls}-list`]: true,
      [`${prefixCls}-list-${listType}`]: true,
    });
    return (
      <Animate
        transitionName={`${prefixCls}-margin-top`}
        component="div"
        className={listClassNames}
      >
        {list}
      </Animate>
    );
  }
}
