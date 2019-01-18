
帮助用户查看当前所处的位置。

##### **基本用法**
最基本的用法
```jsx
import { Breadcrumb } from 'dbox-ui';
class BreadcrumbView extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item><a href='javascript:void(0);'>个人中心</a></Breadcrumb.Item>
        <Breadcrumb.Item>设置</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
<BreadcrumbView />
```

##### **带图标的**
将图标放在文字的前面
```jsx
import { Breadcrumb, Icon } from 'dbox-ui';

class BreadcrumbView extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href='#'>
          <Icon type='home' />
        </Breadcrumb.Item>
        <Breadcrumb.Item href='#'>
          <Icon type='user' />
          <span>点击</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          点击
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
<BreadcrumbView />
```

##### **自定义分隔符**
使用separator=">"可以自定义分隔符
```jsx
import { Breadcrumb } from 'dbox-ui';

class BreadcrumbView extends React.Component {
  render() {
    return (
      <Breadcrumb separator='>'>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item><a href='javascript:void(0);'>个人中心</a></Breadcrumb.Item>
        <Breadcrumb.Item>设置</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
<BreadcrumbView />

```

##### **Router**
```jsx
import {Breadcrumb, Alert} from 'dbox-ui';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

class RouterBreadcrumb extends React.Component {
  render() {
    const Apps = () => (
      <ul className='app-list'>
        <li>
          <Link to='/apps/1'>Router1</Link>：<Link to='/apps/1/detail'>点击</Link>
        </li>
        <li>
          <Link to='/apps/2'>Router2</Link>：<Link to='/apps/2/detail'>点击</Link>
        </li>
      </ul>
    );
    const breadcrumbNameMap = {
      '/GetStarted': 'Application List',
      '/apps/1': 'Application1',
      '/apps/2': 'Application2',
      '/apps/1/detail': 'Detail',
      '/apps/2/detail': 'Detail'
    };
    const Home = withRouter((props) => {
      const { location } = props;
      const pathSnippets = location.pathname.split('/').filter(i => i);
      const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>
              {breadcrumbNameMap[url]}
            </Link>
          </Breadcrumb.Item>
        );
      });
      const breadcrumbItems = [(
        <Breadcrumb.Item key='home'>
          <Link to='/'>点击</Link>
        </Breadcrumb.Item>
      )].concat(extraBreadcrumbItems);
      return (
        <div className='demo'>
          <div className='demo-nav'>
            <Link to='/'>点击</Link>
            <Link to='/apps'>点击</Link>
          </div>
          <Switch>
            <Route path='/apps' component={Apps} />
            <Route render={() => <span>内容</span>} />
          </Switch>
          <Alert style={{ margin: '16px 0' }} message='内容:' />
          <Breadcrumb>
            {breadcrumbItems}
          </Breadcrumb>
        </div>
      );
    });
    return (
      <Router>
        <Home />
      </Router>
    )
  }
}
<RouterBreadcrumb />
```
##### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| separator | 分隔符自定义 | string\ReactNode | '/' |
|  params |路由的参数|object| - |
|  routes |router的路由栈信息|object[]| - |
|  itemRender |自定义链接函数，和react-router配置使用|（route， params, routes, paths）=> ReactNode | - |

##### **与browserHistory配合**
```html
import { Link } from 'react-router';

const routes = [{
  path: 'index',
  breadcrumbName: '首页'
}, {
  path: 'first',
  breadcrumbName: '一级面包屑'
}, {
  path: 'second',
  breadcrumbName: '当前页面'
}];
function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
}

return <Breadcrumb itemRender={itemRender} routes={routes}/>;
```


```jsx noeditor
import {BackTop} from 'dbox-ui';
import BreadcrumbView from '../prevPage/breadcrumb';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <BreadcrumbView />
</div>
```
