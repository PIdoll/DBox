import React from 'react';
import createReactContext from 'create-react-context';
import defaultRenderEmpty from './renderEmpty';

const ConfigContext = createReactContext({
    getPrefixCls: (suffixCls, customizePrefixCls) => {
        if (customizePrefixCls) return customizePrefixCls;
        return `idoll-${suffixCls}`;
    },
    renderEmpty: defaultRenderEmpty,
});

export const ConfigConsumer = ConfigContext.Consumer;

class ConfigProvider extends React.Component {
    getPrefixCls = (suffixCls, customizePrefixCls) => {
        const { prefixCls = 'idoll' } = this.props;
        if (customizePrefixCls) return customizePrefixCls;
        return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
    };
    renderProvider = (context) => {
        const { children, getPopupContainer, renderEmpty, csp, autoInsertSpaceInButton } = this.props;

        const config = {
            ...context,
            getPrefixCls: this.getPrefixCls,
            csp,
            autoInsertSpaceInButton,
        };
        if (getPopupContainer) {
            config.getPopupContainer = getPopupContainer;
        }
        if (renderEmpty) {
            config.renderEmpty = renderEmpty;
        }
        return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
    };
    render() {
        return <ConfigConsumer>{this.renderProvider}</ConfigConsumer>;
    }
}

export function withConfigConsumer (config) {
    return function (Component) {
        const SFC = (props) => (
          <ConfigConsumer>
            {(configProps) => {
                const { prefixCls: basicPrefixCls } = config;
                const { getPrefixCls } = configProps;
                const { prefixCls: customizePrefixCls } = props;
                const prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
                return <Component {...configProps} {...props} prefixCls={prefixCls} />;
              }}
          </ConfigConsumer>
          )
          const cons = Component.constructor;
          const name = (cons && cons.displayName) || Component.name || 'Component';
          SFC.displayName = `withConfigConsumer(${name})`;
          return SFC;
        };
    }

    export default ConfigProvider;
