import React from 'react';
import PropTypes from 'prop-types';

export default class LocaleReceiver extends React.Component {
  static contextTypes = {
    idollLocale: PropTypes.object,
  }

  getLocale () {
    const { componentName, defaultLocale } = this.props;
    const { idollLocale } = this.context;
    const localeFromContext = idollLocale && idollLocale[componentName];
    return {
      ...(typeof defaultLocale === 'function' ? defaultLocale() : defaultLocale),
      ...(localeFromContext || {}),
    };
  }

  getLocaleCode() {
    const { idollLocale } = this.context;
    const localeCode = idollLocale && idollLocale.locale;
    return localeCode;
  }

  render () {
    return this.props.children(this.getLocale(), this.getLocaleCode());
  }
}
