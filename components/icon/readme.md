
我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

##### **如何使用**

使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```jsx
<Icon type="home" style={{fontSize: 18}} />
```

最终会渲染为：

```html
<i class="idoll-icon idoll-icon-${type}"></i>
```


#### **图标列表**


##### **一. 方向性图标**

```jsx
import {Icon} from 'dbox-ui';

const icons1 = ['arrows-alt', 'backspace', 'backward', 'caret-down','caret-left', 'caret-right', 'caret-up','caret-right-circle','caret-left-circle', 'caret-up-circle','caret-down-circle', 'demolitions', 'down', 'forward', 'fullscreen-exit','fullscreen','insertion', 'left','left-circle-o', 'menu-fold', 'menu-unfold','redo', 'reply-all','reply','right','right-circle-o','shrink','swap-horiz','swap-vert','undo','up','zoom-out'];
class IconView extends React.Component {
  render() {
    return (
      icons1.map(function(val,index){
      return <li key={val} className='iconList'><Icon type={val} /><span>{val}</span></li>})
    )
  }
}
<IconView />
```

##### **二. 提示建议性图标**

```jsx
import {Icon} from 'dbox-ui';
const icons2 = ['bars','block','check','check-circle-o','check-circle','checkbox-blank-o', 'checkbox-checked','checkbox-indeterminate','close-circle','close-circle-o','close','delete','done', 'error-circle-o','error-circle','filter','help-circle-o','help-circle','history', 'info-circle-o','info-circle', 'list','loading','menu','more','plus_box','plus-circle-o',
'plus-circle','plus','radio-checked','radio-unchecked','refresh','remove-circle-o','remove-circle','remove','search','warning-o','warning'];

class IconView extends React.Component {
  render() {
    return (
      icons2.map(function(val,index){
      return <li className='iconList' key={val}><Icon type={val} /><span>{val}</span></li>})
    )
  }
}
<IconView />
```

##### **三. 网站通用图标**

```jsx
import {Icon} from 'dbox-ui';
const icons3 = ['assistant', 'account-circle-o','account-circle','achievement','appstore-o','assessment','bank-o','bank','book','calendar','chart','clear','clip','clock-o','cloud-download','cloud-upload','cloud','computer','copy','copyright','creditcard','dashboard','download','edit','email','equalizer','explore','eye_close','eye','file','flag','folder','group','home','hourglass','headset','image','idle','knowledge','link-off','link','lock','logout','message','match','notifications','phone-circle-o','process', 'position', 'pause_circle','phone','phone-locked', 'phone-callback','phone-second-forward','phone-in-talk','phone-paused','phone-transfer','phone-end','phone-deal','print','platform','sad','setting','share','smile','star-half','star-o','star','sign-out','sign-in','security','training','transfer','tag','thumb-down','thumb-up','tool','trophy','unlock','upload','user-add','user-group','user','verified','voice','volume-down','volume-mute','volume-off','volume-up','wechat', 'wallet','widgets'];

class IconView extends React.Component {
  render() {
    return (
      icons3.map(function(val,index){
      return <li className='iconList' key={val}><Icon type={val} /><span>{val}</span></li>})
    )
  }
}
<IconView />
```

```jsx noeditor
import {BackTop} from 'dbox-ui';
import IconView from '../prevPage/icon';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <IconView />
</div>
```
