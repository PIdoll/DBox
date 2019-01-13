import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import Alert from 'components/alert';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

export default class RouterBreadcrumb extends React.Component {
  render() {
    const Apps = () => (
      <ul className='app-list'>
        <li>
          <Link to='/apps/1'>Router1</Link>：<Link to='/apps/1/detail'>点击</Link>
        </li>
        <li>
          <Link to='/apps/2'>Router2</Link>：<Link to='/apps/2/detail'>点击</Link>
        </li>
      </ul>
    );
    const breadcrumbNameMap = {
      '/apps': 'Application List',
      '/apps/1': 'Application1',
      '/apps/2': 'Application2',
      '/apps/1/detail': 'Detail',
      '/apps/2/detail': 'Detail'
    };
    const Home = withRouter((props) => {
      const { location } = props;
      const pathSnippets = location.pathname.split('/').filter(i => i);
      const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>
              {breadcrumbNameMap[url]}
            </Link>
          </Breadcrumb.Item>
        );
      });
      const breadcrumbItems = [(
        <Breadcrumb.Item key='home'>
          <Link to='/'>点击</Link>
        </Breadcrumb.Item>
      )].concat(extraBreadcrumbItems);
      return (
        <div className='demo'>
          <div className='demo-nav'>
            <Link to='/'>点击</Link>
            <Link to='/apps'>点击</Link>
          </div>
          <Switch>
            <Route path='/apps' component={Apps} />
            <Route render={() => <span>内容</span>} />
          </Switch>
          <Alert style={{ margin: '16px 0' }} message='内容:' />
          <Breadcrumb>
            {breadcrumbItems}
          </Breadcrumb>
        </div>
      );
    });
    return (
      <Router>
        <Home />
      </Router>
    )
  }
}
