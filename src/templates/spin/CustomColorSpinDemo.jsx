import React from 'react';
import Spin from 'components/spin/index';

export default class CustomColorSpinDemo extends React.Component {
  render() {
    const style = {
      textAlign: 'center',
      background: '#13B886',
      borderRadius: 4,
      marginBottom: 20,
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 50,
      paddingRight: 50,
      marginTop: 20,
      marginBotton: 20
    }
    return (
      <div style={style}>
        <Spin color={['#fff', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.05)']} />
      </div>
    )
  }
}

