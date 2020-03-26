import React from 'react';
import Timeline from '../timeline';
import {
  version031,
  version030,
  version029,
  version028
} from './changelog';
import './style';


function item(version) {
  return version.map((x) => (<li style={{ margin: '4px' }} key={x.reqId}>{x.title}<a href={x.href} target='_blank'>{x.reqId}</a></li>))
};

/**
 * @visibleName 版本更新
 */
class Version extends React.Component {
  render() {
    return (
      <div >
        <Timeline >
          <Timeline.Item>
            <h2>0.3.1</h2>
            <p >2020-03-26</p>
            <ul>
              {item(version031)}
            </ul>
          </Timeline.Item>
          <Timeline.Item>
            <h2>0.3.0</h2>
            <p >2020-03-26</p>
            <ul>
              {item(version030)}
            </ul>
          </Timeline.Item>
          <Timeline.Item>
            <h2>0.2.9</h2>
            <p >2020-01-16</p>
            <ul>
              {item(version029)}
            </ul>
          </Timeline.Item>
          <Timeline.Item >
            <h2>0.2.8</h2>
            <p >2019-12-26</p>
            <ul>
              {item(version028)}
            </ul>
          </Timeline.Item>
        </Timeline>
      </div>
    )
  }
}
export default Version;
