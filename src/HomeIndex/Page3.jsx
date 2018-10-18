import React, { Component } from 'react';

export class Page3 extends Component {
	render() {
		return (
  <div className='page3 content-wrapper' id='page1'>
    <div className='title-wrapper'>
      <span className='title-icon title-l' />
      <span className='h2'>核心能力</span>
      <span className='title-icon title-r' />
    </div>
    <div className='image-wrapper'>
      <div>
        <span className='h3'>用研+设计</span>
        <img src='assets/images/row1.webp' alt='用研+设计' className='row1' />
      </div>
      <div>
        <span className='h3'>包装+实现</span>
        <img src='assets/images/row2.webp' alt='包装+实现' className='row2' />
      </div>
      <div>
        <span className='h3'>管理+创新</span>
        <img src='assets/images/row3.webp' alt='管理+创新' className='row3' />
      </div>
    </div>
  </div>
		);
	}
}
