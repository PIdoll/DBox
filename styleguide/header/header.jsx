import React from 'react';
import logoPath from '../../assets/images/logo02.png';
import './style/index';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className='homepage_header'>
          <div className='homepage_logo'>
            <img src={logoPath} alt='logo' />
            <span className='logo_text'>DBOX</span>
          </div>
          <div>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}
