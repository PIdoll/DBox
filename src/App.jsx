import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import {
  Button,
  Dropdown,
  Checkbox,
  Affix,
  Breadcrumb,
  Steps,
  InputNumber,
  Slider,
  Progress,
  Grid,
  Collapse,
  Select,
  Cascader,
  Switch,
  Alert,
  Input,
  message,
  Layout,
  Radio,
  Icon,
  Pagination,
  Modal,
  Tag,
  Tabs,
  Tooltip,
  TimePicker,
  DatePicker,
  AutoComplete,
  Timeline,
  Spin,
  Popover,
  Divider,
  MenuDemo,
  Form,
  Badge,
  Upload,
  Avatar,
  Table,
  Anchor,
  Tree,
  Popconfirm,
  BackTop,
  Calendar,
  Transfer,
  Drawer
} from './templates/index';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/collapse' component={Collapse} />
      <Route exact path='/progress' component={Progress} />
      <Route exact path='/select' component={Select} />
      <Route exact path='/switch' component={Switch} />
      <Route exact path='/alert' component={Alert} />
      <Route exact path='/button' component={Button} />
      <Route exact path='/input' component={Input} />
      <Route exact path='/message' component={message} />
      <Route exact path='/layout' component={Layout} />
      <Route exact path='/radio' component={Radio} />
      <Route exact path='/icon' component={Icon} />
      <Route exact path='/dropdown' component={Dropdown} />
      <Route exact path='/tag' component={Tag} />
      <Route exact path='/modal' component={Modal} />
      <Route exact path='/checkbox' component={Checkbox} />
      <Route exact path='/breadcrumb' component={Breadcrumb} />
      <Route exact path='/tabs' component={Tabs} />
      <Route exact path='/tooltip' component={Tooltip} />
      <Route exact path='/timepicker' component={TimePicker} />
      <Route exact path='/datepicker' component={DatePicker} />
      <Route exact path='/autocomplete' component={AutoComplete} />
      <Route exact path='/timeline' component={Timeline} />
      <Route exact path='/spin' component={Spin} />
      <Route exact path='/popover' component={Popover} />
      <Route exact path='/divider' component={Divider} />
      <Route exact path='/menu' component={MenuDemo} />
      <Route exact path='/steps' component={Steps} />
      <Route exact path='/badge' component={Badge} />
      <Route exact path='/upload' component={Upload} />
      <Route exact path='/affix' component={Affix} />
      <Route exact path='/form' component={Form} />
      <Route exact path='/avatar' component={Avatar} />
      <Route exact path='/pagination' component={Pagination} />
      <Route exact path='/table' component={Table} />
      <Route exact path='/cascader' component={Cascader} />
      <Route exact path='/anchor' component={Anchor} />
      <Route exact path='/tree' component={Tree} />
      <Route exact path='/slider' component={Slider} />
      <Route exact path='/inputNumner' component={InputNumber} />
      <Route exact path='/popconfirm' component={Popconfirm} />
      <Route exact path='/slider' component={Slider} />
      <Route exact path='/inputNumber' component={InputNumber} />
      <Route exact path='/back-top' component={BackTop} />
      <Route exact path='/grid' component={Grid} />
      <Route exact path='/calendar' component={Calendar} />
      <Route exact path='/drawer' component={Drawer} />
      <Route exact path='/transfer' component={Transfer} />
    </div>
  </Router>
)
export default App;
