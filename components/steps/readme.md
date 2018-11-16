#### **何时使用**
当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

##### **通用步骤条**
```jsx
const Step = Steps.Step;
<Steps current={1} >
  <Step title='提交完成' description='这里是一段描述文字，最多不超过两行' />
  <Step title='正在处理' description='这里是一段描述文字，最多不超过两行' />
  <Step title='等待处理' description='这里是一段描述文字，最多不超过两行' />
  <Step title='完成' description='这里是一段描述文字，最多不超过两行' />
</Steps>
```

##### **小尺寸步骤条**
```jsx
const Step = Steps.Step;
<Steps current={2} size="small">
  <Step title='Finished' description='this is a description' />
  <Step title='In Progress' description='this is a description' />
  <Step title='Waiting' description='this is a description' />
</Steps>
```

##### **点状步骤条**
```jsx
const Step = Steps.Step;
<Steps size='small' current={2}>
  <Step title='示例文字' />
  <Step title='示例文字' />
  <Step title='等待处理' />
  <Step title='完成' />
</Steps>
```

##### **自定义点状步骤条**
```jsx
const Step = Steps.Step;
<Steps progressDot current={1}>
  <Step title='步骤一' description='这里是一段描述性文字' />
  <Step title='步骤二' description='这里是一段描述性文字' />
  <Step title='步骤三' description='这里是一段描述性文字' />
  <Step title='步骤四' description='这里是一段描述性文字' />
</Steps>
```

##### **步骤切换**
```jsx
const Step = Steps.Step;
<Steps current={2}>
  <Step title='Finished' description='this is a description' />
  <Step title='In Progress' description='this is a description' />
  <Step title='Waiting' description='this is a description' />
</Steps>
```

##### **步骤运行错误**
```jsx
const Step = Steps.Step;
<Steps current={1} status='error'>
  <Step title='步骤一' description='这里是一段描述性文字' />
  <Step title='步骤二' description='这里是一段描述性文字' />
  <Step title='步骤三' description='这里是一段描述性文字' />
</Steps>
```

##### **竖直方向步骤条**
```jsx
const Step = Steps.Step;
 <Steps direction='vertical' current={1} >
  <Step title='步骤一' description='这里是一段描述性文字' />
  <Step title='步骤二' description='这里是一段描述性文字' />
  <Step title='步骤三' description='这里是一段描述性文字' />
</Steps>
```

##### **竖直方向小尺寸步骤条**
```jsx
const Step = Steps.Step;
<Steps direction='vertical' size='small' current={1} >
  <Step title='步骤一' description='这里是一段描述性文字' />
  <Step title='步骤二' description='这里是一段描述性文字' />
  <Step title='步骤三' description='这里是一段描述性文字' />
</Steps>
```

##### **Steps**

整体步骤条

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 指定当前步骤 | number|0 |
| direction | 指定步骤条方向(可选horizontal 、vetical) | string | horizontal |
| labelPlacement | 指定标签放置位置，可选（vertical）放图标放图标下面 | string | horizontal |
| progressDot |  |  |  |
| size | 指定大小，可选（default 、small）| string | default |
| status | 指定当前步骤的状态 | string | process |
| initial | 起始序号，从0开始计数 | number|0 |

##### **Steps.Step**

步骤条内的每一个步骤

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 步骤的详情描述，可选 | string | ReactNode |
| icon | 步骤图标的类型，可选 | string | ReactNode |
| title | 标题 | string | ReactNode |


<style>.idoll-steps{margin-bottom: 10px}</style>
