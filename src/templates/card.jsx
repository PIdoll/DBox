import React from 'react';
import Card from 'components/card';
import {Row, Col} from 'components/grid';
import Icon from 'components/icon';
import Avatar from 'components/avatar';


const Meta = Card.Meta;
// const Grid = Card.Grid;

const tabList = [{
  key: 'tab1',
  tab: 'tab1',
}, {
  key: 'tab2',
  tab: 'tab2',
}];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const tabListNoTitle = [{
  key: 'article',
  tab: 'article',
}, {
  key: 'app',
  tab: 'app',
}, {
  key: 'project',
  tab: 'project',
}];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const actions = [
  <Icon type='message' />,
  <Icon type='user' />,
  <Icon type='tool' />
]

export default class card extends React.Component {
  state ={
    key: 'tab1',
    noTitleKey: 'app'
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  }

  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>典型的卡片 </h1>
        <span>包含标题、内容、操作区域。</span>
        <Card title='卡片 提示' extra={<a href='#'>更多</a>} bordered bodyStyle={{ width: 300 }}>
          <p>卡片内容</p>
          <p>卡片内容</p>
          <p>卡片内容</p>
        </Card>
        <h1 className='h1'>无边框的卡片 </h1>
        <span>在灰色背景上使用无边框的卡片。</span>
        <div style={{width: 500, height: 200, background: '#ccc', paddingTop: 15}}>
          <Card title='卡片 提示' bordered={false} bodyStyle={{ width: 300, marginLeft: 20 }}>
            <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </Card>
        </div>
        <h1 className='h1'>简洁的卡片</h1>
        <span>只包含内容区域</span>
        <Card bodyStyle={{ width: 300 }}>
          <p>卡片内容</p>
          <p>卡片内容</p>
          <p>卡片内容</p>
        </Card>
        <h1 className='h1'>更灵活的内容展示</h1>
        <span>可以利用 Card.Meta 支持更灵活的内容</span>
        <Card
          hoverable
          bodyStyle={{ width: 240 }}
          cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
      >
          <Meta title='提示语' description='欢迎来到react的世界' />
        </Card>

        <h1 className='h1'>栅格卡片</h1>
        <span>在系统概览页面常常和栅格进行配合。</span>
        <div style={{background: '#ccc', padding: 30}}>
          <Row gutter={12} type='flex' align='middle' justify='center'>
            <Col span='4' >
              <Card title='卡片 提示'>
                <p>内容</p>
              </Card>
            </Col>
            <Col span='4' >
              <Card title='卡片 提示'>
                <p>内容</p>
              </Card>
            </Col>
            <Col span='4' >
              <Card title='卡片 提示'>
                <p>内容</p>
              </Card>
            </Col>
          </Row>
        </div>
        <h1 className='h1'>预加载的卡片</h1>
        <span>数据读入前会有文本块样式。</span>
        <Card title='提示语' loading bordered bodyStyle={{width: 300}} />
        <h1 className='h1'>网格性内嵌卡片</h1>
        <span>一种常见的卡片内容区隔模式。</span>
        <Card title='网格性内嵌卡片'>
          <Card.Grid bodyStyle={{ width: '25%', textAlign: 'center' }}>内容</Card.Grid>
          <Card.Grid bodyStyle={{ width: '25%', textAlign: 'center' }}>内容</Card.Grid>
          <Card.Grid bodyStyle={{ width: '25%', textAlign: 'center' }}>内容</Card.Grid>
          <Card.Grid bodyStyle={{ width: '25%', textAlign: 'center' }}>内容</Card.Grid>
          <Card.Grid bodyStyle={{ width: '25%', textAlign: 'center' }}>内容</Card.Grid>
          <Card.Grid bodyStyle={{ width: '25%', textAlign: 'center' }}>内容</Card.Grid>
          <Card.Grid bodyStyle={{ width: '25%', textAlign: 'center' }}>内容</Card.Grid>
        </Card>
        <h1 className='h1'>内部卡片</h1>
        <span>可以放在普通卡片内部，展示多层级结构的信息。</span>
        <Card title='提示语'>
          <p
            style={{
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.85)',
        marginBottom: 16,
        fontWeight: 500,
      }}
     >
      提示语
          </p>
          <Card
            type='inner'
            title='提示语一'
            extra={<a href='#'>更多</a>}
    >
      内容
          </Card>
          <Card
            type='inner'
            title='提示语二'
            extra={<a href='#'>更多</a>}
            bodyStyle={{marginTop: 15}}
    >
      内容
          </Card>
        </Card>
        <h1 className='h1'>带页签的卡片</h1>
        <span>可承载更多内容。</span>
        <Card
          title='提示语'
          extra={<a href='#'>更多</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => { this.onTabChange(key, 'key'); }}
         >
          {contentList[this.state.key]}
        </Card>
        <br />
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
        <h1 className='h1'>支持更多内容配置</h1>
        <span>一种支持封面、头像、标题和描述信息的卡片。</span>
        <Card
          bodyStyle={{width: 300}}
          cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
          action={actions}
          >
          <Meta
            avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
            title='提示'
            description='欢迎来到react的世界' />
        </Card>
      </div>
    )
  }
};

