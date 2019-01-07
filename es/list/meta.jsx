import * as React from 'react';
import classNames from 'classnames';

export default class Meta extends React.Component {
    render() {
            const {
            prefixCls = 'idoll-list',
            className,
            avatar,
            title,
            description,
            ...others
            } = this.props;
            const classString = classNames(`${prefixCls}-item-meta`, className);
            const content = (
              <div className={`${prefixCls}-item-meta-content`}>
                {title && <h4 className={`${prefixCls}-item-meta-title`}>{title}</h4>}
                {description && <div className={`${prefixCls}-item-meta-description`}>{description}</div>}
              </div>
            );
            return (
              <div {...others} className={classString}>
                {avatar && <div className={`${prefixCls}-item-meta-avatar`}>{avatar}</div>}
                {(title || description) && content}
              </div>
            );
        };
}
