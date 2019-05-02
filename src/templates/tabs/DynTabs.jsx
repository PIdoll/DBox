import React from 'react';
import {Tabs} from 'components';
const TabPane = Tabs.TabPane;
const panes = [
  { title: '分页一', content: '分页内容一', key: '1' },
  { title: '分页二', content: '分页内容二', key: '2' }
];
export default class DynTabs extends React.Component {
	constructor(props) {
    super(props);
    this.newTabIndex = 0;
    this.state = {
      panes,
      activeKey: panes[0].key
    }
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this)
  };
  add () {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: '新增分页', content: '新增分页内容', key: activeKey });
    this.setState({panes, activeKey});
  };
  remove (targetKey) {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({panes, activeKey});
  };
  onChange (activeKey) {
    this.setState({activeKey});
  };
  onEdit (targetKey, action) {
    this[action](targetKey);
    console.log('onEdit')
  };
  render() {
    return (
      <Tabs onChange={this.onChange} activeKey={this.state.activeKey} type='editable-card' onEdit={this.onEdit}>
        {this.state.panes.map(pane => <TabPane closable={pane.key === '1' ? false : 'true'} tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
      </Tabs>
     )
  }
}
