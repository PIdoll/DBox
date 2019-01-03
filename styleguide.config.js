const path = require('path');
const { version } = require('./package.json')
const webpackConf = require('./webpack.common.js');

const TITLE = `Dbox UI ${version}`;
const PORT = parseInt(process.env.PROT || 9002, 10);

module.exports = {
  title: TITLE,
  serverPort: PORT,
  exampleMode: 'collapse',
  usageMode: 'hide',
	styleguideComponents: {
    TabButtonRenderer: path.join(__dirname, 'styleguide/components/tabButton'),
    PathlineRenderer: path.join(__dirname, 'styleguide/components/pathline'),
    LinkRenderer: path.join(__dirname, 'styleguide/components/link'),
    PlaygroundRenderer: path.join(__dirname, 'styleguide/components/playground'),
    ComponentListRenderer: path.join(__dirname, 'styleguide/components/componentList'),
    LogoRenderer: path.join(__dirname, 'styleguide/components/logo'),
    SectionHeadingRenderer: path.join(__dirname, 'styleguide/components/sectionHeading'),
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
        '& button': {
          display: 'block',
          width: '100%',
          lineHeight: '40px',
          color: '#455a64',
          cursor: 'pointer',
          textAlign: 'center',
        },
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
        fontSize: '40px',
        color: '#000',
      }
    },
  },
  sections: [
    {
      name: 'Install',
      content: 'components/getStarted.md',
    },
    {
      name: 'GetStarted',
      content: 'components/getStarted.md',
    },
    {
      name: 'Version',
      content: 'components/version/readme.md',
    },
    {
      name: 'Color',
      content: 'components/color/readme.md',
    },
    {
      name: 'Typography',
      content: 'components/typography/readme.md',
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'General',
          components: () => ([
            path.resolve(__dirname, './components/button/index.jsx'),
            path.resolve(__dirname, './components/icon/index.jsx'),
            path.resolve(__dirname, './components/grid/index.jsx'),
            path.resolve(__dirname, './components/layout/index.jsx'),
          ])
        },
        {
          name: 'Navigation',
          components: () => ([
            path.resolve(__dirname, './components/affix/index.jsx'),
            path.resolve(__dirname, './components/breadcrumb/index.jsx'),
            path.resolve(__dirname, './components/dropdown/index.jsx'),
            path.resolve(__dirname, './components/menu/index.jsx'),
            path.resolve(__dirname, './components/pagination/index.jsx'),
            path.resolve(__dirname, './components/steps/index.jsx'),
          ])
        },
        {
          name: 'DataEntry',
          components: () => ([
            path.resolve(__dirname, './components/auto-complete/index.jsx'),
            path.resolve(__dirname, './components/cascader/index.jsx'),
            path.resolve(__dirname, './components/checkbox/index.jsx'),
            path.resolve(__dirname, './components/date-picker/index.jsx'),
            path.resolve(__dirname, './components/form/index.jsx'),
            path.resolve(__dirname, './components/input/index.jsx'),
            path.resolve(__dirname, './components/input-number/index.jsx'),
            path.resolve(__dirname, './components/radio/index.jsx'),
            path.resolve(__dirname, './components/select/index.jsx'),
            path.resolve(__dirname, './components/switch/index.jsx'),
            path.resolve(__dirname, './components/slider/index.jsx'),
            path.resolve(__dirname, './components/time-picker/index.jsx'),
            path.resolve(__dirname, './components/tree-select/index.jsx'),
            path.resolve(__dirname, './components/transfer/index.jsx'),
            path.resolve(__dirname, './components/upload/index.jsx'),
          ])
        },
        {
          name: 'DataDisplay',
          components: () => ([
            path.resolve(__dirname, './components/avatar/avatar.jsx'),
            path.resolve(__dirname, './components/badge/index.jsx'),
            path.resolve(__dirname, './components/calendar/index.jsx'),
            path.resolve(__dirname, './components/collapse/index.jsx'),
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
            path.resolve(__dirname, './components/drawer/index.jsx'),
            path.resolve(__dirname, './components/modal/index.jsx'),
            path.resolve(__dirname, './components/message/index.jsx'),
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
  webpackConfig: webpackConf,
}
