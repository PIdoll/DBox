import React from 'react';
import Message from 'components/message';
import Popconfirm from 'components/popconfirm';
import Switch from 'components/switch';

export default class ConditionPopconfirm extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
        }
        this.confirm = this.confirm.bind(this);
        this.handleVisibleChange = this.handleVisibleChange.bind(this);
        this.changeCondition = this.changeCondition.bind(this);
    }

    confirm() {
        this.setState({ visible: false });
        Message.success('删除成功');
    }

    changeCondition(value) {
        this.setState({ condition: value });
    }

    handleVisibleChange(visible) {
        if (!visible) {
            this.setState({ visible });
            return;
        }

        if (this.state.condition) {
            this.confirm(); // next step
        } else {
            this.setState({ visible }); // 显示popconfirm
        }
    }

    render() {
        return (
          <div>
            <Popconfirm
              title='确定要删除吗？'
              visible={this.state.visible}
              onVisibleChange={this.handleVisibleChange}
              onConfirm={this.confirm}
              onCancel={this.cancel}
              okText='确认删除'
              cancelText='取消'
        >
              <a href='#'>删除任务</a>
            </Popconfirm>
            <br />
            <br />
        是否直接删除：<Switch defaultChecked onChange={this.changeCondition} />
          </div>
        )
    }
}
