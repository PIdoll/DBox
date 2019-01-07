#### **发布周期**
* 修改版本号： 每周进行日常bugfix更新。
* 每月发布一个带有新特性的向下兼容的版本。
* 含有破坏性更新和新特性，不在发布周期内。

#### **更新记录**
```jsx noeditor
import { Version } from 'dbox-ui';

<Version />

```
```jsx noeditor
import {BackTop} from 'dbox-ui';
import VersionView from '../prevPage/version';
<div>
   <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <VersionView />
</div>
```
