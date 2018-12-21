const path = require('path');
const { version } = require('./package.json')
const { camelCase, upperFirst } = require('lodash');

const TITLE = `Dbox UI ${version}`;
const PORT = parseInt(process.env.PROT || 9002, 10);

module.exports = {
  title: TITLE,
  serverPort: PORT,
  exampleMode: 'collapse',
  usageMode: 'hide',
  // Override Styleguidist components
	styleguideComponents: {
    LinkRenderer: path.join(__dirname, 'styleguide/components/link'),
    ComponentListRenderer: path.join(__dirname, 'styleguide/components/componentList'),
    LogoRenderer: path.join(__dirname, 'styleguide/components/logo'),
  // SectionsRenderer: path.join(__dirname, 'styleguide/components/sectionRenderer'),
    StyleGuideRenderer: path.join(__dirname, 'styleguide/components/styleGuide'),
	},
  ignore: ['**/*-test.jsx'],
  pagePerSection: true,
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
        '& > div:nth-child(1)': {
          flexGrow: '2',
        },
        '& button ': {
          display: 'block',
          width: '100%',
          padding: '10px 20px ',
          color: '#455a64',
          cursor: 'pointer',
          float: 'right',
          textAlign: 'center',
        },
         '& > div:nth-child(2)': {
          display: 'none',
        }
      },
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
    SectionHeading: {
      sectionName: {
        paddingBottom: '8px',
        fontSize: '40px'
      }
    },
		Markdown: {
			pre: {
        border: 0,
        padding: '0 10px',
				background: 'none',
			},
			code: {
				fontSize: 24,
			},
		},
  },
  getComponentPathLine: (componentPath) => {
    const dirname = path.dirname(componentPath, '.jsx')
    const name = dirname.split('/').slice(-1)[0]
    const componentName = upperFirst(camelCase(name))
    return `import {${componentName}} from Dbox`
  },
  sections: [
    {
      name: 'Typography',
      description: '字体是产品界面设计中感知性设计模式的要素之一，是设计模式可视化的内容和完成工作的主要方式，科学有序的字体系统可以有效提升产品的阅读体验。因此我们在进行大量的尝试和研究对比主流设计体系之后，制定出一套（以下）系统字体来处理 DBox 产品中所有标准字体，以确保使用 DBox 设计体系产出的产品或系统具有阅读清晰、层次分明和性能良好的特点。',
      content: 'components/typography/readme.md'
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'General',
          components: () => ([
            path.resolve(__dirname, './components/button/index.jsx'),
            path.resolve(__dirname, './components/icon/index.jsx'),
            path.resolve(__dirname, './components/color/index.jsx'),
            path.resolve(__dirname, './components/typography/index.jsx'),
            path.resolve(__dirname, './components/grid/index.jsx'),
            path.resolve(__dirname, './components/layout/index.jsx'),
          ])
        },
        {
          name: 'Navigation',
          components: () => ([
            path.resolve(__dirname, './components/affix/index.jsx'),
            path.resolve(__dirname, './components/dropdown/index.jsx'),
            path.resolve(__dirname, './components/pagination/index.jsx'),
            path.resolve(__dirname, './components/breadcrumb/index.jsx'),
            path.resolve(__dirname, './components/steps/index.jsx'),
            path.resolve(__dirname, './components/menu/index.jsx'),
          ])
        },
        {
          name: 'DataEntry',
          components: () => ([
           path.resolve(__dirname, './components/auto-complete/index.jsx'),
           path.resolve(__dirname, './components/cascader/index.jsx'),
           path.resolve(__dirname, './components/input/index.jsx'),
           path.resolve(__dirname, './components/input-number/index.jsx'),
           path.resolve(__dirname, './components/select/index.jsx'),
           path.resolve(__dirname, './components/tree-select/index.jsx'),
           path.resolve(__dirname, './components/date-picker/index.jsx'),
           path.resolve(__dirname, './components/time-picker/index.jsx'),
           path.resolve(__dirname, './components/radio/index.jsx'),
           path.resolve(__dirname, './components/checkbox/index.jsx'),
           path.resolve(__dirname, './components/form/index.jsx'),
           path.resolve(__dirname, './components/switch/index.jsx'),
        //    path.resolve(__dirname, './components/skeleton/skeleton.jsx'),
           path.resolve(__dirname, './components/slider/index.jsx'),
        //    path.resolve(__dirname, './components/rate/rate.jsx'),
           path.resolve(__dirname, './components/transfer/index.jsx'),
            path.resolve(__dirname, './components/upload/index.jsx'),
          ])
        },
        {
          name: 'DataDisplay',
          components: () => ([
            path.resolve(__dirname, './components/avatar/avatar.jsx'),
            path.resolve(__dirname, './components/badge/index.jsx'),
          //   path.resolve(__dirname, './components/card/card.jsx'),
            path.resolve(__dirname, './components/calendar/index.jsx'),
            path.resolve(__dirname, './components/collapse/index.jsx'),
          //  path.resolve(__dirname, './components/list/list.jsx'),
            path.resolve(__dirname, './components/popover/index.jsx'),
            path.resolve(__dirname, './components/tree/index.jsx'),
            path.resolve(__dirname, './components/tooltip/index.jsx'),
            path.resolve(__dirname, './components/table/index.jsx'),
            path.resolve(__dirname, './components/tabs/index.jsx'),
            path.resolve(__dirname, './components/timeline/index.jsx'),
            path.resolve(__dirname, './components/tag/index.jsx'),
          ])
        },
        {
          name: 'Feedback',
          components: () => ([
          path.resolve(__dirname, './components/alert/index.jsx'),
          path.resolve(__dirname, './components/modal/index.jsx'),
          path.resolve(__dirname, './components/message/index.jsx'),
        //  path.resolve(__dirname, './components/notification/notification.jsx'),
         path.resolve(__dirname, './components/drawer/index.jsx'),
          path.resolve(__dirname, './components/progress/progress.jsx'),
         path.resolve(__dirname, './components/popconfirm/index.jsx'),
          path.resolve(__dirname, './components/spin/index.jsx'),
          ])
        },
        {
          name: 'Others',
          components: () => ([
            path.resolve(__dirname, './components/anchor/index.jsx'),
            path.resolve(__dirname, './components/back-top/index.jsx'),
            path.resolve(__dirname, './components/divider/index.jsx'),
          ])
        },
      ],
       sectionDepth: 2
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
          test: /\.(jsx|js|mb)$/,
          loaders: 'babel-loader',
          exclude: path.resolve(__dirname, 'node_modules'),
        },
        {
          test: /\.(png|svg|jpg|gif|webp|ico)$/,
          use: [
             'file-loader'
           ],
           exclude: path.resolve(__dirname, 'node_modules')
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
    }
  }
}
