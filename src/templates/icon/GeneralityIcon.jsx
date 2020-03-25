import React from 'react';
import {Icon} from 'components';

const icons = ['assistant', 'account-circle-o', 'account-circle', 'achievement', 'appstore-o', 'assessment', 'bank-o', 'bank', 'book', 'calendar', 'chart', 'clear', 'clip', 'clock-o', 'cloud-download', 'cloud-upload', 'cloud', 'computer', 'copy', 'copyright', 'creditcard', 'dashboard', 'download', 'edit', 'email', 'equalizer', 'explore', 'eye_close', 'eye', 'file', 'flag', 'folder', 'group', 'home', 'hourglass', 'headset', 'image', 'idle', 'knowledge', 'link-off', 'link', 'lock', 'logout', 'message', 'match', 'notifications', 'phone-circle-o', 'process', 'position', 'pause_circle', 'phone', 'phone-locked', 'phone-callback', 'phone-second-forward', 'phone-in-talk', 'phone-paused', 'phone-transfer', 'phone-end', 'phone-deal', 'print', 'platform', 'sad', 'setting', 'share', 'smile', 'star-half', 'star-o', 'star', 'sign-out', 'sign-in', 'security', 'training', 'transfer', 'tag', 'thumb-down', 'thumb-up', 'tool', 'trophy', 'unlock', 'upload', 'user-add', 'user-group', 'user', 'verified', 'voice', 'volume-down', 'volume-mute', 'volume-off', 'volume-up', 'wechat', 'wallet', 'widgets'];
export default class GeneralityIcon extends React.Component {
  render() {
    return (
      icons.map(function(val, index) {
      return <li key={val} className='iconList'><Icon type={val} /><span>{val}</span></li>
      })
    )
  }
}

