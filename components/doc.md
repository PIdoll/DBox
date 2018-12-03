### Dbox Pro组件jsx文件注意点和md文件编辑指南


### Basic Syntax

|      Syntax       |       Description      |     中文描绘     |

|         #         |           H1           |     一级标题     |
|         ##        |           H2           |     二级标题     |
|        ###        |           H3           |     三级标题     |
|      ** bold **   |          Bold          |     文本加粗     |
|  * italicized *   |         Italic         |     文本倾斜     |
|   1. First item   |     Ordered List       |     有序列表     |
|   -  First item   |    Unordered List      |     无序列表     |
|   >  blockquote   |        Blockquote      |      长引用      |
|     ---           |     Horizontal Rule    |      水平线      |
|     ` code `      |          Code          |      代码        |
|    [title](url)   |          Link          |      链接        |
|    ![alt](img)|   |          Image         |      图片        |



### table（表格）
|     Syntax        |       Description      |
|    ------------   |     --------------     |
|      Header       |       Title            |


### Code Block(代码块)
|        ```        |
    {
      "name": "zhangsan",
      "age": 23
    }
|        ```        |


### Defiantion List(定义列表)
|    term           |
|  : defination     |


### Task List（任务列表）
|  - [x] Write the press release|
|  - []  Update the website     |
|  - []  Contact the media      |


### Comments and propTypes(注释和组件类型)
```jsx
export default class Button extends React.Component {
  static propTypes = {
    /** Description of prop "foo" */
    foo: PropTypes.number,
    /** Description of prop "baz" */
    baz: PropTypes.oneOfTypes([PropTypes.number, PropTypes.string)
  }
}
```

### 显示静态代码
```jsx static
import React from 'react';
```

### Ignoreing props(隐藏属性)
```jsx
myComponents.propTypes = {
  /**
   * @ignore
  */
 hiddenProp: React.PropTypes.string
}
```


#### 以上就是使用markdown可能用到的语法，下面就直接以“button”组件作为实例demo展示
PROPS & METHOD这里是自动生成的部分，需要在各组件的propTypes和defaultProp自定义好各个API所需的名称，默认值，类型和描述值。
标题就用一下的这种格式，标题下面的描述可直接书写


#### **按钮类型(type)**
然后就是添加demo展示了，可按照如下语法
```jsx
<Button>按钮</Button>
<Button type="danger">危险</Button>
```

对于API是否需要重新定义这个就遵从大家的建议


### API
|   参数   |   说明   |  类型  |   默认值  |
| ------- | -------- | ----- | -------- |
|  style  | 自定义样式 | object |   {}    |


