// https://github.com/gaearon/react-document-title
// https://github.com/WickyNilliams/enquire.js
import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';


import {Header} from './Header';
import {Banner} from './Banner';
import {Page1} from './Page1';
import {Page2} from './Page2';
import {Page3} from './Page3';
import {Page4} from './Page4';
import {Footer} from './Footer';
import './style';

let isMobile = false;
enquireScreen((b) => {
	isMobile = b;
});

export default class Index extends React.PureComponent {
	state = {
		isFirstScreen: true,
		isMobile
	};

	componentDidMount() {
		enquireScreen((b) => {
			this.setState({isMobile: !!b});
		});
	}

	onEnterChange = (mode) => {
		this.setState({isFirstScreen: mode === 'enter'});
	};

	render() {
		return (
  <div>
    { <Header /> }
    <Banner />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Footer />
    <DocumentTitle title='Dbox - 一个基于React实现的UI组件' key='title' />
  </div>
		);
	}
}


