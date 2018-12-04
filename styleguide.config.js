const path = require('path');
const { version } = require('./package.json')
const {camelCase, upperFirst} = require('lodash');



module.exports = {
  title: `Dbox UI ${version}`,
  serverPort: 9002,
  exampleMode: 'collapse',
  usageMode: 'hidden',
  ribbon: {
    url: 'https://github.com/PIdoll/DBox',
    text: 'Folk me on Github'
  },
  template: {
    index: path.resolve(__dirname, 'styleguide/index.html')
},
  theme: {
    baseBackground: '#fdfdfc',
		link: '#274e75',
		linkHover: '#90a7bf',
		border: '#e0d2de',
    font: ['Helvetica', 'sans-serif'],
    sidebarWidth: 240
  },
  styles: {
		Playground: {
			preview: {
				padding: '40px 20px',
        borderRadius: 2,
        border: '1px solid #eaeefb',
      },
      table: {
        backgroundColor: '#333'
      },
      controls: {
        borderRadius: 2,
        border: '1px solid #eaeefd',
        borderTop: 'none',
        backgroundColor: '#e1e1e1',
        '& > div:nth-child(1)': {
          flexGrow: '2',
        },
        '& button ': {
          display: 'block',
          padding: '10px 20px ',
          color: '#455a64',
          cursor: 'pointer',
          float: 'right',
          backgroundColor: '#e1e1e1',
        },
         '& > div:nth-child(2)': {
          display: 'none',
        }
      },
      logo: {
        fontSize: '18px'
      },
      mq: {
        small: '@media(max-width:600px)'
      }
    },
    Table: {
      table: {
        border: '0',
        borderCollapse: 'collapse',
        fontSize: '14px',
        marginBottom: '45px',
        color: '#333',
        width: '100%',
        '& th': {
          backgroundColor: '#f5f7fa',
          border: '1px solid #eaeefb',
          padding: '10px',
          fontWeight: '600',
        },
        '& td': {
          border: '1px solid #eaeefb !important',
          padding: '10px !important',
        },
        '& td:nth-child(1)': {
          width: '15%',
        },
        '& td:nth-child(2)': {
          width: '50%',
        },
        '& td:nth-child(3)': {
          width: '20%',
        },
        '& td:nth-child(4)': {
          width: '15%',
        },
      }
    },
    ReactComponent: {
      tabButtons: {
        display: 'none'
      }
    },
    SectionHeading: {
      sectionName: {
        paddingBottom: '8px',
        fontSize: '40px'
      }
    },
    ComponentsList: {
      heading: {
        fontWeight: '700 !important',
        fontSize: '16px',
        color: '#455a64 !important',
      }
    },
    Heading: {
      heading1: {
        display: 'block',
        position: 'relative',
        fontWeight: 600,
        fontSize: '40px',
        '& > a': {
          fontWeight: '700 !important'
        }
      },
      heading2: {
        display: 'none'
      },
      heading3: {
        fontSize: '30px',
        width: '100%',
        lineHeight: '80px',
        fontWeight: '600 !important',
      },
    },
		Markdown: {
			pre: {
        border: 0,
        padding: '0 10px',
				background: 'none',
			},
			code: {
				fontSize: 14,
			},
		},
  },
  getComponentPathLine: (componentPath) => {
    const dirname = path.dirname(componentPath, '.jsx')
    const name = dirname.split('/').slice(-1)[0]
    const componentName = upperFirst(camelCase(name))
    return `import {${componentName}} from Dbox`
  },
  pagePerSection: true,
  sections: [
    {
      sections: [
        {
          content: ''
        },
      ]
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Basic',
          components: () => ([
            path.resolve(__dirname, './components/grid/index.jsx'),
            path.resolve(__dirname, './components/layout/layout.jsx'),
          ])
        },
        {
          name: 'General',
          components: () => ([
            path.resolve(__dirname, './components/button/index.jsx'),
            path.resolve(__dirname, './components/icon/index.jsx'),
          ])
        },
        {
          name: 'Navigation',
          codeSamples: 'hide',
          propsMethods: 'hide',
          components: () => ([
            // path.resolve(__dirname, './components/affix/index.jsx'),
            path.resolve(__dirname, './components/dropdown/index.jsx'),
            path.resolve(__dirname, './components/pagination/index.jsx'),
            path.resolve(__dirname, './components/breadcrumb/index.jsx'),
            path.resolve(__dirname, './components/steps/steps.jsx'),
        //    path.resolve(__dirname, './components/pagination/pagination.jsx'),
        //    path.resolve(__dirname, './components/anchor/index.jsx'),
           path.resolve(__dirname, './components/menu/index.jsx'),
          ])
        },
        {
          name: 'Data Entry',
          components: () => ([
           path.resolve(__dirname, './components/auto-complete/index.jsx'),
           path.resolve(__dirname, './components/cascader/index.jsx'),
           path.resolve(__dirname, './components/input/index.jsx'),
           path.resolve(__dirname, './components/input-number/index.jsx'),
           path.resolve(__dirname, './components/select/index.jsx'),
           path.resolve(__dirname, './components/tree-select/index.jsx'),
           path.resolve(__dirname, './components/date-picker/index.jsx'),
           path.resolve(__dirname, './components/time-picker/index.jsx'),
            path.resolve(__dirname, './components/radio/radio.jsx'),
            path.resolve(__dirname, './components/checkbox/checkbox.jsx'),
           path.resolve(__dirname, './components/time-picker/timePicker.jsx'),
         //   path.resolve(__dirname, './components/form/Form.jsx'),
            path.resolve(__dirname, './components/switch/switch.jsx'),
        //    path.resolve(__dirname, './components/skeleton/skeleton.jsx'),
            path.resolve(__dirname, './components/slider/index.jsx'),
        //    path.resolve(__dirname, './components/rate/rate.jsx'),
        //    path.resolve(__dirname, './components/transfer/transfer.jsx'),
            path.resolve(__dirname, './components/upload/upload.jsx'),
          ])
        },
        {
          name: 'Data Display',
          components: () => ([
            path.resolve(__dirname, './components/avatar/avatar.jsx'),
            path.resolve(__dirname, './components/badge/index.jsx'),
         //   path.resolve(__dirname, './components/card/card.jsx'),
            path.resolve(__dirname, './components/calendar/index.jsx'),
            path.resolve(__dirname, './components/collapse/index.jsx'),
         //   path.resolve(__dirname, './components/list/list.jsx'),
            path.resolve(__dirname, './components/popover/index.jsx'),
            path.resolve(__dirname, './components/tree/index.jsx'),
            path.resolve(__dirname, './components/tooltip/index.jsx'),
            path.resolve(__dirname, './components/table/table.jsx'),
            path.resolve(__dirname, './components/tabs/index.jsx'),
            path.resolve(__dirname, './components/timeline/index.jsx'),
            path.resolve(__dirname, './components/tag/index.jsx'),
            path.resolve(__dirname, './components/upload/upload.jsx'),
          ])
        },
        {
          name: 'Feedback',
          components: () => ([
          path.resolve(__dirname, './components/alert/index.jsx'),
         path.resolve(__dirname, './components/modal/index.jsx'),
         path.resolve(__dirname, './components/message/index.jsx'),
        //  path.resolve(__dirname, './components/notification/notification.jsx'),
        //  path.resolve(__dirname, './components/drawer/drawer.jsx'),
          path.resolve(__dirname, './components/progress/progress.jsx'),
         path.resolve(__dirname, './components/popconfirm/index.jsx'),
          path.resolve(__dirname, './components/spin/index.jsx'),
          ])
        },
        {
          name: 'Other',
          components: () => ([
          path.resolve(__dirname, './components/back-top/index.jsx'),
          path.resolve(__dirname, './components/anchor/index.jsx'),
          ])
        },
      ]
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.less$/,
          loaders: [
            'style-loader',
            'css-loader',
            'less-loader?precision=10'
          ]
        },
        {
          test: /\.jsx$/,
          loaders: 'babel-loader'
        },
      ]
    },
    resolve: {
      // 自动补全的拓展名
      extensions: ['.js', '.jsx', '.json', '.less'],
      // 路径别名
      alias: {
        'assets': path.resolve(__dirname, 'assets'),
        'templates': path.resolve(__dirname, 'src/templates'),
        'components': path.resolve(__dirname, 'components')
      }
    },
  }
}
