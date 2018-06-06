import React from 'react';
import Helmet from 'react-helmet';

import config from '../../../../config';

import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
  height: 30,
  border: '1px solid green',
  margin: 6,
  padding: 8,
};

class HomeRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      items: Array.from({ length: 20 }),
    };
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  fetchMoreData() {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 })),
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default HomeRoute;
