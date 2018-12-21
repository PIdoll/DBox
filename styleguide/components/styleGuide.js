import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Markdown from 'rsg-components/Markdown';
import Styled from 'rsg-components/Styled';

const xsmall = '@media (max-width: 600px)';

const styles = ({color, font, base, light, link, mq }) => ({
	root: {
		minHeight: '100vh',
    backgroundColor: '#fff',  
  },
	header: {
    position: 'fixed',
		top: 0,
		left: 0,
    bottom: 0,
    width: '100%',
    height: '80px',
    zIndex: '10',
    lineHeight: '80px',
    background: 'rgba(255,255,255,1)',
    boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.1)',
	},
	bar: {
    maxWidth: '1200px',
    margin: '0 auto',
		display: 'flex',
		alignItems: 'center',
		[xsmall]: {
			flexDirection: 'column',
			alignItems: 'center',
    },
	},
	nav: {
		marginLeft: 'auto',
		[xsmall]: {
			margin: [[10, 0, 0]],
    },
  }, 
  mainCont: {
    maxWidth: '1200px',
    margin: '100px auto 0',

    clear: 'both',
  },
  sidebar: {
    borderRight: '1px solid #eaeefb',
    float: 'left',
    marginRight: '-240px',
    width: '240px',
    overflowY: 'scroll',
    height: '100%',
		WebkitOverflowScrolling: 'touch',
		[mq.small]: {
			position: 'static',
			width: 'auto',
			borderWidth: [[1, 0, 0, 0]],
			paddingBottom: '20',
    },
  },
  content: {
    width: '100%',
    float: 'right',
  },
  innerCont: {
    marginLeft: '280px',
  },
	headerLink: {
		'&': {
      display: 'inline-block',
      color: '#333',
      padding: '0 10px',
		},
		'&:hover, &:active': {
      color: '#13B886',
      cursor: 'pointer',
      height: '80px',
      padding: '0 10px',
      display: 'inline-block',
      borderBottom: '2px solid #13B886',
		},
	},

	components: {
		overflow: 'auto',
	},
});

export function StyleGuideRenderer({ classes, title, homepageUrl, children ,hasSidebar,toc}) {
	return (
		<div className={classes.root}>
			<header className={classes.header}>
					<div className={classes.bar}>
						<Logo>{title}</Logo>
						<nav className={classes.nav}>
							<a
								className={classes.headerLink}
								href="https://github.com/styleguidist/react-styleguidist/tree/master/docs"
							>
								首页
							</a>
							<a
								className={classes.headerLink}
								href="https://github.com/styleguidist/react-styleguidist"
							>
								设计指南
							</a>
							<a className={classes.headerLink} href="#/Version">
								组件文档
							</a>
              <a className={classes.headerLink} href="https://gitter.im/styleguidist/styleguidist">
								设计资源
							</a>
						</nav>
					</div>
			</header>
      <div className={classes.mainCont}>
        <aside className={classes.sidebar}>
          {toc}
        </aside>
        <main className={classes.content}>
          <div className={classes.innerCont}>
             {children}
          </div>
			  </main>
      </div>
      
		</div>
	);
}

StyleGuideRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	homepageUrl: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
export default Styled(styles)(StyleGuideRenderer);