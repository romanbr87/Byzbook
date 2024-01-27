import React from "react";
import "../styles/chkbox.css";

export default class CheckBox extends React.Component {
  render() {
    return (
      <label className="checkBox" style={this.props.style}>
        <input className="form-checkbox"
          type="checkbox"
          checked={this.props.value}
          onChange={this.props.onChange}
        />
        <span
          style={{ width: `50px`, height: `30px` }}
          data-on={this.props.dataOn}
          data-off={this.props.dataOff}
        ></span>
      </label>
    );
  }
}
