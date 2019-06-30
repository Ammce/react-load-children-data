import React, { Component } from "react";

class Child extends Component {
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
        <p>
          Loading child with id:{" "}
          <span style={{ color: "red" }}>
            {this.props.match.params.childId}
          </span>{" "}
        </p>
      </div>
    );
  }
}

export default Child;
