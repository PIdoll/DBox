import React from 'react';
import Divider from 'components/divider';

export default () => (
  <div>
    <p>默认为水平分割线(实线)</p>
    <Divider />
    <p>默认为水平分割线(虚线)</p>
    <Divider dashed />
  </div>
)

