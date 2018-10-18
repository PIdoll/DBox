import * as React from 'react';
import List from 'components/list';
import Avatar from 'components/avatar';
import {Spin} from 'components/spin';
import Button from 'components/button';
import Card from 'components/card';
import Icon from 'components/icon';

import reqwest from 'reqwest';
const Meta = List.Meta;


// 简单列表
const simpleData = [
    '内容一',
    '内容二',
    '内容三',
    '内容四',
    '内容五'
]

// 基础列表
const basicData = [
  {
    title: '会员 1',
  },
  {
    title: '会员 2',
  },
  {
    title: '会员 3',
  },
  {
    title: '会员 4',
  },
];

// 加载更多列表
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

// 栅格列表数据
const colData = [
  {
    title: '标题 1',
  },
  {
    title: '标题 2',
  },
  {
    title: '标题 3',
  },
  {
    title: '标题 4',
  },
];

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'https://github.com/loan-front-team/idoll',
    title: `提示 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '描述',
    content: '评论内容',
  });
}

// 分页操作
const pagination = {
  pageSize: 10,
  current: 1,
  total: listData.length,
  onChange: () => {
  },
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


export default class list extends React.Component {
  // 加载更多
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    data: [],
  }
  componentDidMount() {
    this.getData((res) => {
      this.setState({
        loading: false,
        data: res.results,
      });
    });
  }
  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }
  onLoadMore = () => {
    this.setState({
      loadingMore: true,
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.results);
      this.setState({
        data,
        loadingMore: false,
      }, () => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
    });
   }
    render() {
      // 加载更多
      const { loading, loadingMore, showLoadingMore, data } = this.state;
      const loadMore = showLoadingMore ? (
        <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
          {loadingMore && <Spin />}
          {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
        </div>
      ) : null;
        return (
          <div id='main-container'>
            <h1 className='h1'>简单列表 </h1>
            <span>列表拥有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
可通过设置 header 和 footer，来自定义列表头部和尾部。</span>
            <div>
              <h3 style={{ marginBottom: 16 }}>默认尺寸</h3>
              <List
                header={<div>首部</div>}
                footer={<div>尾部</div>}
                bordered
                dataSource={simpleData}
                renderItem={item => (<List.Item>{item}</List.Item>)}
              />
              <h3 style={{ margin: '16px 0' }}>小尺寸</h3>
              <List
                size='small'
                header={<div>首部</div>}
                footer={<div>尾部</div>}
                bordered
                dataSource={simpleData}
                renderItem={item => (<List.Item>{item}</List.Item>)}
              />
              <h3 style={{ margin: '16px 0' }}>大尺寸</h3>
              <List
                size='large'
                header={<div>首部</div>}
                footer={<div>尾部</div>}
                bordered
                dataSource={simpleData}
                renderItem={item => (<List.Item>{item}</List.Item>)}
              />
              <h1 className='h1'>基础列表 </h1>
              <List
                itemLayout='horizontal'
                dataSource={basicData}
                renderItem={item => (
                  <List.Item>
                    {<Meta
                      avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                      title={<a href='https://github.com/loan-front-team/idoll'>{item.title}</a>}
                      description='评论内容'
                    />}
                  </List.Item>
                )}
              />
              <h1 className='h1'>加载更多 </h1>
              <span>可通过 loadMore 属性实现加载更多功能。</span>
              <List
                className='demo-loadmore-list'
                loading={loading}
                itemLayout='horizontal'
                loadMore={loadMore}
                dataSource={data}
                renderItem={item => (
                  <List.Item actions={[<a>编辑</a>, <a>更多</a>]}>
                    <Meta
                      avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                      title={<a href='#'>{item.name.last}</a>}
                      description='评论内容'
                    />
                    <div>内容</div>
                  </List.Item>
                )}
              />
              <h1 className='h1'>栅格列表 </h1>
              <span>通可以通过设置 List 的 grid 属性来实现栅格列表，column 可设置期望显示的列数。</span>
              <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={colData}
                renderItem={item => (
                  <List.Item>
                    <Card title={item.title}>列表内容</Card>
                  </List.Item>
                )}
              />
              <h1 className='h1'>响应式栅格列表 </h1>
              <span>响应式的栅格列表。尺寸与 Layout Grid 保持一致。</span>
              <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                dataSource={colData}
                renderItem={item => (
                  <List.Item>
                    <Card title={item.title}>列表内容</Card>
                  </List.Item>
                )}
              />
              <h1 className='h1'>竖排列表样式</h1>
              <span>通过设置 itemLayout 属性为 vertical 可实现竖排列表样式。</span>
              <div>
                <List
                  itemLayout='vertical'
                  size='large'
                  pagination={pagination}
                  dataSource={listData}
                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      actions={[<IconText type='up' text='156' />, <IconText type='down' text='156' />, <IconText type='message' text='2' />]}
                      extra={<img width={272} alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' />}
                    >
                      <Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                        />
                      {item.content}
                    </List.Item>
                    )}
                />
              </div>
            </div>
          </div>
        )
    }
};
