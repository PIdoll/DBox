对复杂区域进行分组和隐藏，保持页面的整洁性。

##### **折叠面板**
同时折叠或展开多个面板，通过defaultActiveKey设置默认展开项
```jsx
import {Collapse} from 'dbox-ui';
const Panel = Collapse.Panel;
const text1 = `可以同时展开多个面板，这个例子默认展开了第一个。`
function callback(key) {
  console.log(key);
}
<Collapse defaultActiveKey={['1']} onChange={callback}>
  <Panel header='标题一' key='1' >
    <p>{text1}</p>
  </Panel>
  <Panel header='标题二' key='2'>
    <p>{text1}</p>
  </Panel>
  <Panel header='标题三' key='3' disabled>
    <p>{text1}</p>
  </Panel>
</Collapse>
```

##### **手风琴**
特殊的折叠面板，只允许单个内容区域展开，通过添加accordion属性
```jsx
import {Collapse} from 'dbox-ui';
const Panel = Collapse.Panel;
const text2 = `同时只能展开一个面板，这个例子默认展开了第二个。`
function callback(key) {
  console.log(key);
}
<Collapse accordion defaultActiveKey={['2']} onChange={callback}>
  <Panel header='标题一' key='1' >
    <p>{text2}</p>
  </Panel>
  <Panel header='标题二' key='2'>
    <p>{text2}</p>
  </Panel>
  <Panel header='标题三' key='3'>
    <p>{text2}</p>
  </Panel>
</Collapse>
```


##### **嵌套面板**
对复杂层级面板进行嵌套
```jsx
import {Collapse} from 'dbox-ui';
const Panel = Collapse.Panel;
const text5 = `这里是嵌套折叠面板。`
function callback(key) {
  console.log(key);
}
<Collapse defaultActiveKey={['3']} onChange={callback}>
  <Panel header='标题一' key='1' >
    <Collapse accordion>
      <Panel header='标题一' key='2' >
        <p>{text5}</p>
      </Panel>
    </Collapse>
  </Panel>
  <Panel header='标题二' key='3'>
    <Collapse accordion defaultActiveKey={['4']}>
      <Panel header='标题一' key='4' >
        <p>{text5}</p>
      </Panel>
    </Collapse>
  </Panel>
  <Panel header='标题三' key='5'>
    <Collapse accordion>
      <Panel header='标题一' key='6' >
        <p>{text5}</p>
      </Panel>
    </Collapse>
  </Panel>
</Collapse>
```

##### **简洁风格**
一套没有过多样式的折叠面板可通过设置bordered={false}属性值来去掉多余边框
```jsx
import {Collapse} from 'dbox-ui';
const Panel = Collapse.Panel;
const text3 = `一套没有边框的简洁样式。`
function callback(key) {
  console.log(key);
}
<Collapse defaultActiveKey={['2']} bordered={false}>
  <Panel header='标题一' key='1'>
    {text3}
  </Panel>
  <Panel header='标题二' key='2'>
    {text3}
  </Panel>
  <Panel header='标题三' key='3'>
    {text3}
  </Panel>
</Collapse>
```

##### **底纹样式**
为面板内容区域增加底纹区分层次
```jsx
import {Collapse} from 'dbox-ui';
const Panel = Collapse.Panel;
const text4 = `一套拥有底纹的折叠样式。`
function callback(key) {
  console.log(key);
}
<Collapse bgColor>
  <Panel header='标题一' key='1'>
    <p>{text4}</p>
  </Panel>
  <Panel header='标题二' key='2'>
    <p>{text4}</p>
  </Panel>
  <Panel header='标题三' key='3'>
    <p>{text4}</p>
  </Panel>
</Collapse>
```


##### **Collapse**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活tab面板的key | string/[]/string |默认无，accordion模式下默认第一个元素 |
| accordion | 切换手风琴模式 | bool | false |
| bgColor | 切换底纹样式 | bool | false |
| bordered | 切换无边框样式 | bool | true |
| defaultActiveKey | 初始化选中面板的key | string | 无 |
| onChange | 切换面板的回调 | Function | 无 |

##### **Collapse.Panel**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | boolean | false |
| header | 面板头内容 | string/ReactNode | 无|
| forceRender | 被隐藏时是否渲染DOM结构 | bool | false|
| key | 对应activeKey | string | 无 |


```jsx noeditor
import {PrevPage, BackTop} from 'dbox-ui';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
