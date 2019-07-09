import React from 'react';
import PropTypes from 'prop-types';
import defaultLocaleData from './default';

export default class LocaleReceiver extends React.Component {
  static defaultProps = {
    componentName: 'global',
  }

  static contextTypes = {
    idollLocale: PropTypes.object,
  }

  getLocale() {
    const { componentName, defaultLocale } = this.props;
    const locale = defaultLocale || (defaultLocaleData[componentName || 'global']);
    const { idollLocale } = this.context;
    const localeFromContext = componentName && idollLocale ? idollLocale[componentName] : {};
    return {
      ...(typeof locale === 'function' ? locale() : locale),
      ...(localeFromContext || {}),
    };
  }

  getLocaleCode() {
    const { idollLocale } = this.context;
    const localeCode = idollLocale && idollLocale.locale;
    if (idollLocale && idollLocale.exist && !localeCode) {
      return defaultLocaleData.locale;
    }
    return localeCode;
  }
  render() {
    return this.props.children(this.getLocale(), this.getLocaleCode());
  }
}
