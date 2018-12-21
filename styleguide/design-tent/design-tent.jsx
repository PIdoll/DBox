import React from 'react';
// import Header from '../header';
import './style/index';

export default function DesignTent() {
  return (
    <section className='designTent_container'>
      <div className='design_header'>
        {/* <Header /> */}
      </div>
      <div className='design_descript'>
        <h1>设计原则</h1>
        <p>
          坚实的设计原则是整体体系得以良好运转的基础前提。设计模式的选择及运用方式，包括它们独特的组合方式，都会受到产品目标、特质及设计原则的影响。我们可以将设计原则看作"语法"，
          ,而设计模式则是"单词";只有在语法的指导和约束下，单词才能组成有意义的语句。同样，功能性设计模式与品牌风格的进化也会对设计原则产生影响。两方面会始终相辅相成的互相作用下去。
        </p>
        <p>
          All Kholmatova&nbsp;在《Design&nbsp;Systems》中将"设计原则"定义为"可以帮助团队定义优秀设计的本质及实现方式的指导原则",也就是关于如何在团队与产品实现最优设计的标准化
          共识。
        </p>
        <p>
          DBox&nbsp;在调研和探究了团队以往的项目经验的基础上，结合团队现状和业务需求将"高效的创建简约而美观的产品体验"作为我们的目标,并在团队内部达成一致。为了确保这一目标能够清晰
          地贯彻在每一个设计决策中,我们确立了"高效"、"清晰"、"美观"、"灵活"的设计原则。
        </p>
      </div>
      <div className='tent_explain'>
        <div className='efficient' style={{marginBottom: 24}}>
          <span className='design_title'>高效</span>
          <span className='design_detail'>打造丰富的、开箱即用的组件资源，拒绝重复造轮子；简化和优化工程流程,只能预测用户行为,让用户操作更自然。</span>
        </div>
        <div className='distinct' style={{marginBottom: 24}}>
          <span className='design_title'>清晰</span>
          <span className='design_detail'>消除歧义，让用户直观的看到、理解并采取行动；页面结构清晰,信息层级一目了然。</span>
        </div>
        <div className='beautiful' style={{marginBottom: 24}}>
          <span className='design_title'>美观</span>
          <span className='design_detail'>提供细致入微和优雅协调的视觉表现,体现对用户的时间和工作的尊重</span>
        </div>
        <div className='flexible'>
          <span className='design_title'>灵活</span>
          <span className='design_detail'>设计周全的布局,规整和模块化的信息排布,为多变的需求提供良好的扩展性</span>
        </div>
      </div>
      <div className='design_pic'>
        {/* <img src="" alt=""/> */}
      </div>
    </section>
  )
}
