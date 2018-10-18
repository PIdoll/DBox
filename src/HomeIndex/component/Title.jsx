import React, { Component } from 'react';

export default function Title (title) {
		 return (
  <div className='title-wrapper'>
    <span className='title-icon title-l' />
    <span className='h2'>{title}</span>
    <span className='title-icon title-r' />
  </div>
		)
}

