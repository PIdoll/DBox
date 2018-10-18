import React from 'react';
import Cascader from 'components/cascader';



const basicDatas = [{
    value: '浙江',
    label: '浙江',
    children: [{
      value: '杭州',
      label: '杭州',
      children: [{
        value: '西湖',
        label: '西湖',
      }],
    }],
  }, {
    value: '江苏',
    label: '江苏',
    children: [{
      value: '南京',
      label: '南京',
      children: [{
        value: '中华门',
        label: '中华门',
      }],
    }],
  }];

  const disabledBasicData = [{
    value: '浙江',
    label: '浙江',
    children: [{
      value: '杭州',
      label: '杭州',
      children: [{
        value: '西湖',
        label: '西湖',
      }],
    }],
  }, {
    value: '江苏',
    label: '江苏',
    disabled: true,
    children: [{
      value: '南京',
      label: '南京',
      children: [{
        value: '中华门',
        label: '中华门',
      }],
    }],
  }]

  const loadDataOptions = [{
    value: '浙江',
    label: '浙江',
    isLeaf: false,
  }, {
    value: '江苏',
    label: '江苏',
    isLeaf: false,
  },
  {
    value: '上海',
    label: '上海',
    isLeaf: false,
  }]
  const customData = [{
    value: '浙江',
    label: '浙江',
    children: [{
      value: '杭州',
      label: '杭州',
      children: [{
        value: '西湖',
        label: 'West Lake',
        code: 752100,
      }],
    }],
  }, {
    value: '上海',
    label: '上海',
    children: [{
      value: '浦东新区',
      label: '浦东新区',
      children: [{
        value: '外滩',
        label: '外滩',
        code: 453400,
      }],
    }],
  }];

  const searchData = [{
    value: '上海',
    label: '上海',
    children: [{
      value: '浦东新区',
      label: '浦东新区',
      children: [{
        value: '外滩',
        label: '外滩',
      }, {
        value: '唐镇',
        label: '唐镇',
        disabled: true,
      }],
    }],
  }, {
    value: '浙江',
    label: '浙江',
    children: [{
      value: '杭州',
      label: '杭州',
      children: [{
        value: '西湖',
        label: '西湖',
      }],
    }],
  }];

  function onChange(value, selectedOptions) {
  }

  function displayRender(label) {
    return label[label.length - 1];
  }

  function handleAreaClick(e, label, option) {
    e.stopPropagation();
  }

  const customDisplayRender = (labels, selectedOptions) => labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
          {label} (<a onClick={e => handleAreaClick(e, label, option)}>{option.code}</a>)
        </span>
      );
    }
    return <span key={option.value}>{label} / </span>;
  });

  function filter(inputValue, path) {
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
  }
export default class cascader extends React.Component {
    state = {
        text: '未选择',
        loadDataOptions,
    }
    onChange = (value, selectOptions) => {
         this.setState({
             text: selectOptions.map(o => o.label).join(',')
         })
    };

    loadData = (selectedOptions) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        setTimeout(() => {
            targetOption.loading = false;
            targetOption.children = [{
              label: `${targetOption.label} 选项 1`,
              value: '选项1',
            }, {
              label: `${targetOption.label} 选项 2`,
              value: '选项2',
            }];
            this.setState({
              options: [...this.state.loadDataOptions],
            });
        }, 1000)
    }

    render () {
        return (
          <div id='main-container'>
            <h1 className='h1'>基本 </h1>
            <span>省市区级联</span>
            <br />
            <Cascader options={basicDatas} onChange={onChange} placeholder='请选择 select' />
            <h1 className='h1'>默认值 </h1>
            <span>默认值通过数组的方式指定</span>
            <br />
            <Cascader defaultValue={['浙江', '杭州', '西湖']} options={basicDatas} onChange={onChange} placeholder='请选择 select' />
            <h1 className='h1'>可以自定义显示 </h1>
            <span>切换按钮和结果分开</span>
            <br />
            <span>{this.state.text}</span>
            &nbsp;
            <Cascader options={basicDatas} onChange={this.onChange}>
              <a href='#'>Change city</a>
            </Cascader>
            <h1 className='h1'>移入展开 </h1>
            <span>通过移入展开下级菜单，点击完成选择</span>
            <br />
            <Cascader
              options={basicDatas}
              expandTrigger='hover'
              displayRender={displayRender}
              onChange={onChange}
            />
            <h1 className='h1'>禁用选项 </h1>
            <span>通过指定 options 里的 disabled 字段。</span>
            <br />
            <Cascader options={disabledBasicData} onChange={onChange} />
            <h1 className='h1'>选择即改变 </h1>
            <span>这种交互允许只选中父级选项</span>
            <br />
            <Cascader options={basicDatas} onChange={onChange} changeOnSelect />
            <h1 className='h1'>默认值 </h1>
            <span>默认值通过数组的方式指定</span>
            <br />
            <h1 className='h1'>大小 </h1>
            <span>不同大小的级联选择期</span>
            <br />
            <div>
              <Cascader size='large' options={basicDatas} onChange={onChange} /><br /><br />
              <Cascader options={basicDatas} onChange={onChange} /><br /><br />
              <Cascader size='small' options={basicDatas} onChange={onChange} /><br /><br />
            </div>
            <h1 className='h1'>实现动态加载选项 </h1>
            <span>使用 loadData 实现动态加载选项（注意：loadData 与 showSearch 无法一起使用。）</span>
            <br />
            <Cascader
              options={this.state.loadDataOptions}
              loadData={this.loadData}
              onChange={this.onChange}
              changeOnSelect
      />
            <h1 className='h1'>自定义已选项 </h1>
            <span>例如给最后一项加上邮编链接</span>
            <br />
            <Cascader
              options={customData}
              defaultValue={['浙江', '杭州', '西湖']}
              displayRender={customDisplayRender}
              style={{ width: '100%' }}
            />
            <h1 className='h1'>可以直接搜索选项并选择。 </h1>
            <span>可以直接搜索选项并选择（Cascader[showSearch] 暂不支持服务端搜索）</span>
            <br />
            <Cascader
              options={searchData}
              onChange={onChange}
              placeholder='请选择 select'
              showSearch={{ filter }}
            />
          </div>
        )
    }
};
