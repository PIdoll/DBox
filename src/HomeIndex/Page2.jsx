import React, { Component } from 'react';

export class Page2 extends Component {
	render() {
		return (
  <div className='page2 content-wrapper' id='page1'>
    <div className='title-wrapper'>
      <span className='title-icon title-l' />
      <span className='h2'>目标 & 价值</span>
      <span className='title-icon title-r' />
    </div>
    <div className='image-wrapper'>
      <ul>
        <img src='assets/images/customer-case.png' alt='customer-case' />
      </ul>
      <ul>
        <img src='assets/images/department-build.png' alt='department-build' />
      </ul>
      <ul>
        <img src='assets/images/research_resources.png' alt='research_resources' />
      </ul>
      <ul>
        <img src='assets/images/platform-system.png' alt='platform-system' />
      </ul>
    </div>
    <div className='image-wrapper'>
      <ul>
        <li>提升平台体验及客户满意度</li><br />
        <li>提升客户系统设计主导权</li><br />
        <li>体现UED专业设计能力</li>
      </ul>
      <ul>
        <li>提升团队用户体验设计相关技能</li><br />
        <li>打造部门品牌形象，提升部门影响力</li><br />
        <li>提供UED相关技术支持和专家服务</li>
      </ul>
      <ul>
        <li>优化开发协作流程，助力开发模式变革</li><br />
        <li>整合优化设计及前端资源，建立UED管理机制及流程</li><br />
        <li>搭建通用组件库、设计素材库、提升效率</li>
      </ul>
      <ul>
        <li>提升现有产品竞争力及价值、助力部门平台升级</li><br />
        <li>深挖用户需求痛点、助力产品孵化</li><br />
        <li>打造体系化的产品风格及形象</li>
      </ul>
    </div>
  </div>
		);
	}
}
