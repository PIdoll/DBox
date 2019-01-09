
dbox-ui是一套基于React实现的PC端UI组件库，致力于高效的创建简约美观的产品体验。

##### **特性**

+ 高效。打造丰富的、开箱即用的组件资源，拒绝重复造轮子；简化和优化工作流程，智能预测用户行为，让用户操作更自然。

+ 清晰。消除歧义，让人们直观的看到、理解并采取行动；页面结构清晰，信息层级一目了然。

+ 美观。提供细致入微和优雅​​协调的视觉表现，体现对用户的时间和工作的尊重。

+ 灵活。设计周全的布局，规整和模块化的信息排布，为多变的需求提供良好的扩展性。

##### **环境**

+ 现代浏览器和IE11及以上
+ React >= 15.6

##### **安装**

```jsx static
npm install dbox-ui --save
```

##### **使用组件**

```jsx static
import { Button } from 'dbox-ui';
ReactDOM.render(<Button />, node);
```

##### **按需加载**

```jsx static
import  Button  from 'dbox-ui/lib/button';
import 'dbox-ui/lib/button/style';

```

引入样式:
```jsx static
@import ~dbox-ui/dist/css/dbox-ui.main.css
```

