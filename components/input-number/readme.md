 #### **何时使用**
 当需要获取标准数值时。

 ##### **基本使用**
 ```jsx

 ```

 ##### **三种尺寸**
 ```jsx

 ```

 ##### **不可用切换**
```jsx

```

##### **小数**
```jsx

```

##### **格式化展示**
```jsx

```


##### **API**
数字输入框
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue |  初始值 | number |  |
| disabled | 禁用 | boolean | false |
| formatter | 指定输入框展示值的格式 | function(value: number \| string):string | - |
| max | 最大值 | number | infinity |
| min | 最小值 | number | infinity|
| parser | 指定从formatter里转换会数字的方式，和formatter搭配使用 | function | - |
| precision  | 数值精度 | number  | - |
| decimalSeparator | 小数点 | string | - |
| size | 输入框大小 | string | - |
| step | 每次改变步数，可以为小数 | number | 1 |
| value | 当前值 | number |  |
| onChange | 变化回调 | Function(value: number | string)|  |

#### **方法**
| 民称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus()| 获取焦点 |

