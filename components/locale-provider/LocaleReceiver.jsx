// /* eslint-disable no-undef */
// import React from 'react';
// import PropTypes from 'prop-types';

// export default class LocaleReceiver extends React.Component {
//   static propTypes = {
//     componentName: PropTypes.string,
//     defaultLocale: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
//     children: PropTypes.func
//   }

//   static contextTypes = {
//     idollLocale: PropTypes.object,
//   }

//   getLocale() {
//     const { componentName, defaultLocale } = this.props;
//     const { idollLocale } = this.context;
//     const localeFromContext = idollLocale && idollLocale[componentName];
//     let locale = null;
//     let fromContext = null;
//     if (typeof defaultLocale === 'function') {
//       locale = defaultLocale();
//       fromContext = localeFromContext || {};
//     } else {
//       locale = defaultLocale;
//       fromContext = localeFromContext || {};
//     }
//     return Object.assign(locale, fromContext);
//     // return {
//     //   ...(typeof defaultLoclae === 'function' ? defaultLocale() : defaultLocale),
//     //   ...(localeFromContext || {})
//     // };
//   }

//   getLocaleCode() {
//     const { idollLocale } = this.context;
//     const localeCode = idollLocale && idollLocale.locale;
//     return localeCode;
//   }

//   render() {
//     return this.props.children(this.getLocale(), this.getLocaleCode());
//   }
// }
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
