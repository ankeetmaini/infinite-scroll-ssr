import React from "react";
import Helmet from "react-helmet";

import config from "../../../../config";

import InfiniteScroll from "react-infinite-scroll-component";
import DropdownTreeSelect from "./dropdown";
import './dropdown/styles.css';

const onChange = (currentNode, selectedNodes) => {
  console.log("onChange::", currentNode, selectedNodes);
};
const onAction = ({ action, node }) => {
  console.log(`onAction:: [${action}]`, node);
};
const onNodeToggle = currentNode => {
  console.log("onNodeToggle::", currentNode);
};
const data = {
  label: "search me",
  value: "searchme",
  children: [
    {
      label: "search me too",
      value: "searchmetoo",
      children: [
        {
          label: "No one can get me",
          value: "anonymous"
        }
      ]
    }
  ]
};

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class HomeRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      items: Array.from({ length: 20 })
    };
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  fetchMoreData() {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <DropdownTreeSelect
          data={data}
          onChange={onChange}
          onAction={onAction}
          onNodeToggle={onNodeToggle}
        />
      </div>
    );
  }
}

export default HomeRoute;
