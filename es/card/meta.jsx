import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';

export default function Meta(props) {
    const { prefixCls = 'dbox-card', avatar, title, description, ...others } = props;
    const MetaClassName = classNames(`${prefixCls}-meta`, classNames);
    const avatarDOM = avatar ? <div className={`${prefixCls}-meta-avatar`}>{avatar}</div> : null;
    const titleDOM = title ? <div className={`${prefixCls}-meta-title`}>{title}</div> : null;
    const descriptionDOM = description
      ? <div className={`${prefixCls}-meta-description`}>{description}</div> : null;
    const MetaDetail = title || description
        ? <div className={`${prefixCls}-meta-detail`}>
          {titleDOM}
          {descriptionDOM}
        </div> : null;

    return (
      <div {...others} className={MetaClassName} >
        {avatarDOM}
        {MetaDetail}
      </div>
    )
}

Meta.PropTypes = {
    classNames: PropTypes.string,
    prefixCls: PropTypes.string,
    avatar: PropTypes.node,
    title: PropTypes.node,
    description: PropTypes.node
}



