
帮助用户查看当前所处的位置。

##### **基本用法**
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

##### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| separator | 分隔符自定义 | string\ReactNode | '/' |

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
import {PrevPage, BackTop} from 'dbox-ui';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
