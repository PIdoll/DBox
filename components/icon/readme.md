有含义的矢量图形，每一个图标打倒一个敌人。

#### **图标的命名规范**

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

#### **如何使用**

使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```jsx
<Icon type="home" style={{fontSize: 18}} />
```

最终会渲染为：

```html
<i class="idoll-icon idoll-icon-${type}"></i>
```


#### **图标列表**


#### **一. 方向性图标**

```jsx
import {Icon} from 'components';
const icons1 = ['arrows-alt', 'shrink', 'backward', 'forward','caret-left', 'caret-right', 'caret-up', 'caret-down', 'down', 'up', 'up-circle', 'down-circle','left-circle-o', 'right-circle-o', 'up-circle-o', 'down-circle-o', 'menu-fold', 'menu-unfold', 'swap'];
class IconView extends React.Component {
  render() {
    return (
      icons1.map(function(val,index){
      return <li><Icon type={val} key={val} /><span>{val}</span></li>})
    )
  }
}
<IconView />
```

#### **二. 提示建议性图标**

```jsx
import {Icon} from 'components';
const icons2 = ['warning-circle', 'plus', 'check-circle-o', 'close-circle', 'close', 'plus-circle-o', 'remove-circle-o', 'remove-circle', 'check', 'plus-circle', 'check-circle', 'check-circle-o', 'remove'];

class IconView extends React.Component {
  render() {
    return (
      icons2.map(function(val,index){
      return <li><Icon type={val} key={val} /><span>{val}</span></li>})
    )
  }
}
<IconView />
```

#### **三. 网站通用性图标**

```jsx
import {Icon} from 'components';
const icons3 = ['delete', 'edit', 'copy', 'bars', 'calendar', 'message', 'phone', 'tag', 'search', 'filter', 'logout',];

class IconView extends React.Component {
  render() {
    return (
      icons3.map(function(val,index){
      return <li><Icon type={val} key={val} /><span>{val}</span></li>})
    )
  }
}
<IconView />
```

#### **四. 网站通用图标**

```jsx
import {Icon} from 'components';
const icons4 = ['platform', 'user-group', 'appstore-o', 'user', 'home', 'clock-o', 'tool', 'unlock', 'achievement', 'trophy', 'sound','pro-chart', 'pro-clock-circle', 'pro-download', 'pro-drag', 'pro-info', 'pro-left', 'pro-phone-circle', 'pro-right', 'pro-rollback', 'filter', 'logout','delete', 'edit', 'copy', 'bars', 'calendar', 'message', 'pro-safety', 'pro-setting', 'pro-sharealt', 'pro-sync', 'pro-table','arrowdown', 'arrowup', 'book', 'contacts', 'detail', 'flag', 'help', 'pro2-info-circle-o', 'pro2-info-circle', 'pro2-calendar', 'pro2-clear','pro2-clip', 'pro2-eye', 'pro2-delete', 'pro2-loading', 'pro2-pen', 'pro2-upload', 'pro2-download', 'pro2-file'];

class IconView extends React.Component {
  render() {
    return (
      icons4.map(function(val,index){
      return <li><Icon type={val} key={val} /><span>{val}</span></li>})
    )
  }
}
<IconView />
```

<style>
li {
  list-style:none;
  float:left;
  width: 25%;
  font-size:18px;
  height: 100px;
  text-align:center;
  transition: all .2s;
}
li:hover i {
  color: #13B886;
  transition: all .2s;
  font-size:32px
}
li:hover span {
  font-size:14px;
  transition: all .2s;
}
li i,li span {
  display:block;
}

</style>

```jsx noeditor
import {PrevPage, BackTop} from 'components';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
