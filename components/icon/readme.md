# Icon

---

category: Components
chinese: 图标
type: Basic
english: Icon
toc: false

---

有含义的矢量图形，每一个图标打倒一个敌人。

## 图标的命名规范

为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用

使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```html
<Icon type="link" />
```

最终会渲染为：

```html
<i class="idollicon idollicon-${type}"></i>
```

## 本地部署



## 图标列表

> 点击图标复制代码。

### 一. 系统图标

#### 1、方向性图标

```__react
import IconSet from 'site/theme/template/IconSet';
const icons1 = [’arrows-alt’，’shrink’，’backward’，’forward’，’caret-left’，’caret-right’，’caret-down’，’caret-up’，’down’，’up ’，’down-circle’，’up-circle’，’left-circle-o’，’right-circle-o’，’left-circle’，’right-circle’，’down-circle-o’，’up-circle-o’，’menu-fold’，’menu-unfold’，’swap’];

ReactDOM.render(<IconSet className="icons" icons={icons1} key="icons1" />, mountNode);
```

#### 2、 提示建议性图标

```__react
const icons2 = ['warning-circle','plus','check-circle-o','close-circle','close','plus-circle-o','remove-circle-o','remove-circle','check','plus-circle','check-circle','close-circle-o','remove'];

ReactDOM.render(<IconSet className="icons" icons={icons2} key="icons2" />, mountNode);
```

#### 3、 网站通用性图标

```__react
const icons3 = ['delete','edit','copy','bars','calendar','message','phone','tag','search','filter','logout'];

ReactDOM.render(<IconSet className="icons" icons={icons3} key="icons3" />, mountNode);
```

### 二、业务图标

```__react
const icons4 = ['platform','user-group','user','appstore-o','home','clock','tool','unlock','achievement','trophy','sound'];
ReactDOM.render(<IconSet className="icons" icons={icons3} key="icons3" />, mountNode);

```


