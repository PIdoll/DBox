有含义的矢量图形，每一个图标打倒一个敌人。

#### **图标的命名规范**

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

#### **如何使用**

使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```jsx
<Icon type="home" />
```

最终会渲染为：

```html
<i class="idoll-icon idoll-icon-${type}"></i>
```


#### **图标列表**


#### **一. 方向性图标**

```jsx
import {Icon} from 'components';
const icons1 = ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrow-salt', 'down', 'up', 'left', 'right', 'caret-down', 'caret-up', 'caret-left', 'caret-right', 'caret-circle-right', 'caret-circle-left', 'caret-circle-o-right', 'caret-circle-o-left', 'circle-right', 'circle-left', 'circle-o-right', 'circle-o-left', 'double-right', 'double-left', 'verticle-right', 'verticle-left', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-right', 'arrow-up', 'arrow-down', 'arrow-left', 'play-circle', 'play-circle-o', 'circle-up', 'circle-down', 'circle-o-up', 'circle-o-down', 'caret-circle-o-up', 'caret-circle-o-down', 'caret-circle-up', 'caret-circle-down'];
class IconView extends React.Component {
  render() {
    return (
      icons1.map(function(val,index){
  return <li><Icon type={val} key={val} /></li>        
})
    )
  }
}
// icons1.map(function(val,index){
//   return <li><Icon type={val} key={val} /></li>        
// })
<IconView />
```

#### **二. 提示建议性图标**

```jsx
import {Icon} from 'components';
const icons2 = ['question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'plus-square', 'minus-square', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'cross', 'cross-circle-o', 'cross-circle', 'check', 'check-circle-o', 'check-circle', 'clock-circle-o', 'clock-circle'];

icons2.map(function(val,index){
  return <Icon type={val} key={val} />         
})
```

#### **三. 网站通用图标**

```jsx
import {Icon} from 'components';
const icons3 = ['lock', 'unlock', 'android', 'apple', 'area-chart', 'bar-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-unknown', 'file-pdf','file-excel', 'file-jpg', 'file-ppt', 'folder', 'folder-open', 'github', 'hdd', 'frown', 'meh', 'inbox', 'laptop', 'appstore-o', 'appstore', 'line-chart', 'link', 'logout', 'mail', 'menu-fold', 'menu-unfold', 'mobile', 'notification', 'paper-clip', 'picture', 'pie-chart', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'smile', 'tablet', 'tag', 'tags', 'to-top', 'upload', 'user', 'video-camera', 'windows', 'ie', 'chrome', 'home', 'loading', 'smile-circle', 'meh-circle', 'frown-circle', 'tags-o', 'tag-o', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'heart-o', 'heart', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'aliwangwang', 'aliwangwang-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customerservice', 'qrcode', 'scan', 'like', 'dislike', 'message', 'pay-circle', 'pay-circle-o', 'calculator', 'pushpin', 'pushpin-o'];
icons3.map(function(val,index){
  return <Icon type={val} key={val} />         
})
```


