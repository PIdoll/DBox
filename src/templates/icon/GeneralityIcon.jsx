import React from 'react';
import {Icon} from 'components';

const icons = ['account-circle-o', 'account-circle', 'achievement', 'appstore-o', 'assessment', 'bank-o', 'bank', 'book', 'calendar', 'chart', 'clear', 'clip', 'clock-o', 'cloud-download', 'cloud-upload', 'cloud', 'computer', 'copy', 'copyright', 'creditcard', 'dashboard', 'download', 'edit', 'email', 'equalizer', 'explore', 'eye_close', 'eye', 'file', 'flag', 'folder', 'home', 'hourglass', 'image', 'link-off', 'link', 'lock', 'logout', 'message', 'notifications', 'phone', 'platform', 'sad', 'setting', 'share', 'smile', 'star-half', 'star-o', 'star', 'tag', 'thumb-down', 'thumb-up', 'tool', 'trophy', 'unlock', 'upload', 'user-add', 'user-group', 'user', 'verified', 'voice', 'volume-down', 'volume-mute', 'volume-off', 'volume-up', 'wallet', 'widgets', 'training', 'idle', 'transfer', 'phone-circle-o', 'process', 'match', 'knowledge', 'headset', 'group', 'phone-callback', 'phone-second-forward', 'phone-in-talk', 'phone-paused', 'phone-transfer', 'phone-end', 'phone-deal', 'print',
 'phone-locked', 'sign-out', 'sign-in', 'security'];
export default class GeneralityIcon extends React.Component {
  render() {
    return (
      icons.map(function(val, index) {
      return <li key={val} className='iconList'><Icon type={val} /><span>{val}</span></li>
      })
    )
  }
}

