import React from 'react';

import Input from 'components/input';
const Textarea = Input.Textarea

export default class TextareaInput extends React.Component {
  render() {
    return (
      <div style={{width: '400px'}}>
        <Textarea /><br /><br />
        <Textarea autosize={{minRows: 2, maxRows: 3}}
          defaultValue='高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)
          高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)' />
      </div>
    )
  }
}
