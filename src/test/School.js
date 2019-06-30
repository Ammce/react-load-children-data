import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import Child from "./Child";
import Children from "./Children";

export default class School extends Component {
  state = {};
  componentDidMount() {
    this.loadData();
  }
  loadData = async () => {
    console.log("Checking if the school with this ID exist in Redux store");
    console.log("If yes, send it to children of the schoool");
    console.log(
      "If no, fetch the data store it in redux store and send it to children of the schoool"
    );
    try {
      const data = await axios.get(
        "http://www.json-generator.com/api/json/get/cerJKoqKiG?indent=2"
      );
      this.setState(state => {
        return {
          ...state,
          schoolData: data.data
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const baseUrl = this.props.match.url;
    if (!this.state.schoolData) {
      return <p>Loading...</p>;
    } else {
      return (
        <React.Fragment>
          <Switch>
            <Route
              path={`${baseUrl}/children/:childId`}
              render={props => (
                <Child {...props} schoolData={this.state.schoolData} />
              )}
            />
            <Route
              path={`${baseUrl}/children`}
              render={props => (
                <Children {...props} schoolData={this.state.schoolData} />
              )}
            />
          </Switch>
        </React.Fragment>
      );
    }
  }
}
