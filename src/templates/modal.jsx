import React from 'react';
import Modal from 'components/modal/index';
import Button from 'components/button/button';
const confirm = Modal.confirm;

export default class ModalView extends React.Component {
  state = {
    visible: false,
    asyncvisible: false,
    ModalText: '对话框的内容',
    loading: false,
    footervisible: false,
    modal1Visible: false,
    modal2Visible: false
   }

  showModal = () => {
    this.setState({
      visible: true
    });
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.setState({
      visible: false
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false
    });
  }

  // 异步关闭弹出框
  asyncshowModal = () => {
    this.setState({
      asyncvisible: true
    });
  }
  asynchandleOk = (e) => {
    this.setState({
      ModalText: '对话框将在两秒后关闭',
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        asyncvisible: false,
        confirmLoading: false
      });
    }, 2000);
  }
  asynchandleCancel = (e) => {
    console.log('点击了取消');
    this.setState({
      asyncvisible: false
    });
  }

  // 自定义页脚
  footershowModal = () => {
    this.setState({
      footervisible: true
    });
  }
  footerhandleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, footervisible: false });
    }, 3000);
  }
  footerhandleCancel = () => {
    this.setState({ footervisible: false });
  }

  // 信息提示
  info = () => {
    Modal.info({
      title: '这是一条通知信息',
      content: '一些附加信息一些附加信息一些附加信息',
      onOk: function() {},
    });
  }

  success = () => {
    Modal.success({
      title: '这是一条通知信息',
      content: '一些附加信息一些附加信息一些附加信息'
    });
  }

  error = () => {
    Modal.error({
      title: '这是一条通知信息',
      content: '一些附加信息一些附加信息一些附加信息'
    });
  }

  确认对话框
  showConfirm = () => {
    confirm({
      iconType: 'close-circle',
      title: '您是否确认要删除这项内容',
      content: '一些解释',
      onOk: function() {
        console.log('确定');
      },
      onCancel: function() {}
    });
  }

  // 成功提示(自动关闭)
  autosuccess = () => {
    const modal = Modal.success({
      title: '这是一条通知信息',
      content: '一秒后自动移除'
    });
    setTimeout(() => modal.destroy(), 1000);
  }

  // 自定义位置
  setModal1Visible = (modal1Visible) => {
    this.setState({ modal1Visible });
  }
  setModal2Visible = (modal2Visible) => {
    this.setState({ modal2Visible });
  }

  render() {
    return (
      <div id='main-container'>
        <div className='h1'>
        普通弹出框(可用于展示和提交)
        </div>
        <Button type='primary' onClick={this.showModal}>显示对话框</Button>
        <Modal title='第一个 Modal' visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel} width={800}>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </Modal>

        {/* 异步关闭弹出框 */}
        <div className='h1'>
        异步关闭弹出框
        </div>
        <Button type='primary' onClick={this.asyncshowModal}>显示对话框</Button>
        <Modal title='第一个 Modal' visible={this.state.asyncvisible}
          onOk={this.asynchandleOk} onCancel={this.asynchandleCancel}>
          <p>{this.state.ModalText}</p>
        </Modal>

        {/* 自定义页脚 */}
        <div className='h1'>
          自定义页脚
        </div>
        <Button type='primary' onClick={this.footershowModal}>
        显示对话框
        </Button>
        <Modal ref='modal'
          visible={this.state.footervisible}
          title='对话框标题' onOk={this.footerhandleOk} onCancel={this.footerhandleCancel}
          footer={[
            <Button key='back' type='ghost' size='small' onClick={this.footerhandleCancel}>返 回</Button>,
            <Button key='submit' type='primary' size='small' loading={this.state.loading} onClick={this.footerhandleOk}>
            提 交
            </Button>
        ]}>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </Modal>

        {/* 信息提示 */}
        <div className='h1'>
        信息提示
        </div>
        <Button onClick={this.info}>信息提示</Button>
        <Button onClick={this.success}>成功提示</Button>
        <Button onClick={this.error}>失败提示</Button>

        <div className='h1'>
        确认对话框
        </div>
        <Button onClick={this.showConfirm}>
        确认对话框
        </Button>

        {/* 成功提示 (自动关闭) */}
        <div className='h1'>
        成功提示
        </div>
        <Button onClick={this.autosuccess}>成功提示</Button>

        {/* 自定义位置 */}
        <div className='h1'>
        自定义位置
        </div>
        <Button type='primary' onClick={() => this.setModal1Visible(true)}>显示距离顶部 20px 的对话框</Button>
        <Modal
          title='距离顶部 20px 的对话框'
          style={{ top: 20 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
          footer={[
            <Button key='cancel' type='ghost' size='small' onClick={() => this.setModal1Visible(false)}>返 回</Button>,
            <Button key='ok' type='primary' size='small' onClick={() => this.setModal1Visible(false)}>确定</Button>
          ]}>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </Modal>
        <Button type='primary' onClick={() => this.setModal2Visible(true)}>显示垂直居中的对话框</Button>
        <Modal
          title='垂直居中的对话框'
          wrapClassName='vertical-center-modal'
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
          footer={[
            <Button key='cancel' type='ghost' size='small' onClick={() => this.setModal2Visible(false)}>返 回</Button>,
            <Button key='ok' type='primary' size='small' onClick={() => this.setModal2Visible(false)}>确定</Button>
          ]}
        >
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </Modal>

      </div>
    )
  }
};
