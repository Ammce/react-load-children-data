import React, { Component } from "react";

class Children extends Component {
  render() {
    console.log(
      "%c  AVAILABLE data in this component in object bellow ",
      "background: #222; color: #bada55"
    );
    console.log(this.props);
    return (
      <div>
        <h4>School is: {this.props.schoolData.name}</h4>
        <h5>Broj dece: {this.props.schoolData.brojDece} </h5>
        <p style={{ color: "red" }}>
          Loading all childs for school: {this.props.schoolData.name}
        </p>
      </div>
    );
  }
}

export default Children;
