import React from 'react';
// import Empty from '../empty';
import { ConfigConsumer } from './';
// import emptyImg from './empty.svg';
import Empty from '../empty';

const renderEmpty = (componentName) => (
  <ConfigConsumer>
    {({ getPrefixCls }) => {
            const prefix = getPrefixCls('empty');
            switch (componentName) {
                case 'Table':
                case 'List':
                    return <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} className={`${prefix}-normal`} />;
                case 'Select':
                case 'TreeSelect':
                case 'Cascader':
                case 'Transfer':
                    return <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} className={`${prefix}-small`} />
                default:
                return <Empty />
            }
        }}
  </ConfigConsumer>
);

export default renderEmpty;
