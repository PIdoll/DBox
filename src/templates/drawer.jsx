import React from 'react';
import Button from 'components/button';
import Drawer from 'components/drawer';
import Form from 'components/form';
import Input, { Textarea } from 'components/input';
import Select from 'components/select';
import { RangePicker } from 'components/date-picker';
import { Row, Col } from 'components/grid';
import Divider from 'components/divider';
import Radio from 'components/radio';




const RadioGroup = Radio.RadioGroup;
const FormItem = Form.Item;
// const Textarea = Input.TextArea;
const { Option } = Select;

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);
class DrawerView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childrenDrawer: false,
      placement: 'right',
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false
    }
  }
  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  showDrawer1 = () => {
    this.setState({
      visible1: true,
    });
  };
  showDrawer2 = () => {
    this.setState({
      visible2: true,
    });
  };
  showDrawer3 = () => {
    this.setState({
      visible3: true,
    });
  };
  showDrawer4 = () => {
    this.setState({
      visible4: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  onClose1 = () => {
    this.setState({
      visible1: false,
    });
  };
  onClose2 = () => {
    this.setState({
      visible2: false,
    });
  };
  onClose3 = () => {
    this.setState({
      visible3: false,
    });
  };
  onClose4 = () => {
    this.setState({
      visible4: false,
    });
  };
  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };
  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <div>
          <Button type='primary' onClick={this.showDrawer}>
            打开基础抽屉
          </Button>
          <Drawer
            title='基础抽屉'
            placement='right'
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <p>一些基本内容...</p>
            <p>一些基本内容...</p>
            <p>一些基本内容...</p>
          </Drawer>
        </div>
        <h1 className='h1'>表单抽屉</h1>
        <div>
          <Button type='primary' onClick={this.showDrawer1}>
          创建表单抽屉
          </Button>
          <Drawer
            title='创建'
            width={720}
            placement='right'
            onClose={this.onClose1}
            maskClosable={false}
            visible={this.state.visible1}
            style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
            <Form layout='vertical' hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  {/* <FormItem label='Name'>
                    {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'please enter user name' }],
                  })(<Input placeholder='please enter user name' />)}
                  </FormItem> */}
                </Col>
                <Col span={12}>
                  {/* <FormItem label='Url'>
                    {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'please enter url' }],
                  })(
                    <Input
                      style={{ width: '100%' }}
                      addonBefore='http://'
                      addonAfter='.com'
                      placeholder='please enter url'
                    />
                  )}
                  </FormItem> */}
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  {/* <FormItem label='Owner'>
                    {getFieldDecorator('owner', {
                    rules: [{ required: true, message: 'Please select an owner' }],
                  })(
                    <Select placeholder='Please select an owner'>
                      <Option value='xiao'>Xiaoxiao Fu</Option>
                      <Option value='mao'>Maomao Zhou</Option>
                    </Select>
                  )}
                  </FormItem> */}
                </Col>
                <Col span={12}>
                  {/* <FormItem label='Type'>
                    {getFieldDecorator('type', {
                    rules: [{ required: true, message: 'Please choose the type' }],
                  })(
                    <Select placeholder='Please choose the type'>
                      <Option value='private'>Private</Option>
                      <Option value='public'>Public</Option>
                    </Select>
                  )}
                  </FormItem> */}
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  {/* <FormItem label='Approver'>
                    {getFieldDecorator('approver', {
                    rules: [{ required: true, message: 'Please choose the approver' }],
                  })(
                    <Select placeholder='Please choose the approver'>
                      <Option value='jack'>Jack Ma</Option>
                      <Option value='tom'>Tom Liu</Option>
                    </Select>
                  )}
                  </FormItem> */}
                </Col>
                <Col span={12}>
                  {/* <FormItem label='DateTime'>
                    {getFieldDecorator('dateTime', {
                    rules: [{ required: true, message: 'Please choose the dateTime' }],
                  })(
                    <RangePicker
                      style={{ width: '100%' }}
                      getPopupContainer={trigger => trigger.parentNode}
                    />
                  )}
                  </FormItem> */}
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <FormItem label='Description'>
                    {getFieldDecorator('description', {
                    rules: [{
                        required: true,
                        message: 'please enter url description',
                      }],
                  })(<Textarea rows={4} placeholder='please enter url description' />)}
                  </FormItem>
                </Col>
              </Row>
            </Form>
            <div
              style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
              <Button
                style={{
                marginRight: 8,
              }}
                onClick={this.onClose1}
            >
              取消
              </Button>
              <Button onClick={this.onClose1} type='primary'>提交</Button>
            </div>
          </Drawer>
        </div>
        <h1 className='h1'>多层抽屉</h1>
        <div>
          <Button type='primary' onClick={this.showDrawer2}>
          打开多层抽屉
          </Button>
          <Drawer
            title='多层级抽屉'
            width={520}
            closable={false}
            onClose={this.onClose2}
            visible={this.state.visible2}
        >
            <Button type='primary' onClick={this.showChildrenDrawer}>
            打开次级抽屉
            </Button>
            <Drawer
              title='次级抽屉'
              width={320}
              closable={false}
              onClose={this.onChildrenDrawerClose}
              visible={this.state.childrenDrawer}
          >
            这是次级抽屉
            </Drawer>
            <div
              style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
              <Button
                style={{
                marginRight: 8,
              }}
                onClick={this.onClose2}
            >
              取消
              </Button>
              <Button onClick={this.onClose2} type='primary'>
              提交
              </Button>
            </div>
          </Drawer>
        </div>
        <h1 className='h1'>信息预览</h1>
        <div>
          <Button type='primary' href='javascript:;' onClick={this.showDrawer3}>查看个人信息</Button>
          <Drawer
            width={640}
            placement='right'
            closable={false}
            onClose={this.onClose3}
            visible={this.state.visible3}
        >
            <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
            <p style={pStyle}>Personal</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title='Full Name' content='Lily' />{' '}
              </Col>
              <Col span={12}>
                <DescriptionItem title='Account' content='AntDesign@example.com' />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title='City' content='HangZhou' />
              </Col>
              <Col span={12}>
                <DescriptionItem title='Country' content='China🇨🇳' />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title='Birthday' content='February 2,1900' />
              </Col>
              <Col span={12}>
                <DescriptionItem title='Website' content='-' />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title='Message'
                  content='Make things as simple as possible but no simpler.'
              />
              </Col>
            </Row>
            <Divider />
            <p style={pStyle}>Company</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title='Position' content='Programmer' />
              </Col>
              <Col span={12}>
                <DescriptionItem title='Responsibilities' content='Coding' />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title='Department' content='AFX' />
              </Col>
              <Col span={12}>
                <DescriptionItem title='Supervisor' content={<a>Lin</a>} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title='Skills'
                  content='C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.'
              />
              </Col>
            </Row>
            <Divider />
            <p style={pStyle}>Contacts</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title='Email' content='AntDesign@example.com' />
              </Col>
              <Col span={12}>
                <DescriptionItem title='Phone Number' content='+86 181 0000 0000' />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title='Github'
                  content={(
                    <a href='http://github.com/ant-design/ant-design/'>
                    github.com/ant-design/ant-design/
                    </a>
                )}
              />
              </Col>
            </Row>
          </Drawer>
        </div>
        <h1 className='h1'>四种方位</h1>
        <div>
          <RadioGroup
            style={{ marginRight: 8 }}
            defaultValue={this.state.placement}
            onChange={this.onChange}
        >
            <Radio value='top'>上</Radio>
            <Radio value='bottom'>下</Radio>
            <Radio value='left'>左</Radio>
            <Radio value='right'>右</Radio>
          </RadioGroup>
          <br />
          <Button type='primary' onClick={this.showDrawer4}>
          打开方位抽屉
          </Button>
          <Drawer
            title='基础抽屉'
            placement={this.state.placement}
            closable={false}
            onClose={this.onClose4}
            visible={this.state.visible4}
        >
            <p>一些基本内容...</p>
            <p>一些基本内容...</p>
            <p>一些基本内容...</p>
          </Drawer>
        </div>
      </div>
    );
  }
}
const DrawerDemo = Form.create()(DrawerView);
export default DrawerDemo
