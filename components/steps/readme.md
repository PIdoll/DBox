#### **何时使用**
当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

##### **通用步骤条**
```jsx
const Step = Steps.Step;
<Steps current={1}>
  <Step title='Finished' description='this is a description' />
  <Step title='In Progress' description='this is a description' />
  <Step title='Waiting' description='this is a description' />
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
<Steps current={2}>
  <Step title='Finished' description='this is a description' />
  <Step title='In Progress' description='this is a description' />
  <Step title='Waiting' description='this is a description' />
</Steps>
```

##### **自定义点状步骤条**
```jsx
const Step = Steps.Step;
<Steps current={2}>
  <Step title='Finished' description='this is a description' />
  <Step title='In Progress' description='this is a description' />
  <Step title='Waiting' description='this is a description' />
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
<Steps current={2}>
  <Step title='Finished' description='this is a description' />
  <Step title='In Progress' description='this is a description' />
  <Step title='Waiting' description='this is a description' />
</Steps>
```

##### **竖直方向步骤条**
```jsx
const Step = Steps.Step;
<Steps direction='vertical' current={0} >
  <Step title='Finished' description='This is a description' />
  <Step title='In Progress' description='This is a description' />
  <Step title='Waiting' description='This is a description' />
</Steps>
```

##### **竖直方向小尺寸步骤条**
```jsx
const Step = Steps.Step;
<Steps direction='vertical' current={0} >
  <Step title='Finished' description='This is a description' />
  <Step title='In Progress' description='This is a description' />
  <Step title='Waiting' description='This is a description' />
</Steps>
```

##### **Steps**
整体步骤条
|参数|说明|类型|默认值|
|---|---|---|---|
|current|指定当前步骤|number|0|
|direction|指定步骤条方向(可选horizontal 、vetical)|string|horizontal|
|labelPlacement|指定标签放置位置，可选（vertical）放图标放图标下面|string| horizontal|
|progressDot||||
|size|指定大小，可选（default 、small）|string| default|
|status|指定当前步骤的状态|string|process|
|initial|起始序号，从0开始计数|number|0|

##### **Steps.Step**
步骤条内的每一个步骤
|参数|说明|类型|默认值|
|---|---|---|---|
|description|步骤的详情描述，可选|string|ReactNode|-|
|icon|步骤图标的类型，可选|string|ReactNode|-|
|title|标题|string|ReactNode|-|








<style>.idoll-steps{margin-bottom: 10px}</style>
