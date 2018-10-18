import React, { Component } from 'react';


export class Page1 extends Component {
	render() {
		return (
  <div className='page1 content-wrapper' id='page1'>
    <div className='title-wrapper'>
      <span className='title-icon title-l' />
      <span className='h2'>我们的理念</span>
      <span className='title-icon title-r' />
    </div>
    <div className='image-wrapper'>
      <img src='assets/images/happiness.png' alt='happiness' className='img-bottom' />
      <img src='assets/images/customer_first.png' alt='customer_first' className='img-center' />
      <img src='assets/images/out_of_the_box.png' alt='out_of_the_box' className='img-bottom' />
    </div>
  </div>
		);
	}
}
