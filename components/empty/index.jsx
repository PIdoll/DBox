import React from 'react';
import classNames from 'classnames';
import { ConfigConsumer } from '../config-provider';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import emptyImg from './empty.svg';
import './style';

const Empty = (props) => (
  <ConfigConsumer>
    {({ getPrefixCls }) => {
      let newProps = Object.assign({}, props);
      delete newProps.imageStyle;
            const {
                className,
                prefixCls: customizePrefixCls,
                image,
                description,
                children,
                ...restProps
            } = newProps;
            const prefixCls = getPrefixCls('empty', customizePrefixCls);
            return (
              <LocaleReceiver componentName='Empty'>
                {(locale) => {
                        const des = description || locale.description;
                        const alt = typeof des === 'string' ? des : 'empty';
                        let imageNode = null;
                        if (!image) {
                            imageNode = <img alt={alt} src={emptyImg} />;
                        } else if (typeof image === 'string') {
                            imageNode = <img alt={alt} src={image} />;
                        } else {
                            imageNode = image;
                        }
                        return (
                          <div className={classNames(prefixCls, className)} {...restProps}>
                            <div className={`${prefixCls}-image`}>{imageNode}</div>
                            <p className={`${prefixCls}-description`}>{des}</p>
                            {children && <div className={`${prefixCls}-footer`}>{children}</div>}
                          </div>
                        )
                    }}
              </LocaleReceiver>
            )
        }}
  </ConfigConsumer>
)

export default Empty
