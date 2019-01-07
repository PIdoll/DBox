
#### **概述**
用于标记事物的属性和维度，同时亦可进行分类。


#### **基本用法**
通过添加href属性区别链接状态
```jsx

import {Tag} from 'components';
<div>
	<Tag>标签</Tag>
  <Tag href='https://www.baidu.com'>链接</Tag>
</div>
```

#### **多彩标签**
通过添加颜色进行分类
```jsx
import {Tag} from 'components';
<div>
	<Tag color='peru'>peru</Tag>
    <Tag color='coral'>coral</Tag>
    <Tag color='hotpink'>hotpink</Tag>
    <Tag color='orange'>orang</Tag>
    <Tag color='limegreen'>limegreen</Tag>
    <Tag checked color='deepskyblue'>deepskyblue</Tag>
    <Tag color='mediumslateblue'>mediumslateblue</Tag>
    <Tag color='turquoise'>turquoise</Tag>
</div>
```

#### **可移除标签**
标签可移除，支持动态删除
```jsx
import {Tag} from 'components';
<div>
  <Tag closable>可移除标签</Tag>
  <Tag closable color='turquoise'>可移除标签</Tag>
</div>
```

#### **热门标签**
通过添加hot属性进行分类
```jsx
import {Tag} from 'components';
<div>
	<span>热门话题:</span>
	<Tag hot>电影</Tag>
	<Tag hot checked>书籍</Tag>
	<Tag hot>音乐</Tag>
	<Tag hot>运动</Tag>
</div>
```

#### **动态添加和删除标签**
动态添加和删除标签
```jsx
import {Tag} from 'components';
import {TagGroup} from 'components/tag';
<TagGroup></TagGroup>
```



#### **Tag**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterClose | 关闭动画完成后的回调 | `() => void` | - |
| closable | 标签是否可以关闭 | boolean | false |
| color | 标签色 | string | - |
| target | 链接跳转方式必须和href同时设置 | string可参照a链接的跳转方式 | - 默认本页面跳转 |
| href | 链接跳转路径 | string | -  |
| checked | 设置标签的选中状态仅适用于hot和基本状态下 | boolean | false |

#### **tagGroup**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tags | 热门话题的默认文本 | array | `['Movies', 'Books', 'Music']` |
| id | 默认不可移除的标签的下标值 | number | `0` |
| text | 动态增加标签的文本内容 | string | `New Tag` |
| iconType | 动态增加标签的Icon | string | `plus` |


#### **Tag 方法**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClose | 关闭时的回调 | (e) => void | - |
| --- | --- | --- | --- |
| onChange | 点击标签时触发的回调 | (checked) => void | - |



```jsx noeditor
import {PrevPage, BackTop} from 'components';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
