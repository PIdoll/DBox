用于标记事物的属性和维度，同时亦可进行分类。

##### **基本用法**
通过添加href属性区别链接状态
```jsx

import {Tag} from 'dbox-ui';
<div>
  <Tag>标签</Tag>
  <Tag href='http://dbox-dev.paic.com.cn' target='_black'>链接</Tag>
</div>
```

##### **多彩标签**
通过添加颜色进行分类
```jsx
import {Tag} from 'dbox-ui';
<div>
  <Tag color='peru'>peru</Tag>
  <Tag color='coral'>coral</Tag>
  <Tag color='hotpink'>hotpink</Tag>
  <Tag color='orange'>orang</Tag>
  <Tag color='limegreen'>limegreen</Tag>
  <Tag color='deepskyblue'>deepskyblue</Tag>
  <Tag color='mediumslateblue'>mediumslateblue</Tag>
  <Tag color='turquoise'>turquoise</Tag>
</div>
```

##### **可移除标签**
标签可移除，支持动态删除
```jsx
import {Tag} from 'dbox-ui';
<div>
  <Tag closable>可移除标签</Tag>
  <Tag closable color='turquoise'>可移除标签</Tag>
</div>
```

##### **热门标签**
通过添加hot属性进行分类
```jsx
import {Tag} from 'dbox-ui';
<div>
	<span>热门话题:</span>
	<Tag hot>电影</Tag>
	<Tag hot checked>书籍</Tag>
	<Tag hot>音乐</Tag>
	<Tag hot>运动</Tag>
</div>
```

##### **动态添加和删除标签**
动态添加和删除标签
```jsx
import {Tag} from 'dbox-ui';
const TagGroup = Tag.Group;
<TagGroup></TagGroup>
```



##### **Tag**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closable | 标签是否可以关闭 | boolean | false |
| color | 标签色 | string | - |
| target | 链接跳转方式必须和href同时设置 | string可参照a链接的跳转方式 | - 默认本页面跳转 |
| href | 链接跳转路径 | string | -  |
| hot | 设置热门标签 | bool | false |
| checked | 设置标签的选中状态仅适用于hot和基本状态下 | boolean | false |

##### **tagGroup**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tags | 热门话题的默认文本 | array | `['电影', '书籍', '音乐']` |
| id | 默认不可移除的标签的下标值 | number | `0` |
| text | 动态增加标签的文本内容 | string | `添加` |
| iconType | 动态增加标签的Icon | string | `plus` |
| color | 动态标签的颜色 | string |  |


##### **Tag 方法**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClose | 关闭时的回调 | (e) => void | - |



```jsx noeditor
import {BackTop} from 'dbox-ui';
import TagView from '../prevPage/tag';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <TagView />
</div>
```
