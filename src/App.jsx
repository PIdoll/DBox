import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import {Button} from './templates/index';

import Dropdown from 'templates/dropdown'
import Checkbox from 'templates/checkbox'
import Collapse from 'templates/collapse'
import Progress from 'templates/progress'
import Select from 'templates/select'
import Switch from 'templates/switch'
import Alert from 'templates/alert'
import Input from 'templates/input'
import message from 'templates/message'
import Layout from 'templates/layout'
import Radio from 'templates/radio'
import Icon from 'templates/icon'
import Pagination from 'templates/pagination'
import Modal from 'templates/modal'
import Breadcrumb from 'templates/breadcrumb'
import Tag from 'templates/tag';
import Tabs from 'templates/tabs';
import Tooltip from 'templates/tooltip';
import TimePicker from 'templates/timepicker';
import DatePicker from 'templates/date-picker';
import AutoComplete from 'templates/auto-complete';
import Timeline from 'templates/timeline';
import Spin from 'templates/spin';
import Popover from 'templates/popover';
import Divider from 'templates/divider';
import MenuDemo from 'templates/menu';
import Steps from 'templates/steps';
import Form from 'templates/form';
import Badge from 'templates/badge';
import Upload from 'templates/upload';
import Affix from 'templates/affix';
import Avatar from './templates/avatar';
import Table from 'templates/table';
import Anchor from 'templates/anchor';
import Cascader from 'templates/cascader';
import Tree from 'templates/tree';
import Popconfirm from 'templates/popconfirm';
import InputNumber from 'templates/inputNumber';
import Slider from 'templates/slider';
import BackTop from 'templates/back-top';
import Grid from 'templates/grid';
import Calendar from 'templates/calendar';
import Transfer from 'templates/transfer';
import Drawer from 'templates/drawer';


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
