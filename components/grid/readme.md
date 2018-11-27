
#### **概述**

安全使用Flex布局，该组件有两个部分，一个是Row，一个是Col，采用Row包裹Col的方法来实现栅格布局，并且栅格布局遵从Boostrap3的标准。

####  **基本栅格布局**
```jsx


```

#### **Row**
| 参数       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| gutter    | 栅格间隔   | number | 0        |
| type      | 布局模式，可选 `flex`，现代浏览器下有效 | string |         |
| align     | flex 布局下的垂直对齐方式：`top` `middle` `bottom`  | string | `top` |
| justify   | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between`   | string | `start`  |

#### **Col**

| 参数      | 说明             | 类型               | 默认值       |
|----------|-----------------|--------------------|-------------|
| span     | 栅格占位格数，为 0 时相当于 `display: none`   | number | -        |
| order    | 栅格顺序，`flex` 布局模式下有效   | number | 0        |
| offset   | 栅格左侧的间隔格数，间隔内不可以有栅格  | number | 0        |
| push     | 栅格向右移动格数   | number | 0        |
| pull     | 栅格向左移动格数   | number | 0        |
| xs       | `<768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - |
| sm       | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - |
| md       | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - |
| lg       | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number or object | - |
