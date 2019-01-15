import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs} from 'components';
const TabPane = Tabs.TabPane;
export default class MountTabs extends React.Component {
	componentDidMount () {
    const element = ReactDOM.findDOMNode(this.refs.box_table);
    const currentHeight = element.offsetTop - element.offsetHeight;
    const left = `${element.offsetLeft - 21}px`;
    window.addEventListener('scroll', this.onScroll = () => {
      if (window.scrollY >= currentHeight && window.scrollY < element.offsetTop) {
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = left;
        element.style.width = '100%';
        element.style.padding = '20px 20px';
        element.style.backgroundColor = '#fff';
      } else if (window.scrollY < currentHeight || window.scrollY > currentHeight + element.offsetHeight) {
        element.style.position = 'relative';
        element.style.padding = '0';
        element.style.left = '0';
      }
    });
  }
  componentWillUnmount () {
      window.removeEventListener('scroll', this.onScroll);
  }
  render() {
    return (
      <Tabs ref='box_table'>
        <TabPane tab='分页一' key='31'>分页内容一</TabPane>
        <TabPane tab='分页二' key='32'>分页内容二</TabPane>
        <TabPane tab='分页三' key='33'>分页内容三</TabPane>
      </Tabs>
    )
  }
}

