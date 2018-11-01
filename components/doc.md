# Dbox Pro组件jsx文件注意点和md文件编辑指南


## Basic Syntax

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

##Task List（任务列表）
|  - [x] Write the press release|
|  - []  Update the website     |
|  - []  Contact the media      |

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
