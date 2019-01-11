import React from 'react';
import AutoAvatar from './AutoAvatar';
import BadgeAvatar from './BadgeAvatar';
import BasicAvatar from './BasicAvatar';
import ButtonAvatar from './ButtonAvatar';
import TypeAvatar from './TypeAvatar';

export default class Avatar extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API size为large,small,default三种尺寸,观察尺寸是否变化（string）<br />
          2）测试API icon为内置图标，观察图标是否变化（string）<br />
          3）测试API shape为circle,square两种形状，观察组件是否变化（string）<br />
        </h2>
        <BasicAvatar />
        <br />
        <h1 className='h1'>类型</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API size为large,small,default三种尺寸,观察尺寸是否变化（string）<br />
          2）测试API icon为内置图标，观察图标是否变化（string）<br />
          3）测试API shape为circle,square两种形状,观察组件是否变化（string）<br />
          4）测试API src为背景图片的地址,设置后看是否显示图片（string）<br />
          5）测试API alt为图片无法显示时的替代文本, 图片地址有误后看是否显示文本内容（string）<br />
          6）测试API style更改头像样式如背景颜色，大小等,设置后看样式是否生效（object）<br />
        </h2>
        <TypeAvatar />
        <br />
        <h1 className='h1'>带徽标的头像</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API size为large,small,default三种尺寸,观察尺寸是否变化（string）<br />
          2）测试API icon为内置图标,观察图标是否变化（string）<br />
          3）测试API shape为circle,square两种形状,观察组件是否变化（string）<br />
        </h2>
        <br />
        <BadgeAvatar />
        <h1 className='h1'>自动调整字符大小</h1>
        <h2 className='h2'>
        对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整,正常尺寸下建议不要超出5个单词大小
        </h2>
        <br />
        <AutoAvatar />
        <h1 className='h1'>按钮调整字符大小</h1>
        <h2 className='h2'>
        对于字符型的头像，点击按钮顺序切换字符，当字符串较长时，字体大小可以根据头像宽度自动调整。
        </h2>
        <ButtonAvatar />
      </div>
    )
  }
}
